import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PoseService {

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
        "lying on your back",
        "in a fighting posture",
        "as if preparing for combat",
        "balancing on one leg and holding the other in your hand",
        "hands clasped pleadingly",
        "as if getting undressed",
        "touching yourself intimately",
        "giving a friendly greeting",
        "with a gesture of triumph",
        "with your hands held up in a gesture of surrender",
        "beckoning playfully",
        "trying but failing to cover yourself modestly",
        "as if running, mid-stride",
        "standing with your head turned to look behind you",
        "crouched as if poised for action",
        "standing with your hands behind your back",
        "kneeling and twisting to look behind you",
        "sitting casually with your legs curled under you",
        "with your arms up as if to fend off a blow",
        "in a walking pose, mid-stride",
        "as if grasping for something out of reach"
    ]

    constructor() { }

    getRandomPose(): string {
        return this.poseList[Math.floor(Math.random() * this.poseList.length)];
    }
}
