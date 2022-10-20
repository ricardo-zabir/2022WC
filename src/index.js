"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = __importDefault(require("./Team"));
const TeamsNames_json_1 = __importDefault(require("./TeamsNames.json"));
const TeamsLevels_json_1 = __importDefault(require("./TeamsLevels.json"));
const Group_1 = __importDefault(require("./Group"));
const groupStageFuncs_1 = require("./utils/groupStageFuncs");
const knockoutFuncs_1 = require("./utils/knockoutFuncs");
const nationalTeams = [];
for (let i = 0; i < 32; i++) {
    nationalTeams.push(new Team_1.default(TeamsNames_json_1.default[i], TeamsLevels_json_1.default[i]));
}
const groups = [];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (let i = 0; i < 8; i++) {
    groups.push(new Group_1.default([nationalTeams[i * 4], nationalTeams[(i * 4) + 1], nationalTeams[(i * 4) + 2], nationalTeams[(i * 4) + 3]], letters[i]));
}
(0, groupStageFuncs_1.firstRound)(groups);
(0, knockoutFuncs_1.KOStage)(groups);
