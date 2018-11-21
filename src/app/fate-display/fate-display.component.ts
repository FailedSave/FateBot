import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AnimationEvent, trigger, state, style, animate, transition, sequence } from '@angular/animations';

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

    constructor(private _storageService: StorageService) {

    }

    name: string = "FailedSave";
    durationChoice: string = "Short";
    permanenceChance: string = "Low";
    stripChance: string = "Medium";
    expressionChance: string = "Low";
    poseChance: string = "Low";
    material: string = "a marble statue";
    duration: string = "10 minutes";
    permanent: boolean = false;
    stripped: boolean = true;
    stripDescription: string = "completely naked";
    fateState: string = "hide";
    showBanner: boolean = false;
    poseDescription: string = "unknown pose";
    expressionDescription: string = "unknown expression";
    expression: boolean = false;
    posed: boolean = false;
    maxArticles: string = "2";
    articles: number = 2;



    shortDurationList: string[] = ["1 minute", "2 minutes", "5 minutes", "5 minutes", "10 minutes", "10 minutes", "15 minutes", "15 minutes", "20 minutes", "30 minutes"];
    longDurationList: string[] = ["30 minutes", "45 minutes", "1 hour", "1 hour", "90 minutes", "2 hours", "2 hours", "4 hours", "6 hours", "12 hours", "24 hours"];
    extendedDurationList: string[] = ["1 day", "2 days", "5 days", "1 week", "1 week", "2 weeks", "2 weeks", "3 weeks", "1 month", "2 months"];
    protractedDurationList: string[] = ["1 month", "2 months", "3 months", "6 months", "9 months", "1 year", "1 year", "2 years", "2 years", "5 years", "10 years", "50 years"];


    materialsList: string[] = ["a stone statue", "a marble statue", "a polished granite statue", "a golden statue",
        "a silver statue", "a brass statue", "a bronze statue", "a glass statue", "an ice sculpture", "a mannequin",
        "a small toy doll", "a copper statue", "a gleaming chrome statue", "a tree", "a wooden statue", "a ball-jointed toy doll",
        "a tiny ceramic figure", "a crystal statue", "an amethyst statue", "a glittering diamond statue", "a steel statue", "a life-sized porcelain figure",
        "a sapphire statue", "a ruby statue", "an emerald statue", "a marionette", "a life-sized plush toy", "a polished jade statue", "a small plush toy",
        "a pearl statue", "a sand sculpture", "a life-sized cardboard standee"];

    poseList = ["standing expectantly with your hands clasped",
        "kneeling submissively",
        "down on one knee",
        "sitting cross-legged",
        "sitting on a stool",
        "with your arms stretched up in the air",
        "standing at attention",
        "in a relaxed standing posture",
        "down on all fours",
        "standing on a pedestal",
        "with one leg up on a pedestal",
        "as if leaning against a wall",
        "sitting with your feet propped up",
        "lying on your stomach",
        "in a fighting posture",
        "as if preparing for combat",
        "balancing on one leg and holding the other in your hand",
        "hands clasped pleadingly",
        "as if getting undressed",
        "touching yourself intimately",
        "giving a friendly greeting",
        "with a gesture of triumph",
        "beckoning playfully"
    ]

    expressionList = ["the transformation is quick, and leaves you with a startled expression",
    "the transformation hits hard and suddenly, leaving you with a stunned expression",
    "the transformation feels blissful, leaving you in an expression of ecstasy",
    "the transformation is slow and arousing, freezing you in a moment of unfulfilled lust",
    "the transformation forces your face into a broad, friendly smile",
    "you feel numb, and your expression is left entirely blank",
    "you barely feel yourself transforming, and your expression is neutral",
    "the transformation feels odd and surprising, leaving you with a confused expression",
    "the transformation washes over you in a cold, unexpected wave, leaving you with a terrified expression",
    "you aren't prepared for the strength of the change, and end up with a scared expression"

    ]

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
        this.poseDescription = this.poseList[Math.floor(Math.random() * this.poseList.length)];
        this.expressionDescription = this.expressionList[Math.floor(Math.random() * this.expressionList.length)];
        this.material = this.materialsList[Math.floor(Math.random() * this.materialsList.length)];
        if ((this.durationChoice === 'Short') || (this.durationChoice === 'Any' && Math.random() < 0.4)) {
            this.duration = this.shortDurationList[Math.floor(Math.random() * this.shortDurationList.length)];
        }
        else if ((this.durationChoice === 'Long') || (this.durationChoice === 'Any' && Math.random() < 0.4)){
            this.duration = this.longDurationList[Math.floor(Math.random() * this.longDurationList.length)];
        }
        else if ((this.durationChoice === 'Extended') || (this.durationChoice === 'Any' && Math.random() < 0.4)){
            this.duration = this.extendedDurationList[Math.floor(Math.random() * this.extendedDurationList.length)];
        }
        else{
            this.duration = this.protractedDurationList[Math.floor(Math.random() * this.protractedDurationList.length)];
        }        

        this.showBanner = false;
        window.setTimeout(() => this.showBanner = true, 1000);
        this.fateState = "hide";
        window.setTimeout(() => this.fateState = "show", 3000);

        this._storageService.store("name", this.name);
        this._storageService.store("durationChoice", this.durationChoice);
        this._storageService.store("permanenceChance", this.permanenceChance);
        this._storageService.store("stripChance", this.stripChance);
        this._storageService.store("expressionChance", this.expressionChance);
        this._storageService.store("poseChance", this.poseChance);
        this._storageService.store("maxArticles", this.maxArticles);
    }

    descriptionToProbability(desc: string): number {
        switch (desc) {
            case 'None':
                return 0;
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
