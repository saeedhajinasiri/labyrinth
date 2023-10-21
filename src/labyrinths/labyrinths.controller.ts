import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LabyrinthsService } from './labyrinths.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/entities/user.entity';
import { blockType } from './entities/labyrinth.entity';

@Controller('labyrinth')
export class LabyrinthsController {
  constructor(private readonly labyrinthService: LabyrinthsService) {}

  /**
   * Return all the labyrinth for the current user.
   *
   * @param req
   */
  @Get()
  @UseGuards(AuthGuard('basic'))
  findAll(@Req() req: { user: User }) {
    return this.labyrinthService.findAll(req.user.id);
  }

  /**
   * Return a specific labyrinth of the user by id.
   *
   * @param req
   * @param id
   */
  @Get(':id')
  @UseGuards(AuthGuard('basic'))
  async findOne(@Req() req: { user: User }, @Param('id') id: string) {
    return this.labyrinthService.findOne(+id, req.user.id);
  }

  /**
   * Create an empty labyrinth and returns the labyrinth id.
   *
   * @param req
   */
  @Post()
  @UseGuards(AuthGuard('basic'))
  create(@Req() req: { user: User }) {
    return this.labyrinthService.create(req.user.id);
  }

  /**
   * set the type of the specific block of the labyrinth #id using x/y coordinates.
   *
   * @param req
   * @param id
   * @param x
   * @param y
   * @param type
   */
  @Put(':id/playfield/:x/:y/:type')
  @UseGuards(AuthGuard('basic'))
  defineBlockType(
    @Req() req: { user: User },
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
    @Param('type') type: blockType,
  ) {
    return this.labyrinthService.createBlockType(
      +id,
      +x,
      +y,
      type,
      req.user.id,
    );
  }

  /**
   * set the starting block of the labyrinth #id using x/y coordinates.
   *
   * @param req
   * @param id
   * @param x
   * @param y
   */
  @Put(':id/start/:x/:y')
  @UseGuards(AuthGuard('basic'))
  defineStartBlock(
    @Req() req: { user: User },
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
  ) {
    return this.labyrinthService.createStartBlock(+id, +x, +y, req.user.id);
  }

  /**
   * set the ending block of the labyrinth #id using x/y coordinates.
   *
   * @param req
   * @param id
   * @param x
   * @param y
   */
  @Put(':id/end/:x/:y')
  @UseGuards(AuthGuard('basic'))
  defineEndBlock(
    @Req() req: { user: User },
    @Param('id') id: string,
    @Param('x') x: string,
    @Param('y') y: string,
  ) {
    return this.labyrinthService.createEndBlock(+id, +x, +y, req.user.id);
  }

  /**
   * Return the solution for the labyrinth #${id}
   *
   * @param req
   * @param id
   */
  @Get(':id/solution')
  @UseGuards(AuthGuard('basic'))
  solution(@Req() req: { user: User }, @Param('id') id: string) {
    return this.labyrinthService.solution(+id, req.user.id);
  }
}
