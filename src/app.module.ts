import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddonModule } from './addon/addon.module';

@Module({
  imports: [AddonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
