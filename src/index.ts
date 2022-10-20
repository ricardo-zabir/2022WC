import Team from './Team';
import teams from './TeamsNames.json';
import levels from './TeamsLevels.json';
import Group from './Group';
import { firstRound } from './utils/groupStageFuncs'
import {  KOStage } from './utils/knockoutFuncs'

const nationalTeams: Team[] = []

for(let i = 0; i < 32; i++) {
    nationalTeams.push(new Team(teams[i], levels[i]))
}

const groups: Group[] = [];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
for(let i = 0; i < 8; i++) {
    groups.push(new Group([nationalTeams[i * 4], nationalTeams[(i * 4) + 1], nationalTeams[(i * 4) + 2], nationalTeams[(i * 4) + 3]], letters[i]))
}



firstRound(groups);
KOStage(groups);