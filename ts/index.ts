/* eslint-disable no-unused-vars */
import { Spin } from './Spin';
import { Bonus } from './Bonus';

export type Payouts = {
	x1: number,
	x2: number,
	x3: number,
	x4: number,
	x5: number,
	x6: number
}

export type SlotSymbol = {
    name: string,
	payouts: Payouts,
	chances: number
}

export type Spins = {
	result: Spin[],
	bonus?: Bonus[]
}

export type Winnings = {
	s: Symbol,
	pat: number[][]
}

export const featuresArray = [ 'Additional reel',
	'8 Free Spins',
	'+ x3 Multiplier',
	'4 Free Spins',
	'+ x2 Multiplier',
	'Expand every normal wild by 1',
	'Transform Triangle Diamond into wild',
	'Transform Square Diamond into wild',
	'Transform Hexagonal Diamond into wild',
	'Transform Sapphire into wild',
	'Expand second reel',
	'Expand third reel',
	'Expand fourth reel',
	'2 Free spins',
	'1 Free spin',
	'+ 1x Multiplier' 
] as const;

export type Features = typeof featuresArray[number];	

export const FeaturesChances = [
	2, 4, 4, 9, 8.5, 7.5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10
] as const;

export const FeaturesRanges: number[] = [];

//Fill ranges
FeaturesChances.forEach((el, index) => {
	FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index-1] : 0);
});

export const names = [
	'diamond',
	'club', 
	'heart',
	'spade',
	'triangleD',
	'squareD',
	'hexagonalD',
	'sapphire',
	'wild'
] as const;

export const payouts: Payouts[] = [
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25},
	{x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25},
	{x1: 0, x2: 0, x3: 1, x4: 2, x5: 5, x6: 50},
	{x1: 0, x2: 0, x3: 2, x4: 4, x5: 10, x6: 100},
	{x1: 0, x2: 0, x3: 3, x4: 6, x5: 15, x6: 150},
	{x1: 0, x2: 0, x3: 5, x4: 15, x5: 30, x6: 500},
	{x1: 0, x2: 0, x3: 15, x4: 100, x5: 500, x6: 2500},
];

export const chances = [
	175, 175, 175, 175, 100, 75, 60, 35, 30
] as const;

export const chancesRanges: number[] = [];

// Fill ranges
chances.forEach((el, index) => {
	chancesRanges[index] = el + (index > 0 ? chancesRanges[index-1] : 0);
});

export const slotSymbols: SlotSymbol[] = [
	{name: names[0], payouts: payouts[0], chances: chances[0]} as const,
	{name: names[1], payouts: payouts[1], chances: chances[1]} as const,
	{name: names[2], payouts: payouts[2], chances: chances[2]} as const,
	{name: names[3], payouts: payouts[3], chances: chances[3]} as const,
	{name: names[4], payouts: payouts[4], chances: chances[4]} as const,
	{name: names[5], payouts: payouts[5], chances: chances[5]} as const,
	{name: names[6], payouts: payouts[6], chances: chances[6]} as const,
	{name: names[7], payouts: payouts[7], chances: chances[7]} as const,
	{name: names[8], payouts: payouts[8], chances: chances[8]} as const,
];

export const LEVELS = [
	[ 1, 3, 1 ],
	[ 3, 3, 3 ],
	[ 1, 3, 5, 3, 1 ],
	[ 3, 3, 5, 3, 3 ],
	[ 3, 5, 5, 5, 3 ],
	[ 5, 5, 5, 5, 5 ]
] as const;

function calculate(bet: number) {
	const stage = 1;
	const s = new Spin(bet, stage);
	return s;
}

document.body.innerHTML = JSON.stringify(calculate(5));