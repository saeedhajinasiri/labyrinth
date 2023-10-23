import { Injectable } from '@nestjs/common';
import { Node, LabyrinthBlock } from './entities/labyrinth.entity';
@Injectable()
export class SolutionService {
  private readonly firstNode: Node;
  private readonly lastNode: Node;
  private readonly blocks: LabyrinthBlock[];
  private visited: any = {};
  private moves: any[] = [];

  constructor(firstNode: Node, lastNode: Node, blocks: LabyrinthBlock[]) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
    this.blocks = blocks;
    this._addVisited(firstNode);
  }

  /**
   * Get the moves if the labyrinth was solvable
   */
  findSolution() {
    if (this.recursiveBFS(this.firstNode)) {
      return this.moves;
    }

    return {
      message: 'It Labyrinth does not have a solution',
    };
  }

  /**
   * Find the end node with the BFS algorithm
   * @param currentNode
   */
  recursiveBFS(currentNode: Node): Node | false {
    if (
      currentNode.x === this.lastNode.x &&
      currentNode.y === this.lastNode.y
    ) {
      return currentNode;
    }

    const nextNodes = this.nextNodes(currentNode);
    if (!nextNodes.length) {
      return false;
    }

    while (nextNodes.length > 0) {
      const x = nextNodes[0];
      nextNodes.shift();
      const result: Node | false = this.recursiveBFS(x);
      if (result) {
        this._addMove(currentNode, result);
        return currentNode;
      }
    }

    return false;
  }

  /**
   * Get all the neighbor nodes which is not already visited
   * @param currentNode
   */
  nextNodes(currentNode: Node) {
    return this.blocks.filter((item: LabyrinthBlock) => {
      if (
        item.type === 'empty' &&
        !this.visited[`${item.x},${item.y}`] &&
        (((item.x === currentNode.x + 1 || item.x === currentNode.x - 1) &&
          item.y === currentNode.y) ||
          ((item.y === currentNode.y + 1 || item.y === currentNode.y - 1) &&
            item.x === currentNode.x))
      ) {
        this._addVisited(currentNode);
        return true;
      }
    });
  }

  /**
   * add a node to the visited object
   * @param item
   * @private
   */
  private _addVisited(item: Node) {
    this.visited = Object.assign({}, this.visited, {
      [`${item.x},${item.y}`]: item,
    });
  }

  /**
   * add moves to the moves object
   * @param fromNode
   * @param toNode
   * @private
   */
  private _addMove(fromNode: Node, toNode: Node) {
    return this.moves.unshift(this._detectMove(fromNode, toNode));
  }

  /**
   * detect the moving between nodes
   * @param fromNode
   * @param toNode
   * @private
   */
  private _detectMove(fromNode: Node, toNode: Node) {
    switch (`${fromNode.x - toNode.x},${fromNode.y - toNode.y}`) {
      case '1,0':
        return 'left';
      case '-1,0':
        return 'right';
      case '0,1':
        return 'up';
      case '0,-1':
        return 'down';
      default:
        return 'there is no possible move between nodes';
    }
  }
}
