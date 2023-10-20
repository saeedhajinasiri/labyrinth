import { Injectable } from '@nestjs/common';

@Injectable()
export class LabyrinthService {
  findAll() {
    return `This action return all the labyrinth for the current user.`;
  }

  findOne(id: number) {
    return `This action Return a specific labyrinth of the user by #${id}.`;
  }

  create() {
    return 'This action Create an empty labyrinth and returns the labyrinth id.';
  }

  defineBlockType(id: number, x: number, y: number, type: 'empty' | 'filled') {
    return `This action set the type of the specific block of the labyrinth #${id} using #${x}/#${y} coordinates. (${type}) is either 'empty' or 'filled'`;
  }

  defineStartBlock(id: number, x: number, y: number) {
    return `This action set the starting block of the labyrinth #${id} using #${x}/#${y} coordinates`;
  }

  defineEndBlock(id: number, x: number, y: number) {
    return `This action set the ending block of the labyrinth #${id} using #${x}/#${y} coordinates`;
  }

  solution(id: number) {
    return `This action return the solution for the labyrinth #${id}`;
  }
}
