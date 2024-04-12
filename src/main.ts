import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe);

  const config = new DocumentBuilder()
    .setTitle("Desafio Encibra - ToDo List")
    .setVersion("0.0.1")
    .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("swagger", app, document);

    app.enableCors();

    await app.listen(3001)
}
bootstrap();
