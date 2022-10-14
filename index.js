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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
class Team {
    constructor(_name, _level, _points = 0, _gd = 0) {
        this._name = _name;
        this._level = _level;
        this._points = _points;
        this._gd = _gd;
    }
    winMomentum(myG, othG) {
        this._gd += (myG - othG);
        this._points += 3;
        this._level += 1;
    }
    drawMomentum() {
        this._points += 1;
    }
    loseMomentum(myG, othG) {
        this._gd -= (othG - myG);
    }
    get name() {
        return this._name;
    }
    get points() {
        return this._points;
    }
    get level() {
        return this._level;
    }
    get gd() {
        return this._gd;
    }
}
const teams = ['Catar', 'Equador', 'Senegal', 'Holanda',
    'Inglaterra', 'Irã', 'Estados Unidos', 'País de Gales',
    'Argentina', 'Arábia Saudita', 'México', 'Polônia',
    'França', 'Peru', 'Dinamarca', 'Tunísia',
    'Espanha', 'Costa Rica', 'Alemanha', 'Japão',
    'Bélgica', 'Canadá', 'Marrocos', 'Croácia',
    'Brasil', 'Sérvia', 'Suiça', 'Camarões',
    'Portugal', 'Gana', 'Uruguai', 'Coreia do Sul'];
const levels = [13, 25, 70, 82,
    91, 16, 58, 52,
    94, 7, 46, 67,
    100, 40, 73, 10,
    88, 28, 85, 19,
    76, 22, 37, 64,
    97, 49, 61, 34,
    79, 31, 55, 43
];
const nationalTeams = [];
for (let i = 0; i < 32; i++) {
    nationalTeams.push(new Team(teams[i], levels[i]));
}
class Group {
    constructor(teams, name) {
        this._teams = teams;
        this._sortedTeams = [...teams];
        this._name = name;
    }
    get teams() {
        return this._teams;
    }
    get name() {
        return this._name;
    }
    get first() {
        return this._sortedTeams[0];
    }
    get second() {
        return this._sortedTeams[1];
    }
    toString() {
        this.groupStanding();
        return `GRUPO ${this._name}:
        1- ${this._sortedTeams[0].name} ${this._sortedTeams[0].points} GD: ${this._sortedTeams[0].gd}
        2- ${this._sortedTeams[1].name} ${this._sortedTeams[1].points} GD: ${this._sortedTeams[1].gd}
        ---------------------------------------------------------------------------
        3- ${this._sortedTeams[2].name} ${this._sortedTeams[2].points} GD: ${this._sortedTeams[2].gd}
        4- ${this._sortedTeams[3].name} ${this._sortedTeams[3].points} GD: ${this._sortedTeams[3].gd}`;
    }
    groupStanding() {
        this._sortedTeams.sort((teamA, teamB) => {
            if (teamB.points > teamA.points || (teamB.points === teamA.points && teamB.gd > teamA.gd)) {
                return 1;
            }
            if (teamA.points > teamB.points || (teamA.points === teamB.points && teamA.gd > teamB.gd)) {
                return -1;
            }
            return 0;
        });
    }
}
const groups = [];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (let i = 0; i < 8; i++) {
    groups.push(new Group([nationalTeams[i * 4], nationalTeams[(i * 4) + 1], nationalTeams[(i * 4) + 2], nationalTeams[(i * 4) + 3]], letters[i]));
}
class Game {
    constructor(_teamA, _teamB, _isKoGame) {
        this._teamA = _teamA;
        this._teamB = _teamB;
        this._isKoGame = _isKoGame;
        this.winner = this._teamA;
    }
    on() {
        let teamAGoals = 0;
        let teamBGoals = 0;
        const aGoalInt = Math.round((this._teamA.level / 90) * 100);
        const bGoalInt = Math.round((this._teamB.level / 90) * 100);
        // for(let i = 0; i < 90; i ++) {
        //     setTimeout(() => {
        //     }, 2000)
        //     const num = Math.floor(Math.random() * 10000) + 1;
        //     const num2 = Math.floor(Math.random() * 10000) + 1;
        //     if(num <= aGoalInt * 3) {
        //         teamAGoals ++
        //         console.log(`${i + 1}' GOL !, ${this._teamA.name}`)
        //     }
        //     else if(num2 <= bGoalInt * 3) {
        //         teamBGoals ++;
        //         console.log(`${i + 1}' GOL !, ${this._teamB.name}`)
        //     }
        //     else {
        //         console.log(`${i + 1 }'`)
        //     }
        // }
        for (let i = 0; i < 90; i++) {
            const num = Math.floor(Math.random() * 10000) + 1;
            // console.log(`${i + 1}' GOL !, ${this._teamA}`)
            if (num <= aGoalInt * 3)
                teamAGoals++;
        }
        for (let i = 0; i < 90; i++) {
            const num = Math.floor(Math.random() * 10000) + 1;
            // console.log(`${i + 1}' GOL !, ${this._teamB}`)
            if (num <= bGoalInt * 3)
                teamBGoals++;
        }
        console.log(`${this._teamA.name} ${teamAGoals} x ${teamBGoals} ${this._teamB.name}`);
        this.aftermath(teamAGoals, teamBGoals);
    }
    aftermath(aGoals, bGoals) {
        if (aGoals > bGoals) {
            this._teamA.winMomentum(aGoals, bGoals);
            this._teamB.loseMomentum(bGoals, aGoals);
            this.winner = this._teamA;
        }
        else if (bGoals > aGoals) {
            this._teamB.winMomentum(bGoals, aGoals);
            this._teamA.loseMomentum(aGoals, bGoals);
            this.winner = this._teamB;
        }
        else {
            if (this._isKoGame) {
                let aPenGoals = 0;
                let bPenGoals = 0;
                for (let i = 0; i < 5; i++) {
                    const number = Math.floor(Math.random() * 100) + 1;
                    if (number <= this._teamA.level)
                        aPenGoals++;
                }
                for (let i = 0; i < 5; i++) {
                    const number = Math.floor(Math.random() * 100) + 1;
                    if (number <= this._teamB.level)
                        bPenGoals++;
                }
                while (aPenGoals === bPenGoals) {
                    if (Math.floor(Math.random() * 100) + 1 <= this._teamA.level)
                        aPenGoals++;
                    if (Math.floor(Math.random() * 100) + 1 <= this._teamB.level)
                        bPenGoals++;
                }
                console.log(`PK ${this._teamA.name} ${aPenGoals} x ${bPenGoals} ${this._teamB.name}`);
                this.winner = aPenGoals > bPenGoals ? this._teamA : this._teamB;
            }
            this._teamA.drawMomentum();
            this._teamB.drawMomentum();
        }
    }
}
const matchUpGroupStage = (group, teamA, teamB, round) => {
    console.log(`Rodada ${round}: Grupo ${group.name}
    Próxima partida:
    ${teamA.name} x ${teamB.name}`);
    readline.question('');
    const game = new Game(teamA, teamB, false);
    game.on();
    readline.question('');
    console.log(group.toString());
    readline.question('');
};
const firstRound = () => {
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[1], 1);
        matchUpGroupStage(groups[i], groups[i].teams[2], groups[i].teams[3], 1);
    }
    console.log('Fim primeira rodada');
    readline.question('');
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[2], 2);
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[3], 2);
    }
    console.log('Fim segunda rodada');
    readline.question('');
    for (let i = 0; i < 8; i++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[3], 3);
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[2], 3);
    }
    console.log('Fim fase de grupos');
    console.log('Oitavas de finais: ');
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
const knockoutLog = (teams, phase) => {
    console.log(phase);
    for (let i = 0; i < teams.length / 2; i++) {
        console.log(`${teams[i].name} x ${teams[i + 1].name}`);
    }
    console.log();
};
const matchUpKoStage = (teamA, teamB, round) => {
    console.log(`${round}
    Próxima partida:
    ${teamA.name} x ${teamB.name}`);
    readline.question('');
    const game = new Game(teamA, teamB, true);
    game.on();
    readline.question('');
    if (round !== 'FINAL')
        console.log(`${game.winner.name} CLASSIFICADO `);
    readline.question('');
    return game.winner;
};
const KOStage = () => {
    const roundOf16 = [];
    for (let i = 0; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i + 1].second, 'Oitavas de finais'));
    }
    for (let i = 1; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i - 1].second, 'Oitavas de finais'));
    }
    knockoutLog(roundOf16, 'QUARTAS DE FINAIS: ');
    const quarterfinals = [matchUpKoStage(roundOf16[0], roundOf16[1], 'Quartas de finais'), matchUpKoStage(roundOf16[2], roundOf16[3], 'Quartas de finais'),
        matchUpKoStage(roundOf16[4], roundOf16[5], 'Quartas de finais'), matchUpKoStage(roundOf16[6], roundOf16[7], 'Quartas de finais')];
    knockoutLog(quarterfinals, 'SEMIFINAIS');
    const semifinals = [matchUpKoStage(quarterfinals[0], quarterfinals[1], 'Semifinais'), matchUpKoStage(quarterfinals[2], quarterfinals[3], 'Semifinais')];
    knockoutLog(semifinals, 'FINAL');
    const final = matchUpKoStage(semifinals[0], semifinals[1], 'FINAL COPA DO MUNDO 2022');
    console.log(`${final.name} é o campeão do mundo 2022 !`);
};
firstRound();
KOStage();
