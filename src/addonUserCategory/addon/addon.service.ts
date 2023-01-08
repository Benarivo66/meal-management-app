import { Injectable } from "@nestjs/common";
import { AddonModel } from '../db/model/addonModel';
import { addonItem } from "../types";

@Injectable()
export class AddonService{
    async insertAddon(addonData: addonItem){
        const newAddon = await AddonModel.query().insert(addonData);
        return newAddon;
    };

    async getAddons(brandId: string){
        const addons = await AddonModel.query().where('brandId', '=', brandId);
        return addons;
    };

    async getAddon(brandId: string, addonId: string){
        const addon = await AddonModel.query().where('brandId', '=', brandId).andWhere('id', '=', addonId).first();
        return addon;
    };

    async patchAddon(brandId: string, addonId: string, body: addonItem){
        const updatedAddon = await AddonModel.query().patchAndFetchById(addonId, {
            name: body.name,
            description: body.description,
            price: body.price,
            category: body.category
        })
        return updatedAddon;
    };

    async deleteAddon(brandId: string, addonId: string){
        const deletedAddon = await AddonModel.query().findById(addonId).delete();
        return deletedAddon;
    };
};

