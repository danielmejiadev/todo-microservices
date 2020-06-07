// Dependencies
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { UsersTasks } from './tasks.entity';

// Services
import { TasksService } from './tasks.service';

// Controllers
import { TasksController } from './tasks.controller';

/**
 * Module for initialize the tasks resources.
 * @author Daniel Mejia
 */
@Module({
  imports: [TypeOrmModule.forFeature([UsersTasks])],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
