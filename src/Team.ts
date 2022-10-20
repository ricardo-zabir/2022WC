export default class Team {
    constructor(private _name: string, private _level: number, private _points: number = 0, private _gd: number = 0) { }
    winMomentum(myG: number, othG: number) {
        this._gd += (myG - othG)
        this._points += 3
        this._level += 1
    }
    drawMomentum() {
        this._points += 1
    }
    loseMomentum(myG: number, othG: number) {
        this._gd -= (othG - myG)
    }
    public get name() : string {
        return this._name
    }
    public get points():number {
        return this._points
    }
    public get level() : number {
        return this._level
    }
    public get gd() : number {
        return this._gd
    }
    
    }
