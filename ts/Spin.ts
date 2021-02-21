console.log('%cSpin.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px');
import { _chancesRanges, _chances, LEVELS, SlotSymbol, slotSymbols, Winnings, Payout, bonusExtend } from './index';
/* eslint-disable no-unused-vars */
export class Spin {
	_bet: number = 0;
	resultBoard: SlotSymbol[][]= []; // Result stored in two dimensional array [reel][row]
	stage?: number; // Which stage is spin in (Check LEVELS) - 0-5
	_bonus?: bonusExtend
	resultExtended?: SlotSymbol[][];
	winning: Winnings = { list: [] }; // Winnings

	constructor(bet: number, rest: {stage?: number, bonus?: bonusExtend}) {
		this._bet = bet;
		if(!(rest.stage !== undefined || rest.bonus))
			throw new Error(`Spin component didn't received neither stage nor bonus options :( ${rest}`);
		if(rest.stage !== undefined)
			this.stage = rest.stage;
		if(rest.bonus !== undefined)
			this._bonus = rest.bonus;

		this.drawSymbols();
	}

	private drawSymbol(max: number) {
		const n = Math.floor(Math.random() * max); // Assign random number in range
		for(const el of _chancesRanges) { // Find symbol
			if(n < el) {
				if(this._bonus !== undefined) {
					return this._bonus.SYMBOLS[_chancesRanges.indexOf(el)];
				}
				return slotSymbols[_chancesRanges.indexOf(el)];
			}
		}
		throw new Error(`Couldn't draw any symbol`);
	}

	private drawSymbols() {
		const countMax = () => {
			let counter = 0;
			_chances.forEach(element => {
				counter += element;
			});
			return counter;
		}; // Function for calculating max boundry
		const max = countMax(); // Assign max boundry
		for(let i = 0; i < (this.stage !== undefined ? LEVELS[this.stage].length : this._bonus !== undefined ? this._bonus.LEVEL.length : 0); i++) { // Length of array - number of reels
			this.resultBoard[i] = []; // Initalize board
			for(let j = 0; j < (this.stage !== undefined ? LEVELS[this.stage][i] : this._bonus !== undefined ? this._bonus.LEVEL[i] : 0); j++) { // Draw symbol for each field
				this.resultBoard[i][j] = this.drawSymbol(max);
			}
		}

		if(this._bonus?.EXPAND === true) {
			this.resultExtended = JSON.parse(JSON.stringify(this.resultBoard));
			this.resultBoard.forEach((a, i) => {
				a.forEach((b, j) => {
					if(b.index === 8) {
						if(j === 0) {
							if(this.resultExtended![i][1].index !== 8) {
								this.resultExtended![i][1] = b;
							}
						} else if(j === a.length - 1) {
							if(this.resultExtended![i][a.length - 2].index !== 8) {
								this.resultExtended![i][a.length - 2] = b;
							}
						} else {
							const whereToExpand = (Math.round(Math.random()) === 0) ? -1 : 1;
							if(this.resultExtended![i][j + whereToExpand].index !== 8) {
								this.resultExtended![i][j + whereToExpand] = b;
							} else {
								this.resultExtended![i][j - whereToExpand] = b;
							}
						}
					}
				});
			});
		}
	}

	public checkForWinnings(): Winnings { 
		const result: Winnings = {
			list: []
		};
		// Initalize result :)
		slotSymbols.forEach(s => {
			result.list.push({
				s: s,
				position: [ [] ]
			});
		});
		(this._bonus !== undefined && this._bonus.EXPAND === true && this.resultExtended ? this.resultExtended : this.resultBoard).forEach((reel, i) => { // Start checking every reel
			if(i === 0) { // If its first reel
				reel.forEach((symbol, j) => { // Just push those to our result
					if(symbol.index !== 8) {
						result.list[symbol.index].position[i].push(j);
					} else {
						result.list.forEach(el => {
							el.position[i].push(j);
						});
					}
				});
			} else { // Otherwise...
				reel.forEach((symbol, j) => { // Iterate every symbol
					if(result.list[symbol.index].position[i - 1] && result.list[symbol.index].position[i - 1].length > 0) { // If theres symbol on reel before
						if(result.list[symbol.index].position[i] === undefined) // In not initalized
							result.list[symbol.index].position.push([]);
						result.list[symbol.index].position[i].push(j); // Push Y-cord of symbol
					}
					if(symbol.index === 8) { // If its wild
						result.list.forEach((a, k) => { // We need to add to every symbol win
							if(k === result.list.length - 1) return; // If last, break

							if(a.position[i - 1] && a.position[i - 1].length > 0) { // If theres symbol before that connects
								if(a.position[i] === undefined) {// If not initalized
									a.position.push([]); // Initalize
								}
								a.position[i].push(j); // Push Y cord
							}
						});
					}
				});
			}
		});

		result.list = result.list.filter(el => el.position.length >= 3); // Filter not needed results

		result.win = 0;

		result.list.forEach(el => { // Count single wins
			const res: Payout = 'x' + el.position.length as Payout; // How many times appeard transformed to index
			el.win = (el.s._payouts[res] * this._bet); // Win for one combination
			
			el.position.forEach(p => { // Count for every combination
				if(el.win !== undefined) { // Make sure its not undefined
					el.win *= p.length; // Multiply by times appeard
				}
			});
			if(this._bonus && this._bonus.MULTI) {
				el.win *= this._bonus.MULTI;
			}
			if(result.win !== undefined)
				result.win += el.win;
		});
		this.winning = result;
		return result;
	}
}