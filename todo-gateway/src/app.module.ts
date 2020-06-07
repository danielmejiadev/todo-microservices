// Dependencies
import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';

/**
 * Module for initialize app modules avaiable.
 * @author Daniel Mejia
 */
@Module({
  imports: [
    UsersModule,
    TasksModule,
  ],
})
export class AppModule { }
