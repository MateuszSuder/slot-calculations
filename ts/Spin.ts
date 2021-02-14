import { chancesRanges, chances, LEVELS, SlotSymbol, slotSymbols, Winnings } from './index';

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

	drawSymbol(max: number) {
		const temp = Math.floor(Math.random() * max);
		for(const el of chancesRanges) {
			if(temp < el) {
				return slotSymbols[chancesRanges.indexOf(el)];
			}
		}
		throw new Error(`Couldn't draw any symbol`);
	}

	drawSymbols() {
		const countMax = () => {
			let counter = 0;
			chances.forEach(element => {
				counter += element;
			});
			return counter;
		};
		const max = countMax();
		for(let i = 0; i < LEVELS[this.stage].length; i++) {
			this.resultBoard[i]= [];
			for(let j = 0; j < LEVELS[this.stage][i]; j++) {
				this.resultBoard[i][j] = this.drawSymbol(max);
			}
		}
	}

	checkForWinnings(): Winnings { 
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

		this.resultBoard.forEach((reel, i) => {
			if(i === 0) {
				reel.forEach((symbol, j) => { 
					result.list[slotSymbols.indexOf(symbol)].position[i].push(j);
				});
			} else {
				reel.forEach((symbol, j) => {
					if(result.list[slotSymbols.indexOf(symbol)].position[i - 1] && result.list[slotSymbols.indexOf(symbol)].position[i - 1].length > 0) {
						if(!result.list[slotSymbols.indexOf(symbol)].position[i])
							result.list[slotSymbols.indexOf(symbol)].position.push([]);
						result.list[slotSymbols.indexOf(symbol)].position[i].push(j);
					}
					if(symbol.name === slotSymbols[slotSymbols.length - 1].name) {
						result.list.forEach((a, i) => {
							if(i == result.list.length - 1) return;
							if(a.position[i - 1] && a.position[i - 1].length > 0) {
								if(!a.position[i])
									a.position.push([]);
								a.position[i].push(j);
							}
						});
					}
				});
			}
		});
		this.resultBoard.forEach(el => {
			console.table(el);
		});
		result.list.forEach(element => {
			console.log(element.s);
			console.log(element.position);
		});
		return result;
	}
}