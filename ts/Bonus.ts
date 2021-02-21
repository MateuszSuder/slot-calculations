console.log('%cBonus.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px;');
/* eslint-disable no-unused-vars */
import { bonusExtend, Features, featuresArray, FeaturesChances, FeaturesRanges, LEVELS, slotSymbols, specialSymbols } from './index';
import { Spin } from './Spin';

export class Bonus {
	spins: Spin[] = [];
	features: [Features, Features, Features];
	_bet: number;
	_multiplier = 1 as bonusExtend['MULTI'];
	_freeSpins = 5;
	_slotSymbols = JSON.parse(JSON.stringify(slotSymbols));
	_LEVEL = JSON.parse(JSON.stringify(LEVELS[LEVELS.length - 1]));
	_expandWilds = false;
	win = 0;

	constructor(_bet: number) {
		this._bet = _bet;

		this.features = this.getFeatures();
		this.handleFeatures();

		for(let i = 0; i < this._freeSpins; i++) {
			const spin = (new Spin(this._bet, {
				bonus: {
					LEVEL: this._LEVEL as bonusExtend['LEVEL'],
					SYMBOLS: this._slotSymbols,
					MULTI: this._multiplier,
					EXPAND: this._expandWilds
				}
			}));
			spin.checkForWinnings();
			if(spin.winning.win)
				this.win += spin.winning.win;
			this.spins.push(spin);
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
					this._LEVEL.push(1);
					break;
				case 1:
					this._expandWilds = true;
					break;
				case 2:
					this._slotSymbols[4] = specialSymbols[0];
					break;
				case 3:
					this._slotSymbols[5] = specialSymbols[1];
					break;
				case 4:
					this._slotSymbols[6] = specialSymbols[2];
					break;
				case 5:
					this._slotSymbols[7] = specialSymbols[3];
					break;
				case 6:
					this._LEVEL[1] += 1;
					break;
				case 7:
					this._LEVEL[2] += 1;
					break;
				case 8:
					this._LEVEL[3] += 1;
					break;
				case 9:
					this._freeSpins += 8;
					break;
				case 10:
					this._freeSpins += 4;
					break;
				case 11:
					this._freeSpins += 2;
					break;
				case 12:
					this._freeSpins += 1;
					break;
				case 13:
					this._multiplier += 3;
					break;
				case 14:
					this._multiplier += 2;
					break;
				case 15:
					this._multiplier += 1;
					break;
				default: 
					throw new Error(`Wrong feature input! \n feature returned ${feature}`);
			}
		});
	}
}