import { Test, TestingModule } from '@nestjs/testing';
import { LabyrinthsService } from './labyrinths.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Labyrinth, LabyrinthBlock } from './entities/labyrinth.entity';
import { LabyrinthBlocksService } from './labyrinth-blocks.service';

describe('LabyrinthService', () => {
  let service: LabyrinthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<LabyrinthsService>(LabyrinthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
