"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Team;
