// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

/**
 * Module for initialize app modules avaiable.
 * @author Daniel Mejia
 */
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
