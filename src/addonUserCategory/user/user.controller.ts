import {
    Post,
    Body,
    Req,
    Get,
    Controller,
    HttpException,
    } from '@nestjs/common';
    import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';
import { IRequest, nameObjType } from '../types';

    @Controller('users')
    export class UserController{
        jwtService: JwtService;
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
            @Req() req: IRequest,
            @Body() nameObj:  nameObjType
        ){
            if(!nameObj.name){
                throw new HttpException('some required field may be missing', 400);
            };
            const response = await this.userService.login(nameObj.name);
            await this.jwtService.sign(response);
            
            if(!response){
                throw new HttpException('Invalid request', 400);
            };

            return { status: 200, response, message: 'successfully logged in' };
        };

        @Get('logout')
            logout(@Req() req: IRequest) {
            req.session.destroy();
            return 'Logged out';
        };
    };