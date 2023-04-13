import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // enable global validation
  app.useGlobalPipes(
    // utomatically transform payloads to be objects typed according to their DTO classes.
    new ValidationPipe({ transform: true }),
  );

  await app.listen(3333);
}
bootstrap();
