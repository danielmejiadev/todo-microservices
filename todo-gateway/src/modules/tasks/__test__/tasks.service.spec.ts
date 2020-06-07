// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Under testing
import { TasksService } from '../tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  const mockProxy = {};

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          TasksService,
          {
            provide: 'TASKS-MICROSERVICE',
            useValue: mockProxy,
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
