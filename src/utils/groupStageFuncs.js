"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstRound = void 0;
const readline = __importStar(require("readline-sync"));
const Game_1 = __importDefault(require("../Game"));
const matchUpGroupStage = (group, teamA, teamB, round) => {
    console.log(`Round ${round}: Group ${group.name}
    Next match:
    ${teamA.name} x ${teamB.name}`);
    readline.question('Press enter to continue');
    console.clear();
    const game = new Game_1.default(teamA, teamB, false);
    game.on();
    readline.question('Press enter to continue');
    console.clear();
    console.log(group.toString());
    readline.question('Press enter to continue');
    console.clear();
};
const firstRound = (groups) => {
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[1], 1);
        matchUpGroupStage(groups[i], groups[i].teams[2], groups[i].teams[3], 1);
    }
    console.log('End of first round');
    readline.question('Press enter to continue');
    console.clear();
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[2], 2);
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[3], 2);
    }
    console.log('End of second round');
    readline.question('Press enter to continue');
    console.clear();
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[3], 3);
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[2], 3);
    }
    console.log('End of group stage');
    console.log('Round of 16: ');
    console.log(`
    ${groups[0].first.name} x ${groups[1].second.name}
    ${groups[2].first.name} x ${groups[3].second.name}
    ${groups[4].first.name} x ${groups[5].second.name}
    ${groups[6].first.name} x ${groups[7].second.name}
    ${groups[1].first.name} x ${groups[0].second.name}
    ${groups[3].first.name} x ${groups[2].second.name}
    ${groups[5].first.name} x ${groups[4].second.name}
    ${groups[7].first.name} x ${groups[6].second.name}
    `);
};
exports.firstRound = firstRound;
