import { Injectable } from "@nestjs/common";
import { UserModel } from '../db/model/userModel';
import { userItem } from "../types";

@Injectable()
export class UserService{
    async insertUser(user: userItem){
        const newUser = await UserModel.query().insert(user);
        return newUser;
    };

    async login(userName: string){
        const user = await UserModel.query().where('name', '=', userName).first();

        return user;
    };
};

