import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AddonCategoryController } from './addonCateg.controller';
import { AddonCategoryService } from './addonCateg.service';
import { RolesGuard } from '../roles/roles.guard';

@Module({
  controllers: [AddonCategoryController],
  providers: [
    { provide: APP_GUARD,
    useClass: RolesGuard },
    AddonCategoryService
  ]
})
export class AddonCategoryModule {}