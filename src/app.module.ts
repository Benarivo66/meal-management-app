import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
