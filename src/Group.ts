import Team from "./Team";

export default class Group {
    private _teams: [Team, Team, Team, Team];
    private _sortedTeams: [Team, Team, Team, Team];
    private _name: string;
    constructor(teams: [Team, Team, Team, Team], name: string) {
        this._teams = teams;
        this._sortedTeams = [...teams];
        this._name = name;
    }
    public get teams() : [Team, Team, Team, Team] {
        return this._teams
    }
    public get name() : string {
        return this._name
    }
    public get first() : Team {
        return this._sortedTeams[0]
    }
    public get second() : Team {
        return this._sortedTeams[1]
    }
    
    
    toString() {
        this.groupStanding()
        return `GRUPO ${this._name}:
        1- ${this._sortedTeams[0].name} ${this._sortedTeams[0].points} GD: ${this._sortedTeams[0].gd}
        2- ${this._sortedTeams[1].name} ${this._sortedTeams[1].points} GD: ${this._sortedTeams[1].gd}
        ---------------------------------------------------------------------------
        3- ${this._sortedTeams[2].name} ${this._sortedTeams[2].points} GD: ${this._sortedTeams[2].gd}
        4- ${this._sortedTeams[3].name} ${this._sortedTeams[3].points} GD: ${this._sortedTeams[3].gd}`
    }
    private groupStanding() {
        this._sortedTeams.sort((teamA, teamB) => {
            if(teamB.points > teamA.points || (teamB.points === teamA.points && teamB.gd > teamA.gd)) {
                return 1
            }
            if(teamA.points > teamB.points || (teamA.points === teamB.points && teamA.gd > teamB.gd)) {
                return - 1
            }
            return 0
        });
    }
}