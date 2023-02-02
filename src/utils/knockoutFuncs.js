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
exports.KOStage = void 0;
const readline = __importStar(require("readline-sync"));
const Game_1 = __importDefault(require("../Game"));
const knockoutLog = (teams, phase) => {
    console.log(phase);
    for (let i = 0; i < teams.length; i += 2) {
        console.log(`${teams[i].name} x ${teams[i + 1].name}`);
    }
    console.log();
};
const matchUpKoStage = (teamA, teamB, round) => {
    console.log(`${round}
    Next match:
    ${teamA.name} x ${teamB.name}`);
    readline.question('Press enter to continue');
    console.clear();
    const game = new Game_1.default(teamA, teamB, true);
    game.on();
    readline.question('Press enter to continue');
    console.clear();
    if (round !== '2022 WORLD CUP FINAL')
        console.log(`${game.winner.name} remains alive `);
    readline.question('Press enter to continue');
    console.clear();
    return game.winner;
};
const KOStage = (groups) => {
    const roundOf16 = [];
    for (let i = 0; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i + 1].second, 'Round of 16'));
    }
    for (let i = 1; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i - 1].second, 'Quarterfinals'));
    }
    knockoutLog(roundOf16, 'Quarterfinals: ');
    const quarterfinals = [matchUpKoStage(roundOf16[0], roundOf16[1], 'Quarterfinals'), matchUpKoStage(roundOf16[2], roundOf16[3], 'Quarterfinals'),
        matchUpKoStage(roundOf16[4], roundOf16[5], 'Quarterfinals'), matchUpKoStage(roundOf16[6], roundOf16[7], 'Quarterfinals')];
    knockoutLog(quarterfinals, 'Semifinals: ');
    const semifinals = [matchUpKoStage(quarterfinals[0], quarterfinals[1], 'Semifinals'), matchUpKoStage(quarterfinals[2], quarterfinals[3], 'Semifinals')];
    knockoutLog(semifinals, 'FINAL: ');
    const final = matchUpKoStage(semifinals[0], semifinals[1], '2022 WORLD CUP FINAL');
    console.log(`${final.name} are 2022 world champions !`);
};
exports.KOStage = KOStage;
