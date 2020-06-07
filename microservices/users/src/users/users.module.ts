// Dependencies
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Users } from './users.entity';

// Services
import { UsersService } from './users.service';

// Controllers
import { UsersController } from './users.controller';

/**
 * Module for initialize the tasks resources.
 * @author Daniel Mejia
 */
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
