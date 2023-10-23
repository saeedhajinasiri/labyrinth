import { Module } from '@nestjs/common';
import { LabyrinthsService } from './labyrinths.service';
import { LabyrinthsController } from './labyrinths.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Labyrinth } from './entities/labyrinth.entity';
import { LabyrinthBlocksModule } from './labyrinth-blocks.module';

const OrmModule = TypeOrmModule.forFeature([Labyrinth]);

@Module({
  imports: [OrmModule, LabyrinthBlocksModule],
  controllers: [LabyrinthsController],
  providers: [LabyrinthsService],
  exports: [LabyrinthsService],
})
export class LabyrinthsModule {}
