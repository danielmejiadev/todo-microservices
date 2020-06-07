// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Under testing
import { UsersService } from '../users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockProxy = {};

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          UsersService,
          {
            provide: "USERS-MICROSERVICE",
            useValue: mockProxy,
          },
        ],
      })
      .compile();

    service = module.get(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

