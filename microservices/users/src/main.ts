// Dependencies
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

/**
 * Logger service
 */
const logger = new Logger();

/**
 * Starts the microservice.
 */
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 6000,
    },
  });
  app.listen(() => logger.log("Users Microservice is listening"));
}
bootstrap(); 
