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

/***/ "./ts/Spin.ts":
/*!********************!*\
  !*** ./ts/Spin.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Spin\": () => (/* binding */ Spin)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n\n/* eslint-disable no-unused-vars */\nclass Spin {\n    constructor(bet, stage) {\n        this.bet = 0;\n        this.resultBoard = [];\n        this.bet = bet;\n        this.stage = stage;\n        this.drawSymbols();\n        this.checkForWinnings();\n    }\n    drawSymbol(max) {\n        const temp = Math.floor(Math.random() * max);\n        for (const el of _index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges) {\n            if (temp < el) {\n                return _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[_index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges.indexOf(el)];\n            }\n        }\n        throw new Error(`Couldn't draw any symbol`);\n    }\n    drawSymbols() {\n        const countMax = () => {\n            let counter = 0;\n            _index__WEBPACK_IMPORTED_MODULE_0__.chances.forEach(element => {\n                counter += element;\n            });\n            return counter;\n        };\n        const max = countMax();\n        for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[this.stage].length; i++) {\n            this.resultBoard[i] = [];\n            for (let j = 0; j < _index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[this.stage][i]; j++) {\n                this.resultBoard[i][j] = this.drawSymbol(max);\n            }\n        }\n    }\n    checkForWinnings() {\n        const result = {\n            list: []\n        };\n        // Initalize result :)\n        _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.forEach(s => {\n            result.list.push({\n                s: s,\n                position: [[]]\n            });\n        });\n        this.resultBoard.forEach((reel, i) => {\n            if (i === 0) {\n                reel.forEach((symbol, j) => {\n                    result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position[i].push(j);\n                });\n            }\n            else {\n                reel.forEach((symbol, j) => {\n                    if (result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position[i - 1] && result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position[i - 1].length > 0) {\n                        if (!result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position[i])\n                            result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position.push([]);\n                        result.list[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.indexOf(symbol)].position[i].push(j);\n                    }\n                    if (symbol.name === _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[_index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols.length - 1].name) {\n                        result.list.forEach((a, i) => {\n                            if (i == result.list.length - 1)\n                                return;\n                            if (a.position[i - 1] && a.position[i - 1].length > 0) {\n                                if (!a.position[i])\n                                    a.position.push([]);\n                                a.position[i].push(j);\n                            }\n                        });\n                    }\n                });\n            }\n        });\n        result.list = result.list.filter(el => el.position.length >= 3); // Filter not needed results\n        this.resultBoard.forEach(el => {\n            console.table(el);\n        });\n        result.list.forEach(el => {\n            const res = 'x' + el.position.length;\n            el.win = (el.s.payouts[res] * this.bet);\n        });\n        return result;\n    }\n}\n\n\n//# sourceURL=webpack://spin-calc/./ts/Spin.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"featuresArray\": () => (/* binding */ featuresArray),\n/* harmony export */   \"FeaturesChances\": () => (/* binding */ FeaturesChances),\n/* harmony export */   \"FeaturesRanges\": () => (/* binding */ FeaturesRanges),\n/* harmony export */   \"names\": () => (/* binding */ names),\n/* harmony export */   \"payouts\": () => (/* binding */ payouts),\n/* harmony export */   \"chances\": () => (/* binding */ chances),\n/* harmony export */   \"chancesRanges\": () => (/* binding */ chancesRanges),\n/* harmony export */   \"slotSymbols\": () => (/* binding */ slotSymbols),\n/* harmony export */   \"LEVELS\": () => (/* binding */ LEVELS)\n/* harmony export */ });\n/* harmony import */ var _Spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spin */ \"./ts/Spin.ts\");\n\nconst featuresArray = ['Additional reel',\n    '8 Free Spins',\n    '+ x3 Multiplier',\n    '4 Free Spins',\n    '+ x2 Multiplier',\n    'Expand every normal wild by 1',\n    'Transform Triangle Diamond into wild',\n    'Transform Square Diamond into wild',\n    'Transform Hexagonal Diamond into wild',\n    'Transform Sapphire into wild',\n    'Expand second reel',\n    'Expand third reel',\n    'Expand fourth reel',\n    '2 Free spins',\n    '1 Free spin',\n    '+ 1x Multiplier'\n];\nconst FeaturesChances = [\n    2, 4, 4, 9, 8.5, 7.5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10\n];\nconst FeaturesRanges = [];\n//Fill ranges\nFeaturesChances.forEach((el, index) => {\n    FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index - 1] : 0);\n});\nconst names = [\n    'diamond',\n    'club',\n    'heart',\n    'spade',\n    'triangleD',\n    'squareD',\n    'hexagonalD',\n    'sapphire',\n    'wild'\n];\nconst payouts = [\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\n    { x1: 0, x2: 0, x3: 1, x4: 2, x5: 5, x6: 50 },\n    { x1: 0, x2: 0, x3: 2, x4: 4, x5: 10, x6: 100 },\n    { x1: 0, x2: 0, x3: 3, x4: 6, x5: 15, x6: 150 },\n    { x1: 0, x2: 0, x3: 5, x4: 15, x5: 30, x6: 500 },\n    { x1: 0, x2: 0, x3: 15, x4: 100, x5: 500, x6: 2500 },\n];\nconst chances = [\n    175, 175, 175, 175, 100, 75, 60, 35, 30\n];\nconst chancesRanges = [];\n// Fill ranges\nchances.forEach((el, index) => {\n    chancesRanges[index] = el + (index > 0 ? chancesRanges[index - 1] : 0);\n});\nconst slotSymbols = [\n    { name: names[0], payouts: payouts[0], chances: chances[0] },\n    { name: names[1], payouts: payouts[1], chances: chances[1] },\n    { name: names[2], payouts: payouts[2], chances: chances[2] },\n    { name: names[3], payouts: payouts[3], chances: chances[3] },\n    { name: names[4], payouts: payouts[4], chances: chances[4] },\n    { name: names[5], payouts: payouts[5], chances: chances[5] },\n    { name: names[6], payouts: payouts[6], chances: chances[6] },\n    { name: names[7], payouts: payouts[7], chances: chances[7] },\n    { name: names[8], payouts: payouts[8], chances: chances[8] },\n];\nconst LEVELS = [\n    [1, 3, 1],\n    [3, 3, 3],\n    [1, 3, 5, 3, 1],\n    [3, 3, 5, 3, 3],\n    [3, 5, 5, 5, 3],\n    [5, 5, 5, 5, 5]\n];\nfunction calculate(bet) {\n    const stage = 1;\n    const s = new _Spin__WEBPACK_IMPORTED_MODULE_0__.Spin(bet, stage);\n    return s;\n}\ndocument.body.innerHTML = JSON.stringify(calculate(5));\n\n\n//# sourceURL=webpack://spin-calc/./ts/index.ts?");

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