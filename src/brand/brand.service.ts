import { Injectable } from "@nestjs/common";
import { BrandModel } from './db/model';
import { mealItem } from "./types";

@Injectable()
export class BrandService{
    async insertMeal(mealData: mealItem){
        const newUser = await BrandModel.query().insert(mealData);
        return newUser;
    }
};

