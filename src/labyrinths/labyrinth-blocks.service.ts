import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { blockType, LabyrinthBlock } from './entities/labyrinth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LabyrinthBlocksService {
  constructor(
    @InjectRepository(LabyrinthBlock)
    private readonly labyrinthBlockRepository: Repository<LabyrinthBlock>,
  ) {}

  /**
   * find all labyrinth-blocks of specific labyrinth
   * @param labyrinthId
   */
  async findAll(labyrinthId: number): Promise<LabyrinthBlock[]> {
    return this.labyrinthBlockRepository.findBy({
      labyrinth_id: labyrinthId,
    });
  }

  /**
   * Find a specific labyrinth of user
   * @param labyrinthId
   * @param x
   * @param y
   */
  async findOne(
    labyrinthId: number,
    x: number,
    y: number,
  ): Promise<LabyrinthBlock | null> {
    return await this.labyrinthBlockRepository.findOneBy({
      labyrinth_id: labyrinthId,
      x: x,
      y: y,
    });
  }

  /**
   * Create a labyrinth
   * @param labyrinthId
   * @param x
   * @param y
   * @param type
   */
  create(
    labyrinthId: number,
    x: number,
    y: number,
    type: blockType,
  ): Promise<LabyrinthBlock> {
    return this.labyrinthBlockRepository.save({
      type: type,
      labyrinth_id: labyrinthId,
      x: x,
      y: y,
      created_at: new Date().toJSON(),
    });
  }
}
