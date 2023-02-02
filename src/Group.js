"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return `GROUP ${this._name}:
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
exports.default = Group;
