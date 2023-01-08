import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddonModule } from './addonUserCategory/addon/addon.module';
import { AddonCategoryModule } from './addonUserCategory/addonCategory/addonCateg.module';
import { UserModule } from './addonUserCategory/user/user.module';

@Module({
  imports: [AddonModule, AddonCategoryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {};
