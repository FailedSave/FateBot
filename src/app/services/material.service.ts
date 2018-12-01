import { Injectable } from '@angular/core';
import { effectType } from '../fate-display/effect-type';

@Injectable({
    providedIn: 'root'
})
export class MaterialService {

    transformMaterialsList: string[] = ["a stone statue", "a marble statue", "a polished granite statue", "a golden statue",
        "a silver statue", "a brass statue", "a bronze statue", "a glass statue", "an ice sculpture", "a mannequin",
        "a small toy doll", "a copper statue", "a gleaming chrome statue", "a tree", "a wooden statue", "a ball-jointed toy doll",
        "a tiny ceramic figure", "a crystal statue", "an amethyst statue", "a glittering diamond statue", "a steel statue", "a life-sized porcelain figure",
        "a sapphire statue", "a ruby statue", "an emerald statue", "a marionette", "a life-sized plush toy", "a polished jade statue", "a small plush toy",
        "a chocolate statue", "a wind-up doll", "a humanoid robot", "an obsidian statue", "a mural on the wall", "a plastic anime figurine",
        "a pearl statue", "a sand sculpture", "a life-sized cardboard standee", "a life-sized poster", "a playing card", "a realistic silicone sex doll", "an inflatable sex doll"];

    freezeMaterialsList: string[] = ["frozen in time", "immobilized, aware but unable to move at all", "frozen solid", "frozen and vitrified on a cursed plate", "paralyzed, your muscles useless"]

    encasementMaterialsList: string[] = ["a slab of carbonite", "a sheet of ice", "a large block of ice", "a chocolate shell", "a coat of plaster",
        "a coat of concrete", "quick-hardening clear plastic", "a block of clear resin", "a large, gleaming crystal", "a solid blob of amber",
        "a clear, solid coat of lacquer", "a hard wax shell", "a hard gelatin shell", "a huge, clear blue sapphire", "a huge, gleaming red ruby",
        "an enormous emerald", "a layer of solid epoxy", "a solid block of glass", "a close-fitting sheet of steel", "a coat of unnaturally hard mud",
        "an enormous popsicle", "mysteriously animated water"];

    constructor() { }

    getMaterial (type: effectType, blacklistItems: string[], customMaterials: string[]): string {
        var possibleMaterials: string[];
        switch (type) {
            case effectType.transformation:
                possibleMaterials = this.transformMaterialsList;
                break;
            case effectType.freeze:
                possibleMaterials = this.freezeMaterialsList;
                break;
            case effectType.encasement:
                possibleMaterials = this.encasementMaterialsList;
                break;
            default:
                possibleMaterials = ["error: bad effect type"];
                break;
        }

        var allowableMaterials: string[] = [];
        for (let material of possibleMaterials) {
            var blacklisted: boolean = false;
            for (let blacklistItem of blacklistItems) {
                blacklistItem.trim();
                if (blacklistItem.length == 0) {
                    break;
                }
                if (material.search(blacklistItem) >= 0) {
                    blacklisted = true;
                    break;
                }
            }
            if (!blacklisted) {
                allowableMaterials.push(material);
            }
        }
        
        for (let customMaterial of customMaterials) {
            if (customMaterial.length > 0) {
                allowableMaterials.push(customMaterial);
            }
        }

        if (allowableMaterials.length == 0) {
            allowableMaterials.push("an inoffensive thing");
        }

        return allowableMaterials[Math.floor(Math.random() * allowableMaterials.length)];
    }
}
