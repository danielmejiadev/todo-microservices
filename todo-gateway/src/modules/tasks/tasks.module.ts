// Dependencies
import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';

// Services
import { TasksService } from './tasks.service';

// Controllers
import { TasksController } from './tasks.controller';

/**
 * Module for initialize the users resources.
 * @author Daniel Mejia
 */
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASKS-MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 7000
        }
      }
    ])
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
