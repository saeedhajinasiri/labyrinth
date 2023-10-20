import { Module } from '@nestjs/common';
import { LabyrinthService } from './labyrinth.service';
import { LabyrinthController } from './labyrinth.controller';

@Module({
  controllers: [LabyrinthController],
  providers: [LabyrinthService],
})
export class LabyrinthModule {}
