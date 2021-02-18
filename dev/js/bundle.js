/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/Bonus.ts":
/*!*********************!*\
  !*** ./ts/Bonus.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bonus\": () => (/* binding */ Bonus)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n/* harmony import */ var _Spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spin */ \"./ts/Spin.ts\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\nclass Bonus {\r\n    constructor(bet) {\r\n        this.spins = [];\r\n        this.multiplier = 1;\r\n        this.freeSpins = 5;\r\n        this.slotSymbols = JSON.parse(JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols));\r\n        this.LEVEL = JSON.parse(JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[_index__WEBPACK_IMPORTED_MODULE_0__.LEVELS.length - 1]));\r\n        this.expandWilds = false;\r\n        this.bet = bet;\r\n        this.features = this.getFeatures();\r\n        this.handleFeatures();\r\n        for (let i = 0; i < this.freeSpins; i++) {\r\n            const spin = (new _Spin__WEBPACK_IMPORTED_MODULE_1__.Spin(this.bet, {\r\n                bonus: {\r\n                    LEVEL: this.LEVEL,\r\n                    SYMBOLS: this.slotSymbols,\r\n                    MULTI: this.multiplier,\r\n                    EXPAND: this.expandWilds\r\n                }\r\n            }));\r\n            spin.checkForWinnings();\r\n            this.spins.push(spin);\r\n        }\r\n    }\r\n    getFeature(f, c) {\r\n        const n = Math.floor(Math.random() * c[c.length - 1]);\r\n        for (const el of c) {\r\n            if (n < el) {\r\n                const res = f[c.indexOf(el)];\r\n                f.splice(c.indexOf(el), 1);\r\n                c.splice(c.indexOf(el), 1);\r\n                return res;\r\n            }\r\n        }\r\n        throw new Error(`Couldn't draw any feature`);\r\n    }\r\n    getFeatures() {\r\n        const countMax = () => {\r\n            let counter = 0;\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.FeaturesChances.forEach(element => {\r\n                counter += element;\r\n            });\r\n            return counter;\r\n        }; // Function for calculating max boundry\r\n        const max = countMax(); // Assign max boundry\r\n        const featuresCopy = { a: JSON.parse(JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.featuresArray)), b: JSON.parse(JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.FeaturesRanges)) };\r\n        return [this.getFeature(featuresCopy.a, featuresCopy.b), this.getFeature(featuresCopy.a, featuresCopy.b), this.getFeature(featuresCopy.a, featuresCopy.b)];\r\n    }\r\n    handleFeatures() {\r\n        this.features.forEach(feature => {\r\n            switch (_index__WEBPACK_IMPORTED_MODULE_0__.featuresArray.indexOf(feature)) {\r\n                case 0:\r\n                    this.LEVEL.push(1);\r\n                    break;\r\n                case 1:\r\n                    this.expandWilds = true;\r\n                    break;\r\n                case 2:\r\n                    this.slotSymbols[4] = _index__WEBPACK_IMPORTED_MODULE_0__.specialSymbols[0];\r\n                    break;\r\n                case 3:\r\n                    this.slotSymbols[5] = _index__WEBPACK_IMPORTED_MODULE_0__.specialSymbols[1];\r\n                    break;\r\n                case 4:\r\n                    this.slotSymbols[6] = _index__WEBPACK_IMPORTED_MODULE_0__.specialSymbols[2];\r\n                    break;\r\n                case 5:\r\n                    this.slotSymbols[7] = _index__WEBPACK_IMPORTED_MODULE_0__.specialSymbols[3];\r\n                    break;\r\n                case 6:\r\n                    this.LEVEL[1] += 1;\r\n                    break;\r\n                case 7:\r\n                    this.LEVEL[2] += 1;\r\n                    break;\r\n                case 8:\r\n                    this.LEVEL[3] += 1;\r\n                    break;\r\n                case 9:\r\n                    this.freeSpins += 8;\r\n                    break;\r\n                case 10:\r\n                    this.freeSpins += 4;\r\n                    break;\r\n                case 11:\r\n                    this.freeSpins += 2;\r\n                    break;\r\n                case 12:\r\n                    this.freeSpins += 1;\r\n                    break;\r\n                case 13:\r\n                    this.multiplier += 3;\r\n                    break;\r\n                case 14:\r\n                    this.multiplier += 2;\r\n                    break;\r\n                case 15:\r\n                    this.multiplier += 1;\r\n                    break;\r\n                default:\r\n                    throw new Error(`Wrong feature input! \\n feature returned ${feature}`);\r\n            }\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://spin-calc/./ts/Bonus.ts?");

/***/ }),

/***/ "./ts/Spin.ts":
/*!********************!*\
  !*** ./ts/Spin.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Spin\": () => (/* binding */ Spin)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\nconsole.log('%cSpin.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px');\r\n\r\n/* eslint-disable no-unused-vars */\r\nclass Spin {\r\n    constructor(bet, rest) {\r\n        this.bet = 0;\r\n        this.resultBoard = []; // Result stored in two dimensional array [reel][row]\r\n        this.winning = { list: [] }; // Winnings\r\n        this.bet = bet;\r\n        if (!(rest.stage !== undefined || rest.bonus))\r\n            throw new Error(`Spin component didn't received neither stage nor bonus options :( ${rest}`);\r\n        if (rest.stage !== undefined)\r\n            this.stage = rest.stage;\r\n        if (rest.bonus !== undefined)\r\n            this.bonus = rest.bonus;\r\n        this.drawSymbols();\r\n    }\r\n    drawSymbol(max) {\r\n        const n = Math.floor(Math.random() * max); // Assign random number in range\r\n        for (const el of _index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges) { // Find symbol\r\n            if (n < el) {\r\n                if (this.bonus !== undefined) {\r\n                    return this.bonus.SYMBOLS[_index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges.indexOf(el)];\r\n                }\r\n                return _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[_index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges.indexOf(el)];\r\n            }\r\n        }\r\n        throw new Error(`Couldn't draw any symbol`);\r\n    }\r\n    drawSymbols() {\r\n        var _a;\r\n        const countMax = () => {\r\n            let counter = 0;\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.chances.forEach(element => {\r\n                counter += element;\r\n            });\r\n            return counter;\r\n        }; // Function for calculating max boundry\r\n        const max = countMax(); // Assign max boundry\r\n        for (let i = 0; i < (this.stage !== undefined ? _index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[this.stage].length : this.bonus !== undefined ? this.bonus.LEVEL.length : 0); i++) { // Length of array - number of reels\r\n            this.resultBoard[i] = []; // Initalize board\r\n            for (let j = 0; j < (this.stage !== undefined ? _index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[this.stage][i] : this.bonus !== undefined ? this.bonus.LEVEL[i] : 0); j++) { // Draw symbol for each field\r\n                this.resultBoard[i][j] = this.drawSymbol(max);\r\n            }\r\n        }\r\n        if (((_a = this.bonus) === null || _a === void 0 ? void 0 : _a.EXPAND) === true) {\r\n            this.resultExtended = JSON.parse(JSON.stringify(this.resultBoard));\r\n            this.resultBoard.forEach((a, i) => {\r\n                a.forEach((b, j) => {\r\n                    if (b.name === 'wild') {\r\n                        if (j === 0) {\r\n                            if (this.resultExtended[i][1].name !== 'wild') {\r\n                                this.resultExtended[i][1] = b;\r\n                            }\r\n                        }\r\n                        else if (j === a.length - 1) {\r\n                            if (this.resultExtended[i][a.length - 2].name !== 'wild') {\r\n                                this.resultExtended[i][a.length - 2] = b;\r\n                            }\r\n                        }\r\n                        else {\r\n                            const whereToExpand = (Math.round(Math.random()) === 0) ? -1 : 1;\r\n                            if (this.resultExtended[i][j + whereToExpand].name !== 'wild') {\r\n                                this.resultExtended[i][j + whereToExpand] = b;\r\n                            }\r\n                            else {\r\n                                this.resultExtended[i][j - whereToExpand] = b;\r\n                            }\r\n                        }\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    }\r\n    checkForWinnings() {\r\n        var _a;\r\n        const result = {\r\n            list: []\r\n        };\r\n        // Initalize result :)\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.forEach(s => {\r\n            result.list.push({\r\n                s: s,\r\n                position: [[]]\r\n            });\r\n        });\r\n        (((_a = this.bonus) === null || _a === void 0 ? void 0 : _a.EXPAND) === true ? this.resultExtended : this.resultBoard).forEach((reel, i) => {\r\n            if (i === 0) { // If its first reel\r\n                reel.forEach((symbol, j) => {\r\n                    if (symbol.name !== _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.length - 1].name) {\r\n                        result.list[this.bonus === undefined ? _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol) : _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.find(el => el.name === symbol.name))].position[i].push(j);\r\n                    }\r\n                    else {\r\n                        result.list.forEach(el => {\r\n                            el.position[i].push(j);\r\n                        });\r\n                    }\r\n                });\r\n            }\r\n            else { // Otherwise...\r\n                reel.forEach((symbol, j) => {\r\n                    const helper = this.bonus === undefined ? _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol) : _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.find(el => el.name === symbol.name));\r\n                    if (result.list[helper].position[i - 1] && result.list[helper].position[i - 1].length > 0) { // If theres symbol on reel before\r\n                        if (result.list[helper].position[i] === undefined) // In not initalized\r\n                            result.list[helper].position.push([]);\r\n                        result.list[helper].position[i].push(j); // Push Y-cord of symbol\r\n                    }\r\n                    if (symbol.name === _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[helper].name) { // If its wild\r\n                        result.list.forEach((a, k) => {\r\n                            if (k === result.list.length - 1)\r\n                                return; // If last, break\r\n                            if (a.position[i - 1] && a.position[i - 1].length > 0) { // If theres symbol before that connects\r\n                                if (a.position[i] === undefined) { // If not initalized\r\n                                    a.position.push([]); // Initalize\r\n                                }\r\n                                a.position[i].push(j); // Push Y cord\r\n                            }\r\n                        });\r\n                    }\r\n                });\r\n            }\r\n        });\r\n        result.list = result.list.filter(el => el.position.length >= 3); // Filter not needed results\r\n        result.win = 0;\r\n        result.list.forEach(el => {\r\n            const res = 'x' + el.position.length; // How many times appeard transformed to index\r\n            el.win = (el.s.payouts[res] * this.bet); // Win for one combination\r\n            el.position.forEach(p => {\r\n                if (el.win !== undefined) { // Make sure its not undefined\r\n                    el.win *= p.length; // Multiply by times appeard\r\n                }\r\n            });\r\n            if (this.bonus && this.bonus.MULTI) {\r\n                el.win *= this.bonus.MULTI;\r\n            }\r\n            if (result.win !== undefined)\r\n                result.win += el.win;\r\n        });\r\n        this.winning = result;\r\n        return result;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://spin-calc/./ts/Spin.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"featuresArray\": () => (/* binding */ featuresArray),\n/* harmony export */   \"FeaturesChances\": () => (/* binding */ FeaturesChances),\n/* harmony export */   \"FeaturesRanges\": () => (/* binding */ FeaturesRanges),\n/* harmony export */   \"tags\": () => (/* binding */ tags),\n/* harmony export */   \"names\": () => (/* binding */ names),\n/* harmony export */   \"bets\": () => (/* binding */ bets),\n/* harmony export */   \"payouts\": () => (/* binding */ payouts),\n/* harmony export */   \"chances\": () => (/* binding */ chances),\n/* harmony export */   \"chancesRanges\": () => (/* binding */ chancesRanges),\n/* harmony export */   \"slotSymbols\": () => (/* binding */ slotSymbols),\n/* harmony export */   \"specialSymbols\": () => (/* binding */ specialSymbols),\n/* harmony export */   \"LEVELS\": () => (/* binding */ LEVELS)\n/* harmony export */ });\n/* harmony import */ var _Bonus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bonus */ \"./ts/Bonus.ts\");\n/* eslint-disable no-unused-vars */\r\nconsole.log('%cIndex.ts initalized', 'background: #000; color: #f00; font-size: 1rem; display: block; padding: 30px 100px;');\r\n\r\nconst featuresArray = ['Additional reel',\r\n    'Expand every normal wild by 1',\r\n    'Transform Triangle Diamond into wild',\r\n    'Transform Square Diamond into wild',\r\n    'Transform Hexagonal Diamond into wild',\r\n    'Transform Sapphire into wild',\r\n    'Expand second reel',\r\n    'Expand third reel',\r\n    'Expand fourth reel',\r\n    '8 Free Spins',\r\n    '4 Free Spins',\r\n    '2 Free spins',\r\n    '1 Free spin',\r\n    '+ x3 Multiplier',\r\n    '+ x2 Multiplier',\r\n    '+ x1 Multiplier'\r\n];\r\nconst FeaturesChances = [\r\n    2, 200, 5, 5, 5, 5, 5, 6, 8, 5, 10, 20, 30, 5, 20, 30\r\n];\r\nconst FeaturesRanges = [];\r\n//Fill ranges\r\nFeaturesChances.forEach((el, index) => {\r\n    FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index - 1] : 0);\r\n});\r\nconst tags = [\r\n    'low1',\r\n    'low2',\r\n    'low3',\r\n    'low4',\r\n    'high1',\r\n    'high2',\r\n    'high3',\r\n    'high4',\r\n    'wild0',\r\n    'wild1',\r\n    'wild2',\r\n    'wild3',\r\n    'wild4'\r\n];\r\nconst names = [\r\n    'diamond',\r\n    'club',\r\n    'heart',\r\n    'spade',\r\n    'triangleD',\r\n    'squareD',\r\n    'hexagonalD',\r\n    'sapphire',\r\n    'wild'\r\n];\r\nconst bets = [\r\n    0.1, 0.2, 0.5, 1, 1.5, 2, 2.5, 3, 5, 10, 20, 30, 40, 50, 100\r\n];\r\nconst payouts = [\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 1.5, x6: 3 },\r\n    { x1: 0, x2: 0, x3: 1, x4: 2, x5: 3.5, x6: 6 },\r\n    { x1: 0, x2: 0, x3: 2, x4: 3, x5: 6, x6: 7 },\r\n    { x1: 0, x2: 0, x3: 3, x4: 4, x5: 6.5, x6: 8 },\r\n    { x1: 0, x2: 0, x3: 3.5, x4: 5, x5: 7.5, x6: 9 },\r\n    { x1: 0, x2: 0, x3: 7.5, x4: 10, x5: 12.5, x6: 10 },\r\n];\r\nconst chances = [\r\n    125, 125, 125, 125, 100, 75, 60, 35, 25\r\n];\r\nconst chancesRanges = [];\r\n// Fill ranges\r\nchances.forEach((el, index) => {\r\n    chancesRanges[index] = el + (index > 0 ? chancesRanges[index - 1] : 0);\r\n});\r\nconst slotSymbols = [\r\n    { name: names[0], payouts: payouts[0], chances: chances[0], _tag: tags[0] },\r\n    { name: names[1], payouts: payouts[1], chances: chances[1], _tag: tags[1] },\r\n    { name: names[2], payouts: payouts[2], chances: chances[2], _tag: tags[2] },\r\n    { name: names[3], payouts: payouts[3], chances: chances[3], _tag: tags[3] },\r\n    { name: names[4], payouts: payouts[4], chances: chances[4], _tag: tags[4] },\r\n    { name: names[5], payouts: payouts[5], chances: chances[5], _tag: tags[5] },\r\n    { name: names[6], payouts: payouts[6], chances: chances[6], _tag: tags[6] },\r\n    { name: names[7], payouts: payouts[7], chances: chances[7], _tag: tags[7] },\r\n    { name: names[8], payouts: payouts[8], chances: chances[8], _tag: tags[8] }\r\n];\r\nconst specialSymbols = [\r\n    { name: names[8], payouts: payouts[8], chances: chances[4], _tag: tags[9] },\r\n    { name: names[8], payouts: payouts[8], chances: chances[5], _tag: tags[10] },\r\n    { name: names[8], payouts: payouts[8], chances: chances[6], _tag: tags[11] },\r\n    { name: names[8], payouts: payouts[8], chances: chances[7], _tag: tags[12] },\r\n];\r\nconst LEVELS = [\r\n    [1, 3, 1],\r\n    [3, 3, 3],\r\n    [1, 3, 5, 3, 1],\r\n    [3, 3, 5, 3, 3],\r\n    [3, 5, 5, 5, 3],\r\n    [5, 5, 5, 5, 5]\r\n];\r\nfunction calculate(bet) {\r\n    const s = new _Bonus__WEBPACK_IMPORTED_MODULE_0__.Bonus(bet);\r\n    console.log(s);\r\n    return s;\r\n}\r\ncalculate(10);\r\n\n\n//# sourceURL=webpack://spin-calc/./ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./ts/index.ts");
/******/ })()
;