import { Module } from '@nestjs/common';

import { AddonCategoryController } from './addonCateg.controller';
import { AddonCategoryService } from './addonCateg.service';

@Module({
  controllers: [AddonCategoryController],
  providers: [AddonCategoryService]
})
export class AddonCategoryModule {}