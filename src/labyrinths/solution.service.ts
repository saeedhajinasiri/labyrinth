import { Injectable } from '@nestjs/common';
import { Node, LabyrinthBlock } from './entities/labyrinth.entity';
@Injectable()
export class SolutionService {
  private firstNode: Node;
  private lastNode: Node;
  private blocks: LabyrinthBlock[];
  private visited: any = {};
  private moves: any[] = [];

  constructor(firstNode: Node, lastNode: Node, blocks: LabyrinthBlock[]) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
    this.blocks = blocks;
    this._addVisited(firstNode);
  }

  findSolution() {
    this.recursiveBFS(this.firstNode);
    return this.moves;
  }

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

  private _addVisited(item: Node) {
    this.visited = Object.assign({}, this.visited, {
      [`${item.x},${item.y}`]: item,
    });
  }

  private _addMove(fromNode: Node, toNode: Node) {
    if (fromNode.y === toNode.y) {
      if (fromNode.x > toNode.x) {
        return this.moves.unshift('left');
      }
      return this.moves.unshift('right');
    }

    if (fromNode.y > toNode.y) {
      return this.moves.unshift('up');
    }
    return this.moves.unshift('down');
  }
}
