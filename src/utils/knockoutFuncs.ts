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
    Próxima partida:
    ${teamA.name} x ${teamB.name}`);
    readline.question('');
    const game = new Game(teamA, teamB, true);
    game.on();
    readline.question('');
    if(round !== 'FINAL COPA DO MUNDO 2022') console.log(`${game.winner.name} CLASSIFICADO `);
    readline.question('');
    return game.winner;
}


export const KOStage = (groups: Group[]) => {
    const roundOf16: Team[] = [];
    for(let i = 0; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i + 1].second, 'Oitavas de finais'));
    }
    for(let i = 1; i < 8; i += 2) {
        roundOf16.push(matchUpKoStage(groups[i].first, groups[i - 1].second, 'Oitavas de finais'));
    }
    knockoutLog(roundOf16,'QUARTAS DE FINAIS: ')
    const quarterfinals: (Team)[] = [matchUpKoStage(roundOf16[0], roundOf16[1], 'Quartas de finais'), matchUpKoStage(roundOf16[2], roundOf16[3], 'Quartas de finais'),
    matchUpKoStage(roundOf16[4], roundOf16[5], 'Quartas de finais'), matchUpKoStage(roundOf16[6], roundOf16[7], 'Quartas de finais')];
    knockoutLog(quarterfinals, 'SEMIFINAIS')
    const semifinals: Team[] = [matchUpKoStage(quarterfinals[0], quarterfinals[1], 'Semifinais'), matchUpKoStage(quarterfinals[2], quarterfinals[3], 'Semifinais')]
    knockoutLog(semifinals, 'FINAL')
    const final: Team = matchUpKoStage(semifinals[0], semifinals[1], 'FINAL COPA DO MUNDO 2022');
    console.log(`${final.name} é o campeão do mundo 2022 !`)
}