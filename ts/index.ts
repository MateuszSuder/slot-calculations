/* eslint-disable no-unused-vars */
console.log('%cIndex.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px;');
import { Bonus } from './Bonus';
import { Spins } from './Spins';

export type Payouts = {
	x1: number,
	x2: number,
	x3: number,
	x4: number,
	x5: number,
	x6: number
}

export type Payout = keyof Payouts;

export type SlotSymbol = {
    name: Names,
	_payouts: Payouts,
	_chances: Chances,
	tag: Tags,
	index: number
}

// type pos = {
// 	x: number,
// 	y: number
// }

export type Win = {
	s: SlotSymbol,
	position: number[][], // x - index, y - number
	win?: number
}

export type Winnings = {
	win?: number
	list: Win[]
}

export const featuresArray = [ 'Additional reel', // 1 position is already too much, let's stick with that
	'Expand every normal wild by 1',
	'Transform Triangle Diamond into wild',
	'Transform Square Diamond into wild',
	'Transform Hexagonal Diamond into wild',
	'Transform Sapphire into wild',
	'Expand second reel',
	'Expand third reel',
	'Expand fourth reel',
	'8 Free Spins',
	'4 Free Spins',
	'2 Free spins',
	'1 Free spin',
	'+ x3 Multiplier',
	'+ x2 Multiplier',
	'+ x1 Multiplier' 
] as const;

export type Features = typeof featuresArray[number];	

export const FeaturesChances = [
	2, 2, 5, 5, 5, 5, 5, 6, 8, 5, 10, 20, 30, 5, 20, 30
] as const;

export const FeaturesRanges: number[] = [];

//Fill ranges
FeaturesChances.forEach((el, index) => {
	FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index - 1] : 0);
});

export const tags = [
	'low1',
	'low2',
	'low3',
	'low4',
	'high1',
	'high2',
	'high3',
	'high4',
	'wild0',
	'wild1',
	'wild2',
	'wild3',
	'wild4'
];

export type Tags = typeof tags[number];

export const names = [
	'Diamond',
	'Club', 
	'Heart',
	'Spade',
	'Tri-Diamond',
	'Squared Diamond',
	'Hex-Diamond',
	'Sapphire',
	'Wild',
	'Tri-Diamond(Wild)',
	'Squared Diamond(Wild)',
	'Hex-Diamond(Wild)',
	'Sapphire(Wild)'
] as const;

export type Names = typeof names[number];

export const bets = [
	0.1, 0.2, 0.5, 1, 1.5, 2, 2.5, 3, 5, 10, 20, 30, 40, 50, 100
];

export type Bet = typeof bets[number];

export const _payouts: Payouts[] = [
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3},
	{x1: 0, x2: 0, x3: 1, x4: 2, x5: 3.5, x6: 6},
	{x1: 0, x2: 0, x3: 2, x4: 3, x5: 6, x6: 7},
	{x1: 0, x2: 0, x3: 3, x4: 4, x5: 6.5, x6: 8},
	{x1: 0, x2: 0, x3: 3.5, x4: 5, x5: 7.5, x6: 9},
	{x1: 0, x2: 0, x3: 7.5, x4: 8, x5: 8.5, x6: 10},
];

export const _chances = [
	200, 200, 125, 125, 100, 75, 60, 35, 25
] as const;

export type Chances = typeof _chances[number];

export const _chancesRanges: number[] = [];

// Fill ranges
_chances.forEach((el, index) => {
	_chancesRanges[index] = el + (index > 0 ? _chancesRanges[index - 1] : 0);
});


export const slotSymbols: SlotSymbol[] = [
	{name: names[0], _payouts: _payouts[0], _chances: _chances[0], tag: tags[0], index: 0} as const,
	{name: names[1], _payouts: _payouts[1], _chances: _chances[1], tag: tags[1], index: 1} as const,
	{name: names[2], _payouts: _payouts[2], _chances: _chances[2], tag: tags[2], index: 2} as const,
	{name: names[3], _payouts: _payouts[3], _chances: _chances[3], tag: tags[3], index: 3} as const,
	{name: names[4], _payouts: _payouts[4], _chances: _chances[4], tag: tags[4], index: 4} as const,
	{name: names[5], _payouts: _payouts[5], _chances: _chances[5], tag: tags[5], index: 5} as const,
	{name: names[6], _payouts: _payouts[6], _chances: _chances[6], tag: tags[6], index: 6} as const,
	{name: names[7], _payouts: _payouts[7], _chances: _chances[7], tag: tags[7], index: 7} as const,
	{name: names[8], _payouts: _payouts[8], _chances: _chances[8], tag: tags[8], index: 8} as const
];

export const specialSymbols: SlotSymbol[] = [
	{name: names[9], _payouts: _payouts[8], _chances: _chances[4], tag: tags[9], index: 8} as const,
	{name: names[10], _payouts: _payouts[8], _chances: _chances[5], tag: tags[10], index: 8} as const,
	{name: names[11], _payouts: _payouts[8], _chances: _chances[6], tag: tags[11], index: 8} as const,
	{name: names[12], _payouts: _payouts[8], _chances: _chances[7], tag: tags[12], index: 8} as const,
];

export const LEVELS = [
	[ 1, 3, 1 ],
	[ 3, 3, 3 ],
	[ 1, 3, 5, 3, 1 ],
	[ 3, 3, 5, 3, 3 ],
	[ 3, 5, 5, 5, 3 ],
	[ 5, 5, 5, 5, 5 ]
] as const;

export type bonusExtend = {
	LEVEL: [[number, number, number, number, number, number] | [number, number, number, number, number]],
	SYMBOLS: typeof slotSymbols[number][] | typeof specialSymbols[number][],
	MULTI: 1 | 2 | 3 | 4 | 5 | 6,
	EXPAND: boolean
}