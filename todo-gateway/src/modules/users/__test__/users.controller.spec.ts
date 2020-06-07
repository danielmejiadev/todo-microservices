// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Services
import { UsersService } from '../users.service';

// Under testing
import { UsersController } from '../users.controller';

/**
 * Test file for {@link UsersController}
 * @author Daniel Mejia
 * @File users.controller.decorator.spec.ts
 */
describe('Users Controller', () => {
  let controller: UsersController;
  const mockService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [
          UsersController,
        ],
        providers: [
          {
            provide: UsersService,
            useValue: mockService,
          }
        ]
      })
      .compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
