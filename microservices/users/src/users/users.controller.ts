// Dependencies
import { Controller } from '@nestjs/common';

// Services
import { UsersService } from './users.service';

// Controllers
import { BaseMicroController } from '../baseMicroController/base.micro.controller';

/**
 * The users endpoints for this resource.
 * @author Daniel Mejia
 */
@Controller('users')
export class UsersController extends BaseMicroController {
  /**
   * Creates an instance of {@link UsersController}
   * @param { UsersService } service The service manager the users entity.
   */
  constructor(public readonly service: UsersService) {
    super(service);
  }
}
