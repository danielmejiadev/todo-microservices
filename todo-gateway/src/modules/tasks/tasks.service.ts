// Dependencies
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

// Services
import { BaseMicroService } from '../../baseMicroService/base.micro.service';

/**
 * Service to manage the users resource.
 * @author Daniel Mejia
 */
@Injectable()
export class TasksService extends BaseMicroService {
  /**
   * Creates an instance of {@link TasksService}
   * @param repository The entity repository.
   */
  constructor(@Inject("TASKS-MICROSERVICE") clientProxy: ClientProxy) {
    super(clientProxy)
  }
}
