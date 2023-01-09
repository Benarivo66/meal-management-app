import { Injectable } from '@nestjs/common';
import { AddonCategoryModel } from '../db/model/addonCategModel';
import { addonCategoryItem } from '../types';

@Injectable()
export class AddonCategoryService {
  async insertAddonCategory(addonCategoryData: addonCategoryItem) {
    const newAddon = await AddonCategoryModel.query().insert(addonCategoryData);
    return newAddon;
  }
}
