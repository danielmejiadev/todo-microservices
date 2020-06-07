// Dependencies
import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Project information.
const { npm_package_description: appDescription } = process.env;

/**
 * Build the swagger oficial documentation for API.
 * @param app The application instance.
 */
export function buildDocs(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Todo App Backend')
    .setDescription(appDescription)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
