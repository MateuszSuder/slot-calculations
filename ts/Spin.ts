console.log('%cSpin.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px');
import { chancesRanges, chances, LEVELS, SlotSymbol, slotSymbols, Winnings, Payout } from './index';
/* eslint-disable no-unused-vars */
export class Spin {
	bet: number = 0;
	resultBoard: SlotSymbol[][]= []; // Result stored in two dimensional array [reel][row]
	stage: number; // Which stage is spin in (Check LEVELS) - 0-5
	winning: Winnings = { list: [] }; // Winnings

	constructor(bet: number, stage: number) {
		this.bet = bet;
		this.stage = stage;

		this.drawSymbols();
	}

	private drawSymbol(max: number) {
		const n = Math.floor(Math.random() * max); // Assign random number in range
		for(const el of chancesRanges) { // Find symbol
			if(n < el) {
				return slotSymbols[chancesRanges.indexOf(el)];
			}
		}
		throw new Error(`Couldn't draw any symbol`);
	}

	private drawSymbols() {
		const countMax = () => {
			let counter = 0;
			chances.forEach(element => {
				counter += element;
			});
			return counter;
		}; // Function for calculating max boundry
		const max = countMax(); // Assign max boundry
		for(let i = 0; i < LEVELS[this.stage].length; i++) { // Length of array - number of reels
			this.resultBoard[i] = []; // Initalize board
			for(let j = 0; j < LEVELS[this.stage][i]; j++) { // Draw symbol for each field
				this.resultBoard[i][j] = this.drawSymbol(max);
			}
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

		this.resultBoard.forEach((reel, i) => { // Start checking every reel
			if(i === 0) { // If its first reel
				reel.forEach((symbol, j) => { // Just push those to our result
					if(symbol.name !== slotSymbols[slotSymbols.length - 1].name) {
						result.list[slotSymbols.indexOf(symbol)].position[i].push(j);
					} else {
						result.list.forEach(el => {
							el.position[i].push(j);
						});
					}
					
				});
			} else { // Otherwise...
				reel.forEach((symbol, j) => { // Iterate every symbol
					if(result.list[slotSymbols.indexOf(symbol)].position[i - 1] && result.list[slotSymbols.indexOf(symbol)].position[i - 1].length > 0) { // If theres symbol on reel before
						if(result.list[slotSymbols.indexOf(symbol)].position[i] === undefined) // In not initalized
							result.list[slotSymbols.indexOf(symbol)].position.push([]);
						result.list[slotSymbols.indexOf(symbol)].position[i].push(j); // Push Y-cord of symbol
					}
					if(symbol.name === slotSymbols[slotSymbols.length - 1].name) { // If its wild
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

		this.resultBoard.forEach(el => {
			console.table(el);
		});

		result.win = 0;

		result.list.forEach(el => { // Count single wins
			const res: Payout = 'x' + el.position.length as Payout; // How many times appeard transformed to index
			el.win = (el.s.payouts[res] * this.bet); // Win for one combination
			
			el.position.forEach(p => { // Count for every combination
				if(el.win !== undefined) { // Make sure its not undefined
					el.win *= p.length; // Multiply by times appeard
				}
			});
			if(result.win !== undefined)
				result.win += el.win;
		});
		this.winning = result;
		console.log(result);
		return result;
	}
}
