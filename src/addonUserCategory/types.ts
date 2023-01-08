import { Request } from 'express';

export type addonItem = {
    name: string,
    description?: string,
    price: number,
    category?: string,
    brandId?: string
};

export type addonCategoryItem = {
    name: string
};

export type userItem = {
    name: string,
    role: string
};

export interface IRequest extends Request {
    session:{
        isAdmin: boolean,
        destroy: () => void
    };
};

export type nameObjType = {
    name: string
};

export enum Role {
    User = 'user',
    Admin = 'admin',
  };
