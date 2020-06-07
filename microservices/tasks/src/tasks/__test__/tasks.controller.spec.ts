// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Services
import { TasksService } from '../tasks.service';

// Under testing
import { TasksController } from '../tasks.controller';

/**
 * Test file for {@link TasksController}
 * @author Daniel Mejia
 * @File tasks.controller.decorator.spec.ts
 */
describe('Tasks Controller', () => {
  let controller: TasksController;
  const mockService = {
    listResources: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [
          TasksController,
        ],
        providers: [
          {
            provide: TasksService,
            useValue: mockService,
          }
        ]
      })
      .compile();

    controller = module.get(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should list resources', async () => {
    const task = { id: 1 };
    const filters = { userId: 2 };
    const data = {
      quantity: 1,
      data: [task],
    };
    mockService.listResources.mockResolvedValue(data);
    const response = await controller.list(filters);

    expect(response).toEqual(data);
  });
});
