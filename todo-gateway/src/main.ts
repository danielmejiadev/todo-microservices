// Dependencies
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Docs
import { buildDocs } from './docs';

/**
 * Starts the application.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  buildDocs(app);
  app.enableCors();

  const { PORT } = process.env;
  await app.listen(PORT || 5000);
}
bootstrap(); 
