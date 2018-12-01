import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AnimationEvent, trigger, state, style, animate, transition, sequence } from '@angular/animations';
import { effectType } from './effect-type';
import { PoseService } from '../services/pose.service';
import { ExpressionService } from '../services/expression.service';

@Component({
    selector: 'fb-fate-display',
    templateUrl: './fate-display.component.html',
    styleUrls: ['./fate-display.component.css'],
    animations: [
        trigger('fateState', [
            state('show', style({
                opacity: 1,
            })),
            state('hide', style({
                opacity: 0,
            })),
            transition('hide => show', animate('3000ms')),
            transition('show => hide', animate('0ms'))
        ])]
})
export class FateDisplayComponent implements OnInit {

    constructor(private _storageService: StorageService, private _poseService: PoseService, private _expressionService: ExpressionService) {

    }

    name: string = "FailedSave";
    durationChoice: string = "Short";
    permanenceChance: string = "Low";
    stripChance: string = "Medium";
    expressionChance: string = "Low";
    poseChance: string = "Low";
    material: string = "unknown material";
    duration: string = "10 minutes";
    permanent: boolean = false;
    stripped: boolean = true;
    stripDescription: string = "unknown strip";
    fateState: string = "hide";
    showBanner: boolean = false;
    poseDescription: string = "unknown pose";
    expressionDescription: string = "unknown expression";
    expression: boolean = false;
    posed: boolean = false;
    maxArticles: string = "2";
    articles: number = 2;
    blacklist: string = "";
    custom: string = "";
    transformationAllowed: boolean = true;
    freezeAllowed: boolean = false;
    encasementAllowed: boolean = false;
    effectType: effectType = effectType.transformation;

    fadeStripped: string = "hide";
    fadeMaterial: string = "hide";
    fadeExpression: string = "hide";
    fadePose: string = "hide";
    fadeDuration: string = "hide";

    shortDurationList: string[] = ["1 minute", "2 minutes", "5 minutes", "5 minutes", "10 minutes", "10 minutes", "15 minutes", "15 minutes", "20 minutes", "30 minutes"];
    longDurationList: string[] = ["30 minutes", "45 minutes", "1 hour", "1 hour", "90 minutes", "2 hours", "2 hours", "4 hours", "6 hours", "12 hours", "24 hours"];
    extendedDurationList: string[] = ["1 day", "2 days", "5 days", "1 week", "1 week", "2 weeks", "2 weeks", "3 weeks", "1 month", "2 months"];
    protractedDurationList: string[] = ["1 month", "2 months", "3 months", "6 months", "9 months", "1 year", "1 year", "2 years", "2 years", "5 years", "10 years", "50 years"];


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

    ngOnInit() {
        if (this._storageService.retrieve("name")) {
            this.name = this._storageService.retrieve("name");
        }
        else {
            this.name = "Helpless Subject";
        }
        if (this._storageService.retrieve("durationChoice")) {
            this.durationChoice = this._storageService.retrieve("durationChoice");
        }
        else {
            this.durationChoice = "Long";
        }
        if (this._storageService.retrieve("permanenceChance")) {
            this.permanenceChance = this._storageService.retrieve("permanenceChance");
        }
        else {
            this.permanenceChance = "Low";
        }
        if (this._storageService.retrieve("stripChance")) {
            this.stripChance = this._storageService.retrieve("stripChance");
        }
        else {
            this.stripChance = "Low";
        }
        if (this._storageService.retrieve("poseChance")) {
            this.poseChance = this._storageService.retrieve("poseChance");
        }
        else {
            this.poseChance = "Low";
        }
        if (this._storageService.retrieve("expressionChance")) {
            this.expressionChance = this._storageService.retrieve("expressionChance");
        }
        else {
            this.expressionChance = "Low";
        }
        if (this._storageService.retrieve("maxArticles")) {
            this.maxArticles = this._storageService.retrieve("maxArticles");
        }
        else {
            this.maxArticles = "2";
        }
        if (this._storageService.retrieve("blacklist")) {
            this.blacklist = this._storageService.retrieve("blacklist");
        }
        else {
            this.blacklist = "";
        } 
        if (this._storageService.retrieve("custom")) {
            this.custom = this._storageService.retrieve("custom");
        }
        else {
            this.custom = "";
        }
        if (this._storageService.retrieve("transformationAllowed")) {
            this.transformationAllowed = this._storageService.retrieve("transformationAllowed");
        }
        else {
            this.transformationAllowed = false;
        }
        if (this._storageService.retrieve("freezeAllowed")) {
            this.freezeAllowed = this._storageService.retrieve("freezeAllowed");
        }
        else {
            this.freezeAllowed = false;
        }
        if (this._storageService.retrieve("encasementAllowed")) {
            this.encasementAllowed = this._storageService.retrieve("encasementAllowed");
        }
        else {
            this.encasementAllowed = false;
        }
        if (!this.transformationAllowed && !this.freezeAllowed && !this.encasementAllowed) {
            this.transformationAllowed = true;
        }
    }

    getFate() {
        this.permanent = Math.random() < this.descriptionToProbability(this.permanenceChance);
        this.stripped = Math.random() < this.descriptionToProbability(this.stripChance);
        this.expression = Math.random() < this.descriptionToProbability(this.expressionChance);
        this.posed = Math.random() < this.descriptionToProbability(this.poseChance);
        this.articles = Math.floor(Math.random() * (parseInt(this.maxArticles) + 1));
        if (this.articles == 0) {
            this.stripDescription = "completely naked";
        }
        else if (this.articles == 1) {
            this.stripDescription = "down to a single article of clothing"
        }
        else {
            this.stripDescription = "down to " + this.articles + " articles of clothing"
        }
        this.poseDescription = this._poseService.getRandomPose();
        this.effectType = this.getEffectType();
        this.expressionDescription = this._expressionService.getExpression(this.effectType); 
        var possibleMaterials: string[];
        switch (this.effectType) {
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
        var blacklistItems: string[];
        if (this.blacklist.search(",") >= 0) {
            blacklistItems = this.blacklist.split(",");
        }
        else {
            blacklistItems = this.blacklist.split(";");
        }
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

        for (let customMaterial of this.custom.split(";")) {
            if (customMaterial.length > 0) {
                allowableMaterials.push(customMaterial);
            }
        }

        if (allowableMaterials.length == 0) {
            allowableMaterials.push("an inoffensive thing");
        }

        this.material = allowableMaterials[Math.floor(Math.random() * allowableMaterials.length)];
        if ((this.durationChoice === 'Short') || (this.durationChoice === 'Any' && Math.random() < 0.4)) {
            this.duration = this.shortDurationList[Math.floor(Math.random() * this.shortDurationList.length)];
        }
        else if ((this.durationChoice === 'Long') || (this.durationChoice === 'Any' && Math.random() < 0.4)) {
            this.duration = this.longDurationList[Math.floor(Math.random() * this.longDurationList.length)];
        }
        else if ((this.durationChoice === 'Extended') || (this.durationChoice === 'Any' && Math.random() < 0.4)) {
            this.duration = this.extendedDurationList[Math.floor(Math.random() * this.extendedDurationList.length)];
        }
        else {
            this.duration = this.protractedDurationList[Math.floor(Math.random() * this.protractedDurationList.length)];
        }

        this.showBanner = false;
        window.setTimeout(() => this.showBanner = true, 1000);
        this.fateState = "hide";
        this.fadeStripped = "hide";
        this.fadeMaterial = "hide";
        this.fadeExpression = "hide";
        this.fadePose = "hide";
        this.fadeDuration = "hide";
        var runningTimeout: number = 2000;
        var increment: number = 1250;
        if (this.stripped) {
            window.setTimeout(() => this.fadeStripped = "show", runningTimeout);
            runningTimeout += increment;
        }
        window.setTimeout(() => this.fadeMaterial = "show", runningTimeout);
        runningTimeout += increment;
        if (this.expression) {
            window.setTimeout(() => this.fadeExpression = "show", runningTimeout);
            runningTimeout += increment;
        }
        if (this.posed) {
            window.setTimeout(() => this.fadePose = "show", runningTimeout);
            runningTimeout += increment;
        }
        window.setTimeout(() => this.fadeDuration = "show", runningTimeout);


        this._storageService.store("name", this.name);
        this._storageService.store("durationChoice", this.durationChoice);
        this._storageService.store("permanenceChance", this.permanenceChance);
        this._storageService.store("stripChance", this.stripChance);
        this._storageService.store("expressionChance", this.expressionChance);
        this._storageService.store("poseChance", this.poseChance);
        this._storageService.store("maxArticles", this.maxArticles);
        this._storageService.store("blacklist", this.blacklist);
        this._storageService.store("custom", this.custom);
        this._storageService.store("transformationAllowed", this.transformationAllowed);
        this._storageService.store("freezeAllowed", this.freezeAllowed);
        this._storageService.store("encasementAllowed", this.encasementAllowed);
    }

    getEffectType(): effectType {
        var possibleTypes: effectType[] = [];
        if (this.transformationAllowed) {
            possibleTypes.push(effectType.transformation);
        }
        if (this.freezeAllowed) {
            possibleTypes.push(effectType.freeze);
        }
        if (this.encasementAllowed) {
            possibleTypes.push(effectType.encasement);
        }
        if (possibleTypes.length == 0) {
            return effectType.transformation;
        }
        return possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
    }

    descriptionToProbability(desc: string): number {
        switch (desc) {
            case 'None':
                return 0;
            case 'Minimal':
                return 0.05;
            case 'Low':
                return 0.2;
            case 'Medium':
                return 0.4;
            case 'High':
                return 0.6;
            case 'Certain':
                return 1;
            default:
                return 0;
        }
    }

}
