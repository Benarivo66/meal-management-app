import { Injectable } from "@nestjs/common";
import { AddonModel } from './db/model';
import { addonItem } from "./types";

@Injectable()
export class AddonService{
    async insertAddon(mealData: addonItem){
        const newMeal = await AddonModel.query().insert(mealData);
        return newMeal;
    };

    async getAddons(brandId: string){
        const meals = await AddonModel.query().where('brandId', '=', brandId);
        return meals;
    };

    async getAddon(brandId: string, addonId: string){
        const meal = await AddonModel.query().where('brandId', '=', brandId).andWhere('id', '=', addonId).first();
        return meal;
    };
};

