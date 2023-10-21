import { Test, TestingModule } from '@nestjs/testing';
import { LabyrinthsController } from './labyrinths.controller';
import { LabyrinthsService } from './labyrinths.service';

describe('LabyrinthController', () => {
  let controller: LabyrinthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabyrinthsController],
      providers: [LabyrinthsService],
    }).compile();

    controller = module.get<LabyrinthsController>(LabyrinthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
