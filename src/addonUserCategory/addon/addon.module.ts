import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { RolesGuard } from '../roles/roles.guard';
import { AddonController } from './addon.controller';
import { AddonService } from './addon.service';


@Module({
  controllers: [AddonController],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
    },
    AddonService],

})
export class AddonModule {}