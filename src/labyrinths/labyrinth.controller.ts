import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LabyrinthService } from './labyrinth.service';

@Controller('labyrinth')
export class LabyrinthController {
  constructor(private readonly labyrinthService: LabyrinthService) {}

  /**
   * Return all the labyrinth for the current user.
   */
  @Get()
  findAll() {
    return this.labyrinthService.findAll();
  }

  /**
   * Return a specific labyrinth of the user by id.
   *
   * @param id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labyrinthService.findOne(+id);
  }

  /**
   * Create an empty labyrinth and returns the labyrinth id.
   */
  @Post()
  create() {
    return this.labyrinthService.create();
  }

  /**
   * set the type of the specific block of the labyrinth #id using x/y coordinates.
   *
   * @param id
   * @param x
   * @param y
   * @param type
   */
  @Put(':id/playfield/:x/:y/:type')
  defineBlockType(
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
    @Param('type') type: 'empty' | 'filled',
  ) {
    return this.labyrinthService.defineBlockType(+id, +x, +y, type);
  }

  /**
   * set the starting block of the labyrinth #id using x/y coordinates.
   *
   * @param id
   * @param x
   * @param y
   */
  @Put(':id/start/:x/:y')
  defineStartBlock(
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
  ) {
    return this.labyrinthService.defineStartBlock(+id, +x, +y);
  }

  /**
   * set the ending block of the labyrinth #id using x/y coordinates.
   *
   * @param id
   * @param x
   * @param y
   */
  @Put(':id/end/:x/:y')
  defineEndBlock(
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
  ) {
    return this.labyrinthService.defineEndBlock(+id, +x, +y);
  }

  /**
   * Return the solution for the labyrinth #${id}
   *
   * @param id
   */
  @Get(':id/solution')
  solution(@Param('id') id: string) {
    return this.labyrinthService.solution(+id);
  }
}
