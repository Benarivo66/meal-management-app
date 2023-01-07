import {
    Post,
    Body,
    Param,
    Controller,
    HttpException,
    Get,
    } from '@nestjs/common';

import { AddonService } from './addon.service';

    @Controller('brands')
    export class AddonController{
        constructor(private readonly addonService: AddonService){}
        @Post(':brandId/addons')
        async createAddon(
            @Param('brandId') brandId: string,
            @Body('name') name: string,
            @Body('description') description: string,
            @Body('price') price: number,
            @Body('category') category: string
        ){
            if(!brandId || !name || !price){
                throw new HttpException('some required field may be missing', 400);
            }
            const response = await this.addonService.insertAddon({
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
        async getAddons(@Param('brandId') brandId: string,){
            if(!brandId){
                throw new HttpException('Invalid request', 400);
            };
            const response = await this.addonService.getAddons(brandId);
            if(!response){
                throw new HttpException('no response found', 404);
            };

            return { status: 200, response }
        };

        @Get(':brandId/addons/:addonId')
        async getAddon(
            @Param('brandId') brandId: string,
            @Param('addonId') addonId: string
        ){
            if(!brandId || !addonId){
                throw new HttpException('Invalid request', 400);
            };
            const response = await this.addonService.getAddon(brandId, addonId);
            if(!response){
                throw new HttpException('no response found', 404);
            };

            return { status: 200, response }
        };
    }