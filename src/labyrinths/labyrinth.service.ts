import { Injectable } from '@nestjs/common';

@Injectable()
export class LabyrinthService {
  findAll(userId: number) {
    return `This action return all the labyrinth for the current user #${userId}.`;
  }

  findOne(id: number, userId: number) {
    return `This action Return a specific labyrinth of the user #${userId} by #${id}.`;
  }

  create(userId: number) {
    return `This action Create an empty labyrinth with userId #${userId} and returns the labyrinth id.`;
  }

  defineBlockType(
    id: number,
    x: number,
    y: number,
    type: 'empty' | 'filled',
    userId: number,
  ) {
    return `This action set the type of the specific block of the labyrinth #${id} using userId #${userId} and #${x}/#${y} coordinates. (${type}) is either 'empty' or 'filled'`;
  }

  defineStartBlock(id: number, x: number, y: number, userId: number) {
    return `This action set the starting block of the labyrinth #${id} using userId #${userId} and #${x}/#${y} coordinates`;
  }

  defineEndBlock(id: number, x: number, y: number, userId: number) {
    return `This action set the ending block of the labyrinth #${id} using userId #${userId} and #${x}/#${y} coordinates`;
  }

  solution(id: number, userId: number) {
    return `This action return the solution for the labyrinth #${id} userId #${userId} and`;
  }
}
