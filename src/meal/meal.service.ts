import { Injectable } from "@nestjs/common";
import { MealModel } from './db/model';
import { mealItem } from "./types";

@Injectable()
export class MealService{
    async insertMeal(mealData: mealItem){
        const newMeal = await MealModel.query().insert(mealData);
        return newMeal;
    };

    async getMeals(brandId: string){
        const meals = await MealModel.query().where('brandId', '=', brandId);
        return meals;
    };

    async getMeal(brandId: string, addonId: string){
        const meal = await MealModel.query().where('brandId', '=', brandId).andWhere('id', '=', addonId).first();
        return meal;
    };
};

