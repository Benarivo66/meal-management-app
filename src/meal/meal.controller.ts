import {
    Post,
    Body,
    Param,
    Controller,
    HttpException,
    Get,
    } from '@nestjs/common';

import { MealService } from './meal.service';

    @Controller('brands')
    export class MealController{
        constructor(private readonly mealService: MealService){}
        @Post(':brandId/addons')
        async addMeal(
            @Param('brandId') brandId: string,
            @Body('name') name: string,
            @Body('description') description: string,
            @Body('price') price: number,
            @Body('category') category: string
        ){
            if(!brandId || !name || !price){
                throw new HttpException('some required field may be missing', 400);
            }
            const response = await this.mealService.insertMeal({
                name,
                description,
                price,
                category,
                brandId,
            });
            if(!response){
                throw new HttpException('no response found', 404);
            };

            return { status: 201, response };
        };

        @Get(':brandId/addons')
        async getMeals(@Param('brandId') brandId: string,){
            if(!brandId){
                throw new HttpException('Invalid request', 400);
            };
            const response = await this.mealService.getMeals(brandId);
            if(!response){
                throw new HttpException('no response found', 404);
            };

            return { status: 200, response }
        };

        @Get(':brandId/addons/:addonId')
        async getMeal(
            @Param('brandId') brandId: string,
            @Param('addonId') addonId: string
        ){
            if(!brandId || !addonId){
                throw new HttpException('Invalid request', 400);
            };
            const response = await this.mealService.getMeal(brandId, addonId);
            if(!response){
                throw new HttpException('no response found', 404);
            };

            return { status: 200, response }
        };
    }