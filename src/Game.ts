import Team from "./Team";

export default class Game {
    public winner: Team;
    constructor(private _teamA: Team, private _teamB: Team, private _isKoGame: boolean) {
        this.winner = this._teamA
    }
    on() {
        let teamAGoals:number = 0;
        let teamBGoals:number = 0;
        const aGoalInt = Math.round((this._teamA.level / 90) * 100)
        const bGoalInt = Math.round((this._teamB.level / 90) * 100)
        for(let i = 0; i < 90; i ++) {
            const num = Math.floor(Math.random() * 10000) + 1;
            if(num <= aGoalInt * 3) teamAGoals ++
        }
        for(let i = 0; i < 90; i ++) {
            const num = Math.floor(Math.random() * 10000) + 1;
            if(num <= bGoalInt * 3) teamBGoals ++
        }
        console.log(`${this._teamA.name} ${teamAGoals} x ${teamBGoals} ${this._teamB.name}`);
        this.aftermath(teamAGoals, teamBGoals);
    }
    aftermath(aGoals: number, bGoals: number){
        if(aGoals > bGoals) {
            this._teamA.winMomentum(aGoals, bGoals);
            this._teamB.loseMomentum(bGoals, aGoals);
            this.winner = this._teamA
        }
        else if(bGoals > aGoals) {
            this._teamB.winMomentum(bGoals, aGoals);
            this._teamA.loseMomentum(aGoals, bGoals);
            this.winner = this._teamB
        }
        else {
            if(this._isKoGame) {
                let aPenGoals = 0;
                let bPenGoals = 0;
                for(let i = 0; i < 5; i ++) {
                    const number = Math.floor(Math.random() * 100) + 1;
                    if(number <= this._teamA.level) aPenGoals ++
                }
                for(let i = 0; i < 5; i ++) {
                    const number = Math.floor(Math.random() * 100) + 1;
                    if(number <= this._teamB.level) bPenGoals ++
                }
                while(aPenGoals === bPenGoals) {
                    if(Math.floor(Math.random() * 100) + 1 <= this._teamA.level) aPenGoals ++
                    if(Math.floor(Math.random() * 100) + 1 <= this._teamB.level) bPenGoals ++
                }
                console.log(`PK ${this._teamA.name} ${aPenGoals} x ${bPenGoals} ${this._teamB.name}`);
                this.winner = aPenGoals > bPenGoals ? this._teamA : this._teamB
            }
            this._teamA.drawMomentum();
            this._teamB.drawMomentum();
        }
    }
}
