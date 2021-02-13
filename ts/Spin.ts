import { chancesRanges, LEVELS, SlotSymbol, slotSymbols, Winnings } from './index';

/* eslint-disable no-unused-vars */
export class Spin {
	bet: number = 0;
	resultBoard: SlotSymbol[][]= [];
	stage: number;

	constructor(bet: number, stage: number) {
		this.bet = bet;
		this.stage = stage;

		this.drawSymbols();

		this.checkForWinnings();
	}

	drawSymbol() {
		const temp = Math.floor(Math.random() * 1000);
		for(const el of chancesRanges) {
			if(temp < el) {
				return slotSymbols[chancesRanges.indexOf(el)];
			}
		}
		throw new Error(`Couldn't draw any symbol`);
	}

	drawSymbols() {
		for(let i = 0; i < LEVELS[this.stage].length; i++) {
			this.resultBoard[i]= [];
			for(let j = 0; j < LEVELS[this.stage][i]; j++) {
				this.resultBoard[i][j] = this.drawSymbol();
			}
		}
	}

	checkForWinnings(): Winnings { 
		const result: Winnings[] = [];
		const allPossibilites: SlotSymbol[][] = [];
		this.resultBoard.forEach((a, index) => {
			if(index === 0) { // For first reel
				a.forEach(b => {
					allPossibilites.push([ b ]);
				});
			} else {
				if(allPossibilites.length === 0) { 
					return '';
				}
				const max = allPossibilites.length;
				a.forEach(b => {
					for(let i = 0; i < max; i++) {
						allPossibilites.push([ ...allPossibilites[i], b ]);
					}
				});
				allPossibilites.splice(0, max);
			}
		});
		console.log(allPossibilites);

		return { win: 0, list: [] };
	}
}