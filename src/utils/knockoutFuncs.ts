import Team from "../Team"
import * as readline from 'readline-sync'
import Group from "../Group"
import Game from "../Game"

const knockoutLog = (teams: Team[], phase: string) => {
    console.log(phase)
    for(let i = 0; i < teams.length; i += 2) {
        console.log(`${teams[i].name} x ${teams[i + 1].name}`)
    }
    console.log()
}

const matchUpKoStage = (teamA: Team, teamB: Team, round: string) => {
    console.log(`${round}
    Next match:
    ${teamA.name} x ${teamB.name}`);
    readline.question('Press enter to continue');
    console.clear()
    const game = new Game(teamA, teamB, true);
    game.on();
    readline.question('Press enter to continue');
    console.clear()
    if(round !== '2022 WORLD CUP FINAL') console.log(`${game.winner.name} remains alive `);
    readline.question('Press enter to continue');
    console.clear()
    return game.winner;
}


export const KOStage = (groups: Group[]) => {
    const roundOf16: Team[] = [];
    for(let i = 0; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i + 1].second, 'Round of 16'));
    }
    for(let i = 1; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i - 1].second, 'Round of 16'));
    }
    knockoutLog(roundOf16,'Quarterfinals: ')
    const quarterfinals: (Team)[] = [matchUpKoStage(roundOf16[0], roundOf16[1], 'Quarterfinals'), matchUpKoStage(roundOf16[2], roundOf16[3], 'Quarterfinals'),
    matchUpKoStage(roundOf16[4], roundOf16[5], 'Quarterfinals'), matchUpKoStage(roundOf16[6], roundOf16[7], 'Quarterfinals')];
    knockoutLog(quarterfinals, 'Semifinals: ')
    const semifinals: Team[] = [matchUpKoStage(quarterfinals[0], quarterfinals[1], 'Semifinals'), matchUpKoStage(quarterfinals[2], quarterfinals[3], 'Semifinals')]
    knockoutLog(semifinals, 'FINAL: ')
    const final: Team = matchUpKoStage(semifinals[0], semifinals[1], '2022 WORLD CUP FINAL');
    console.log(`${final.name} are 2022 world champions !`)
}