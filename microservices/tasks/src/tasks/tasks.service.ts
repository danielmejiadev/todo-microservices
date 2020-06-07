// Dependencies
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entities
import { UsersTasks } from './tasks.entity';

// Services
import { BaseService } from '../baseBdService/base.db.service';

/**
 * Service to manage the tasks resource.
 * @author Daniel Mejia
 */
@Injectable()
export class TasksService extends BaseService<UsersTasks> {
  /**
 * Creates an instance of {@link TasksService}
 * @param repository The entity repository.
 */
  constructor(@InjectRepository(UsersTasks) repository: Repository<UsersTasks>) {
    super(repository)
  }
}
