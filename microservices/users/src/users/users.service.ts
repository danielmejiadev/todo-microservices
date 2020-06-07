// Dependencies
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entities
import { Users } from './users.entity';

// Services
import { BaseService } from '../baseBdService/base.db.service';

/**
 * Service to manage the users resource.
 * @author Daniel Mejia
 */
@Injectable()
export class UsersService extends BaseService<Users> {
  /**
   * Creates an instance of {@link UsersService}
   * @param repository The entity repository.
   */
  constructor(@InjectRepository(Users) repository: Repository<Users>) {
    super(repository)
  }
}
