import { Test, TestingModule } from '@nestjs/testing';
import { LabyrinthController } from './labyrinth.controller';
import { LabyrinthService } from './labyrinth.service';

describe('LabyrinthController', () => {
  let controller: LabyrinthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabyrinthController],
      providers: [LabyrinthService],
    }).compile();

    controller = module.get<LabyrinthController>(LabyrinthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
