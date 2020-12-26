"use strict";
const featuresArray = ['Additional reel',
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
];
const FeaturesChances = [
    2, 4, 4, 9, 8.5, 7.5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10
];
const FeaturesRanges = [];
//Fill ranges
FeaturesChances.forEach((el, index) => {
    FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index - 1] : 0);
});
const names = [
    'diamond',
    'club',
    'heart',
    'spade',
    'triangleD',
    'squareD',
    'hexagonalD',
    'sapphire',
    'wild'
];
const payouts = [
    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },
    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },
    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },
    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },
    { x1: 0, x2: 0, x3: 1, x4: 2, x5: 5, x6: 50 },
    { x1: 0, x2: 0, x3: 2, x4: 4, x5: 10, x6: 100 },
    { x1: 0, x2: 0, x3: 3, x4: 6, x5: 15, x6: 150 },
    { x1: 0, x2: 0, x3: 5, x4: 15, x5: 30, x6: 500 },
    { x1: 0, x2: 0, x3: 0, x4: 0, x5: 500, x6: 2500 },
];
const chances = [
    175, 175, 175, 175, 100, 75, 60, 35, 30
];
const chancesRanges = [];
// Fill ranges
chances.forEach((el, index) => {
    chancesRanges[index] = el + (index > 0 ? chancesRanges[index - 1] : 0);
});
const slotSymbols = [
    { name: names[0], payouts: payouts[0], chances: chances[0] },
    { name: names[1], payouts: payouts[1], chances: chances[1] },
    { name: names[2], payouts: payouts[2], chances: chances[2] },
    { name: names[3], payouts: payouts[3], chances: chances[3] },
    { name: names[4], payouts: payouts[4], chances: chances[4] },
    { name: names[5], payouts: payouts[5], chances: chances[5] },
    { name: names[6], payouts: payouts[6], chances: chances[6] },
    { name: names[7], payouts: payouts[7], chances: chances[7] },
    { name: names[8], payouts: payouts[8], chances: chances[8] },
];
const LEVELS = [
    [0, 1, 3, 1, 0],
    [0, 3, 3, 3, 0],
    [1, 3, 5, 3, 1],
    [3, 3, 5, 3, 3],
    [3, 5, 5, 5, 3],
    [5, 5, 5, 5, 5]
];
class Spin {
    constructor(bet, stage) {
        this.bet = 0;
        this.resultBoard = [];
        this.bet = bet;
        this.stage = stage;
        this.drawSymbols();
        console.log(this.resultBoard);
    }
    drawSymbol() {
        const temp = Math.floor(Math.random() * 1000);
        for (const el of chancesRanges) {
            if (temp < el) {
                return slotSymbols[chancesRanges.indexOf(el)];
            }
        }
        throw new Error(`Couldn't draw any symbol`);
    }
    drawSymbols() {
        for (let i = 0; i < 5; i++) {
            this.resultBoard[i] = [];
            for (let j = 0; j < LEVELS[this.stage][i]; j++) {
                this.resultBoard[i][j] = this.drawSymbol();
            }
        }
    }
}
class Bonus {
    constructor(bet) {
        this.spins = [];
        this.features = [];
        this.bet = bet;
    }
}
function calculate(bet) {
    return new Spin(bet, 5);
}
