import { Injectable } from '@angular/core';
import { effectType } from '../fate-display/effect-type';

@Injectable({
    providedIn: 'root'
})
export class ExpressionService {

    constructor() { }

    transformExpressionList = ["the transformation is quick, and leaves you with a startled expression",
        "the transformation hits hard and suddenly, leaving you with a stunned expression",
        "the transformation feels blissful, leaving you in an expression of ecstasy",
        "the transformation is slow and arousing, freezing you in a moment of unfulfilled lust",
        "the transformation forces your face into a broad, friendly smile",
        "you feel numb, and your expression is left entirely blank",
        "you barely feel yourself transforming, and your expression is neutral",
        "the transformation feels odd and surprising, leaving you with a confused expression",
        "the transformation washes over you in a cold, unexpected wave, leaving you with a terrified expression",
        "the transformation feels deeply natural, and leaves you with an expression of tranquil acceptance",
        "somehow, your mind wanders away during the transformation, and your expression seems lost in thought",
        "the transformation feels better than you had anticipated as it progresses, leaving you with an expression of eager anticipation",
        "you feel defiant, but the transformation freezes your determined face before you can act",
        "you try to protest, but are frozen just as you open your mouth to speak",
        "you aren't prepared for the strength of the change, and end up with a scared expression",
        "you feel playful, and give a flirtatious smile as you transform",
        "the transformation is instantaneous, leaving you frozen midmotion"
    ]

    freezeExpressionList = ["you are frozen quickly, and left with a startled expression",
        "you are frozen suddenly, leaving you with a stunned expression",
        "the freeze feels blissful, leaving you in an expression of ecstasy",
        "the process is slow and arousing, freezing you in a moment of unfulfilled lust",
        "as you are frozen you face is forced into a broad, friendly smile",
        "you feel numb, and your expression is left entirely blank",
        "you barely feel yourself freezing, and your expression is neutral",
        "the process feels odd and surprising, leaving you with a confused expression",
        "the process washes over you in a cold, unexpected wave, leaving you with a terrified expression",
        "the experience feels deeply natural, and leaves you with an expression of tranquil acceptance",
        "somehow, your mind wanders away as you are frozen, and your expression seems lost in thought",
        "the experience feels better than you had anticipated as it progresses, leaving you with an expression of eager anticipation",
        "you feel defiant, but your determined face is frozen before you can act",
        "you try to protest, but are frozen just as you open your mouth to speak",
        "you aren't prepared for the strength of the process, and end up with a scared expression",
        "you feel playful, and give a flirtatious smile as you freeze",
        "you are frozen instantaneously, leaving you frozen midmotion"
    ]

    encasementExpressionList = ["the encasement is quick, and leaves you with a startled expression",
        "the encasement hits hard and suddenly, leaving you with a stunned expression",
        "the encasement feels blissful, leaving you in an expression of ecstasy",
        "the encasement is slow and arousing, freezing you in a moment of unfulfilled lust",
        "as you are encased you face is forced into a broad, friendly smile",
        "you feel numb, and your expression is left entirely blank",
        "you barely feel yourself being encased, and your expression is neutral",
        "the encasement feels odd and surprising, leaving you with a confused expression",
        "the encasement washes over you in a cold, unexpected wave, leaving you with a terrified expression",
        "the encasement feels deeply natural, and leaves you with an expression of tranquil acceptance",
        "somehow, your mind wanders away during the encasement, and your expression seems lost in thought",
        "the encasement feels better than you had anticipated as it progresses, leaving you with an expression of eager anticipation",
        "you feel defiant, but the encasement overwhelms your determined face before you can act",
        "you try to protest, but are frozen just as you open your mouth to speak",
        "you aren't prepared for the quickness of the encasement, and end up with a scared expression",
        "you feel playful, and give a flirtatious smile as you are encased",
        "the encasement is instantaneous, leaving you frozen midmotion"
    ]

    getExpression(type: effectType): string {
        var possibleExpressions: string[];
        switch (type) {
            case effectType.transformation:
            possibleExpressions = this.transformExpressionList;
                break;
            case effectType.freeze:
            possibleExpressions = this.freezeExpressionList;
                break;
            case effectType.encasement:
            possibleExpressions = this.encasementExpressionList;
                break;
            default:
            possibleExpressions = ["error: bad effect type"];
                break;
        }

        return possibleExpressions[Math.floor(Math.random() * possibleExpressions.length)];
    }
}
