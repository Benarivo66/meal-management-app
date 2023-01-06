import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
