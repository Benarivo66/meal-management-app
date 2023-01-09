import { Post, Body, Param, Controller, HttpException } from '@nestjs/common';

import { AddonCategoryService } from './addonCateg.service';

@Controller('brands')
export class AddonCategoryController {
  constructor(private readonly addonCategoryService: AddonCategoryService) {}
  @Post(':brandId/addon-categories')
  async createAddonCategory(
    @Param('brandId') brandId: string,
    @Body('name') name: string,
  ) {
    if (!brandId || !name) {
      throw new HttpException(
        'Please input the name field or check your request again',
        400,
      );
    }
    const response = await this.addonCategoryService.insertAddonCategory({
      name,
    });
    if (!response) {
      throw new HttpException('Invalid request', 400);
    }

    return { status: 201, response };
  }
}
