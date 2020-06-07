// Dependencies
import { Controller } from '@nestjs/common';

// Services
import { TasksService } from './tasks.service';

// Controllers
import { BaseMicroController } from '../baseMicroController/base.micro.controller';

/**
 * The tasks request receiver.
 * @author Daniel Mejia
 */
@Controller('tasks')
export class TasksController extends BaseMicroController {
  /**
   * Creates an instance of {@link TasksController}
   * @param { TaskService } service The service manager the tasks entity.
   */
  constructor(public readonly service: TasksService) {
    super(service);
  }
}
