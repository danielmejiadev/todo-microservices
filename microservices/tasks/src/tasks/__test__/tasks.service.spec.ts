// Dependencies
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

// Under testing
import { TasksService } from '../tasks.service';
import { UsersTasks } from '../tasks.entity';

describe('TasksService', () => {
  let service: TasksService;
  const mockRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          TasksService,
          {
            provide: getRepositoryToken(UsersTasks),
            useValue: mockRepository,
          },
        ],
      })
      .compile();

    service = module.get(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
