import { Test, TestingModule } from '@nestjs/testing';
import { LabyrinthsController } from './labyrinths.controller';
import { LabyrinthsService } from './labyrinths.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Labyrinth, LabyrinthBlock } from './entities/labyrinth.entity';
import { LabyrinthBlocksService } from './labyrinth-blocks.service';

describe('LabyrinthController', () => {
  let controller: LabyrinthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabyrinthsController],
      providers: [
        LabyrinthsService,
        {
          provide: getRepositoryToken(Labyrinth),
          useValue: {},
        },
        LabyrinthBlocksService,
        {
          provide: getRepositoryToken(LabyrinthBlock),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LabyrinthsController>(LabyrinthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
