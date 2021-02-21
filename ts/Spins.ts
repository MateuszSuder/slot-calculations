console.log('%cSpins.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px;');
import { Bonus } from './Bonus';
import { Bet, bets, LEVELS } from './index';
import { Spin } from './Spin';

export class Spins {
    totalWin = 0;

    bonus?: Bonus;
    
    spins: Spin[] = [];
    _bet: Bet = 0;

    constructor(_bet: Bet) {
        if(bets.indexOf(_bet) === -1) {
            throw Error(`I don't think ${_bet} is correct _bet`);
        } else {
            this._bet = _bet;
        }

        try {
            this.spins = this.getSpins();
        } catch (e) {
            console.log(`Didn't quite work :( Couldn't get spins. `, e);
            throw new Error(e);
        }
        
        this.calculateTotalWin();
    }
    
    private getSpins() {
        const spins: Spin[] = [];
        for(let i = 0; i < LEVELS.length; i++) {
            const spin = new Spin(this._bet, {stage: i});
            spins.push(spin);

            if(spin.checkForWinnings().win === 0) {
                return spins;
            }

            if(i === LEVELS.length - 1) {
				for(let j = 0; j < 3; j++) {
					const spin = new Spin(this._bet, {stage: i});
					spins.push(spin);	
					if(spin.checkForWinnings().win === 0) {
						return spins;
					}
				}
				this.bonus = new Bonus(this._bet);
            }
        }
        return spins;
    }

    private calculateTotalWin() {
        this.spins.forEach(el => {
            if(el.winning.win)
                this.totalWin += el.winning.win;
        });
        if(this.bonus)
            this.totalWin += this.bonus.win;
    }
}