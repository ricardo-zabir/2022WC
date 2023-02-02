import Group from "../Group";
import Team from "../Team";
import * as readline from 'readline-sync'
import Game from "../Game";

const matchUpGroupStage = (group: Group, teamA: Team, teamB: Team, round: number) => {
    console.log(`Round ${round}: Group ${group.name}
    Next match:
    ${teamA.name} x ${teamB.name}`);
    readline.question('Press enter to continue');
    console.clear()
    const game = new Game(teamA, teamB, false);
    game.on();
    readline.question('Press enter to continue');
    console.clear()
    console.log(group.toString());
    readline.question('Press enter to continue');
    console.clear()
}

export const firstRound = (groups: Group[]) => {
    for(let i = 0; i < 8; i ++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[1], 1)
        matchUpGroupStage(groups[i], groups[i].teams[2], groups[i].teams[3], 1)
    }
    console.log('End of first round');
    readline.question('Press enter to continue');
    console.clear()
    for(let i = 0; i < 8; i ++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[2], 2)
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[3], 2)
    }
    console.log('End of second round');
    readline.question('Press enter to continue');
    console.clear()
    for(let i = 0; i < 8; i ++) {
        matchUpGroupStage(groups[i], groups[i].teams[0], groups[i].teams[3], 3)
        matchUpGroupStage(groups[i], groups[i].teams[1], groups[i].teams[2], 3)
    }
    console.log('End of group stage');
    console.log('Round of 16: ');
    console.log(`
    ${groups[0].first.name} x ${groups[1].second.name}
    ${groups[2].first.name} x ${groups[3].second.name}
    ${groups[4].first.name} x ${groups[5].second.name}
    ${groups[6].first.name} x ${groups[7].second.name}
    ${groups[1].first.name} x ${groups[0].second.name}
    ${groups[3].first.name} x ${groups[2].second.name}
    ${groups[5].first.name} x ${groups[4].second.name}
    ${groups[7].first.name} x ${groups[6].second.name}
    `)
}

