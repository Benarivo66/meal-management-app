import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddonModule } from './addon/addonController/addon.module';
import { AddonCategoryModule } from './addon/addonCategController/addonCateg.module';

@Module({
  imports: [AddonModule, AddonCategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
