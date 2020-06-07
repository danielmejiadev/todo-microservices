// Dependencies
import { Module } from '@nestjs/common';

// Services
import { UsersService } from './users.service';

// Controllers
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

/**
 * Module for initialize the tasks resources.
 * @author Daniel Mejia
 */
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS-MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 6000
        }
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
