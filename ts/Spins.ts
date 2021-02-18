console.log('%cSpins.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px;');
import { Bonus } from './Bonus';
import { Bet, bets, LEVELS } from './index';
import { Spin } from './Spin';

export class Spins {
    currentLevel = 0;
    totalWin = 0;

    bonus?: Bonus;
    
    spins: Spin[] = [];
    bet: Bet = 0;

    constructor(bet: Bet) {
        if(bets.indexOf(bet) === -1) {
            throw Error(`I don't think ${bet} is correct bet`);
        } else {
            this.bet = bet;
        }

        try {
            this.spins = this.getSpins();
        } catch (e) {
            console.log(`Didn't quite work :( Couldn't get spins. `, e);
            throw new Error(e);
        }
        
    }
    
    private getSpins() {
        const spins: Spin[] = [];
        for(let i = 0; i < LEVELS.length; i++) {
            this.currentLevel = i;
            const spin = new Spin(this.bet, {stage: i});
            spins.push(spin);

            if(spin.checkForWinnings().win === 0) {
                return spins;
            }

            if(i === LEVELS.length - 1) {
				for(let j = 0; j < 3; j++) {
					const spin = new Spin(this.bet, {stage: i});
					spins.push(spin);	
					if(spin.checkForWinnings().win === 0) {
						return spins;
					}
				}
				this.bonus = new Bonus(this.bet);
            }
        }
        return spins;
    }
    
}