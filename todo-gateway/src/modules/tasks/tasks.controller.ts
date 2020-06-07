// Dependencies
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Services
import { TasksService } from './tasks.service';

// Decorators
import { BaseControllerApi } from '../../baseApiController/base.api.controller.decorator';

// Dtos
import { TasksRequestParams } from './dto/request-params.dto';
import { UsersTasksListParams } from './dto/list-params.dto';

/**
 * Users tasks controller endpoints.
 * @author Daniel Mejia
 */
@ApiTags('Users Tasks')
@Controller('users_tasks')
@BaseControllerApi({
  paramTypes: {
    create: [TasksRequestParams],
    update: [TasksRequestParams]
  }
})
export class TasksController {
  /**
   * Creates an instance of {@link TasksController}
   * @param service The service manager the users entity.
   */
  constructor(public readonly service: TasksService) {}

  /**
   * List all the resources.
   * @param filters The filters applied to search.
   * @return The list of resources.
   */
  @Get()
  list(@Query() filters?: UsersTasksListParams): Promise<{data: unknown[], quantity: number}> {
    return this.service.listResources({ where: { ...filters }});
  }
}
