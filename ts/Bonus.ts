/* eslint-disable no-unused-vars */

import { bonusExtend, Features, featuresArray, FeaturesChances, FeaturesRanges, LEVELS, slotSymbols, specialSymbols } from './index';
import { Spin } from './Spin';

export class Bonus {
	spins: Spin[] = [];
	features: [Features, Features, Features];
	bet: number;
	multiplier = 1 as bonusExtend['MULTI'];
	freeSpins = 5;
	slotSymbols = JSON.parse(JSON.stringify(slotSymbols));
	LEVEL = JSON.parse(JSON.stringify(LEVELS[LEVELS.length - 1]));
	expandWilds = false;

	constructor(bet: number) {
		this.bet = bet;

		this.features = this.getFeatures();
		this.handleFeatures();

		for(let i = 0; i < this.freeSpins; i++) {
			new Spin(this.bet, {
				bonus: {
					LEVEL: this.LEVEL as bonusExtend['LEVEL'],
					SYMBOLS: slotSymbols,
					MULTI: this.multiplier,
					EXPAND: this.expandWilds
				}
			});
		}
	}

    private getFeature(f: Features[], c: number[]): Features {
		const n = Math.floor(Math.random() * c[c.length - 1]);
		for(const el of c) {
			if(n < el) {
				const res = f[c.indexOf(el)];
				f.splice(c.indexOf(el), 1);
				c.splice(c.indexOf(el), 1);
				return res;
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

		const featuresCopy = {a: JSON.parse(JSON.stringify(featuresArray)), b: JSON.parse(JSON.stringify(FeaturesRanges))};
		return [ this.getFeature(featuresCopy.a, featuresCopy.b), this.getFeature(featuresCopy.a, featuresCopy.b), this.getFeature(featuresCopy.a, featuresCopy.b) ];
    }

	private handleFeatures() {
		this.features.forEach(feature => {
			switch (featuresArray.indexOf(feature)) {
				case 0:
					this.LEVEL.push(1);
					break;
				case 1:
					this.expandWilds = true;
					break;
				case 2:
					this.slotSymbols[4] = specialSymbols[0];
					break;
				case 3:
					this.slotSymbols[5] = specialSymbols[1];
					break;
				case 4:
					this.slotSymbols[6] = specialSymbols[2];
					break;
				case 5:
					this.slotSymbols[7] = specialSymbols[3];
					break;
				case 6:
					this.LEVEL[1] += 1;
					break;
				case 7:
					this.LEVEL[2] += 1;
					break;
				case 8:
					this.LEVEL[3] += 1;
					break;
				case 9:
					this.freeSpins += 8;
					break;
				case 10:
					this.freeSpins += 4;
					break;
				case 11:
					this.freeSpins += 2;
					break;
				case 12:
					this.freeSpins += 1;
					break;
				case 13:
					this.multiplier += 3;
					break;
				case 14:
					this.multiplier += 2;
					break;
				case 15:
					this.multiplier += 1;
					break;
				default: 
					throw new Error(`Wrong feature input! \n feature returned ${feature}`);
			}
		});
	}
}