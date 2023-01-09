import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dbSetup from './addonUserCategory/db/setup';
import { config } from 'dotenv'; 

config();
const port = process.env.PORT || 3000;

async function bootstrap() {
  dbSetup();
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
