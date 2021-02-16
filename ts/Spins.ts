import { Bonus } from './Bonus';
import { Bet, bets, Features, featuresArray, FeaturesChances, FeaturesRanges, LEVELS } from './index';
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

        this.spins = this.getSpins();
    }

    private getFeature(max: number): Features {
        const n = Math.floor(Math.random() * max); // Assign random number in range
		for(const el of FeaturesRanges) { // Find symbol
			if(n < el) {
				return featuresArray[FeaturesRanges.indexOf(el)];
			}
		}
		throw new Error(`Couldn't draw any feature`);
    }

    private getFeatures(): [Features, Features, Features] {
        const countMax = () => {
			let counter = 0;
			FeaturesChances.forEach(element => {
				counter += element;
			});
			return counter;
		}; // Function for calculating max boundry
		const max = countMax(); // Assign max boundry

		return [ this.getFeature(max), this.getFeature(max), this.getFeature(max) ];
    }
    
    private getSpins() {
        const spins: Spin[] = [];
        for(let i = 0; i < LEVELS.length; i++) {
            this.currentLevel = i;
            const spin = new Spin(this.bet, i);
            spins.push(spin);

            if(spin.checkForWinnings().win === 0) {
                return spins;
            }

            if(i === LEVELS.length - 1) {
				for(let j = 0; j < 3; j++) {
					const spin = new Spin(this.bet, i);
					spins.push(spin);
					if(spin.checkForWinnings().win === 0) {
						return spins;
					}
				}
                const features = this.getFeatures();
				this.bonus = new Bonus(this.bet, features);
            }
        }
        return spins;
    }
    
}