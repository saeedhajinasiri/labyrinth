import {
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  blockType,
  Labyrinth,
  LabyrinthBlock,
} from './entities/labyrinth.entity';
import { Repository } from 'typeorm';
import { LabyrinthBlocksService } from './labyrinth-blocks.service';

@Injectable()
export class LabyrinthsService {
  constructor(
    @InjectRepository(Labyrinth)
    private readonly labyrinthRepository: Repository<Labyrinth>,
    private labyrinthBlocksService: LabyrinthBlocksService,
  ) {}

  /**
   * find all labyrinths of user
   * @param userId
   */
  findAll(userId: number): Promise<Labyrinth[]> {
    return this.labyrinthRepository.findBy({
      user_id: userId,
    });
  }

  /**
   * Find a specific labyrinth of user
   * @param id
   * @param userId
   */
  async findOne(id: number, userId: number): Promise<Labyrinth | null> {
    const labyrinth = await this.labyrinthRepository.findOneBy({
      id: id,
      user_id: userId,
    });
    if (!labyrinth) {
      throw new NotFoundException('Labyrinth not found');
    }

    return labyrinth;
  }

  /**
   * Create a labyrinth
   * @param userId
   */
  create(userId: number): Promise<Labyrinth> {
    return this.labyrinthRepository.save({
      user_id: userId,
      created_at: new Date().toJSON(),
    });
  }

  async createBlockType(
    id: number,
    x: number,
    y: number,
    type: blockType,
    userId: number,
  ): Promise<LabyrinthBlock> {
    await this.findOne(id, userId);
    const isExistLabyrinthBlock = await this.labyrinthBlocksService.findOne(
      id,
      x,
      y,
    );

    if (isExistLabyrinthBlock) {
      throw new PreconditionFailedException();
    }

    return await this.labyrinthBlocksService.create(id, x, y, type);
  }

  async updateStartBlock(id: number, x: number, y: number, userId: number) {
    const labyrinth = await this.findOne(id, userId);

    if (labyrinth?.end_x === x && labyrinth.end_y === y) {
      throw new PreconditionFailedException();
    }
    return await this.labyrinthRepository.update(
      {
        id: id,
      },
      {
        start_x: x,
        start_y: y,
      },
    );
  }

  async updateEndBlock(id: number, x: number, y: number, userId: number) {
    const labyrinth = await this.findOne(id, userId);
    if (labyrinth?.start_x === x && labyrinth.start_y === y) {
      throw new PreconditionFailedException();
    }

    return this.labyrinthRepository.update(
      {
        id: id,
      },
      {
        end_x: x,
        end_y: y,
      },
    );
  }

  solution(id: number, userId: number) {
    return `This action return the solution for the labyrinth #${id} userId #${userId} and`;
  }
}
