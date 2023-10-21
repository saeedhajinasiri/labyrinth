import { Test, TestingModule } from '@nestjs/testing';
import { LabyrinthsService } from './labyrinths.service';

describe('LabyrinthService', () => {
  let service: LabyrinthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabyrinthsService],
    }).compile();

    service = module.get<LabyrinthsService>(LabyrinthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
