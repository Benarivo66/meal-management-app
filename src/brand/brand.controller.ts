import {
    Post,
    Body,
    Param,
    Controller,
    HttpException,
    } from '@nestjs/common';

import { BrandService } from './brand.service';

    @Controller('brands')
    export class BrandController{
        constructor(private readonly brandService: BrandService){}
        @Post(':brandId/addons')
        async addMeal(
            @Param('brandId') brandId: string,
            @Body('name') name: string,
            @Body('description') description: string,
            @Body('price') price: number,
            @Body('category') category: string
        ){
            if(!brandId || !name || !price){
                throw new HttpException('some required field not found', 404);
            }
            const response = await this.brandService.insertMeal({
                name,
                description,
                price,
                category,
                brandId,
            });
            if(!response){
                throw new HttpException('no response found', 404);
            }

            return { response };
        }
    }