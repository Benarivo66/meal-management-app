import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dbSetup from './meal/db/setup';

async function bootstrap() {
  dbSetup();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
