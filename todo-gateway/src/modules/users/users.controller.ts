// Dependencies
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Services
import { UsersService } from './users.service';

// Decorators
import { BaseControllerApi } from '../../baseApiController/base.api.controller.decorator';

// Dtos
import { UserRequestParams } from './dto/request-params.dto';

/**
 * The users endpoints for this resource.
 * @author Daniel Mejia
 */
@ApiTags('Users')
@Controller('users')
@BaseControllerApi({
  paramTypes: {
    create: [UserRequestParams],
    update: [UserRequestParams]
  }
})
export class UsersController {
  /**
   * Creates an instance of {@link UsersController}
   * @param { UsersService } service The service manager the users entity.
   */
  constructor(public readonly service: UsersService) {}
}
