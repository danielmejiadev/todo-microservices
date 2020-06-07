// Dependencies
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

// Entities
import { Users } from '../users.entity';

// Under testing
import { UsersService } from '../users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          UsersService,
          {
            provide: getRepositoryToken(Users),
            useValue: mockRepository,
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

