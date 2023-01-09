import {
    Post,
    Body,
    Req,
    Get,
    Controller,
    HttpException,
    } from '@nestjs/common';

import { UserService } from './user.service';
import { IRequest, nameObjType } from '../types';

    @Controller('users')
    export class UserController{
        constructor(private readonly userService: UserService){}
        @Post('register')
        async createUser(
            @Body('name') name: string,
            @Body('role') role: string,
        ){
            if(!name){
                throw new HttpException('some required field may be missing', 400);
            }
            const response = await this.userService.insertUser({
                name,
                role
            });
            if(!response){
                throw new HttpException('Invalid request', 400);
            };

            return { status: 201, response, message: 'user successfully registered' };
        };

        @Post('login')
        async getUser(
            @Body() nameObj:  nameObjType
        ){
            if(!nameObj.name){
                throw new HttpException('some required field may be missing', 400);
            };
            const user = await this.userService.login(nameObj.name);
            
            if(!user){
                throw new HttpException('Invalid request', 400);
            };

            return { status: 200, user, message: 'successfully logged in' };
        };
    };