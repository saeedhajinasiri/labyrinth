import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabyrinthBlock } from './entities/labyrinth.entity';
import { LabyrinthBlocksService } from './labyrinth-blocks.service';

const OrmModule = TypeOrmModule.forFeature([LabyrinthBlock]);

@Module({
  imports: [OrmModule],
  providers: [LabyrinthBlocksService],
  exports: [LabyrinthBlocksService],
})
export class LabyrinthBlocksModule {}
