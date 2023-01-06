import { Injectable } from "@nestjs/common";
import { MealModel } from './db/model';
import { mealItem } from "./types";

@Injectable()
export class MealService{
    async insertMeal(mealData: mealItem){
        const newUser = await MealModel.query().insert(mealData);
        return newUser;
    }
};

