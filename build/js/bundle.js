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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Spin\": () => (/* binding */ Spin)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n\r\n/* eslint-disable no-unused-vars */\r\nclass Spin {\r\n    constructor(bet, stage) {\r\n        this.bet = 0;\r\n        this.resultBoard = [];\r\n        this.bet = bet;\r\n        this.stage = stage;\r\n        this.drawSymbols();\r\n        this.checkForWinnings();\r\n    }\r\n    drawSymbol() {\r\n        const temp = Math.floor(Math.random() * 1000);\r\n        for (const el of _index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges) {\r\n            if (temp < el) {\r\n                return _index__WEBPACK_IMPORTED_MODULE_0__.slotSymbols[_index__WEBPACK_IMPORTED_MODULE_0__.chancesRanges.indexOf(el)];\r\n            }\r\n        }\r\n        throw new Error(`Couldn't draw any symbol`);\r\n    }\r\n    drawSymbols() {\r\n        for (let i = 0; i < 5; i++) {\r\n            this.resultBoard[i] = [];\r\n            for (let j = 0; j < _index__WEBPACK_IMPORTED_MODULE_0__.LEVELS[this.stage][i]; j++) {\r\n                this.resultBoard[i][j] = this.drawSymbol();\r\n            }\r\n        }\r\n    }\r\n    checkForWinnings() {\r\n        return [];\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://spin-calc/./ts/Spin.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"featuresArray\": () => (/* binding */ featuresArray),\n/* harmony export */   \"FeaturesChances\": () => (/* binding */ FeaturesChances),\n/* harmony export */   \"FeaturesRanges\": () => (/* binding */ FeaturesRanges),\n/* harmony export */   \"names\": () => (/* binding */ names),\n/* harmony export */   \"payouts\": () => (/* binding */ payouts),\n/* harmony export */   \"chances\": () => (/* binding */ chances),\n/* harmony export */   \"chancesRanges\": () => (/* binding */ chancesRanges),\n/* harmony export */   \"slotSymbols\": () => (/* binding */ slotSymbols),\n/* harmony export */   \"LEVELS\": () => (/* binding */ LEVELS)\n/* harmony export */ });\n/* harmony import */ var _Spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spin */ \"./ts/Spin.ts\");\n/* eslint-disable no-unused-vars */\r\n\r\nconst featuresArray = ['Additional reel',\r\n    '8 Free Spins',\r\n    '+ x3 Multiplier',\r\n    '4 Free Spins',\r\n    '+ x2 Multiplier',\r\n    'Expand every normal wild by 1',\r\n    'Transform Triangle Diamond into wild',\r\n    'Transform Square Diamond into wild',\r\n    'Transform Hexagonal Diamond into wild',\r\n    'Transform Sapphire into wild',\r\n    'Expand second reel',\r\n    'Expand third reel',\r\n    'Expand fourth reel',\r\n    '2 Free spins',\r\n    '1 Free spin',\r\n    '+ 1x Multiplier'\r\n];\r\nconst FeaturesChances = [\r\n    2, 4, 4, 9, 8.5, 7.5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10\r\n];\r\nconst FeaturesRanges = [];\r\n//Fill ranges\r\nFeaturesChances.forEach((el, index) => {\r\n    FeaturesRanges[index] = el + (index > 0 ? FeaturesRanges[index - 1] : 0);\r\n});\r\nconst names = [\r\n    'diamond',\r\n    'club',\r\n    'heart',\r\n    'spade',\r\n    'triangleD',\r\n    'squareD',\r\n    'hexagonalD',\r\n    'sapphire',\r\n    'wild'\r\n];\r\nconst payouts = [\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\r\n    { x1: 0, x2: 0, x3: 0.1, x4: 1, x5: 2.5, x6: 25 },\r\n    { x1: 0, x2: 0, x3: 1, x4: 2, x5: 5, x6: 50 },\r\n    { x1: 0, x2: 0, x3: 2, x4: 4, x5: 10, x6: 100 },\r\n    { x1: 0, x2: 0, x3: 3, x4: 6, x5: 15, x6: 150 },\r\n    { x1: 0, x2: 0, x3: 5, x4: 15, x5: 30, x6: 500 },\r\n    { x1: 0, x2: 0, x3: 15, x4: 100, x5: 500, x6: 2500 },\r\n];\r\nconst chances = [\r\n    175, 175, 175, 175, 100, 75, 60, 35, 30\r\n];\r\nconst chancesRanges = [];\r\n// Fill ranges\r\nchances.forEach((el, index) => {\r\n    chancesRanges[index] = el + (index > 0 ? chancesRanges[index - 1] : 0);\r\n});\r\nconst slotSymbols = [\r\n    { name: names[0], payouts: payouts[0], chances: chances[0] },\r\n    { name: names[1], payouts: payouts[1], chances: chances[1] },\r\n    { name: names[2], payouts: payouts[2], chances: chances[2] },\r\n    { name: names[3], payouts: payouts[3], chances: chances[3] },\r\n    { name: names[4], payouts: payouts[4], chances: chances[4] },\r\n    { name: names[5], payouts: payouts[5], chances: chances[5] },\r\n    { name: names[6], payouts: payouts[6], chances: chances[6] },\r\n    { name: names[7], payouts: payouts[7], chances: chances[7] },\r\n    { name: names[8], payouts: payouts[8], chances: chances[8] },\r\n];\r\nconst LEVELS = [\r\n    [1, 3, 1],\r\n    [3, 3, 3],\r\n    [1, 3, 5, 3, 1],\r\n    [3, 3, 5, 3, 3],\r\n    [3, 5, 5, 5, 3],\r\n    [5, 5, 5, 5, 5]\r\n];\r\nfunction calculate(bet) {\r\n    const stage = 1;\r\n    const s = new _Spin__WEBPACK_IMPORTED_MODULE_0__.Spin(bet, stage);\r\n    for (let i = 0; i < s.resultBoard.length; i++) {\r\n        console.table(s.resultBoard[i]);\r\n    }\r\n}\r\nconsole.log('TAK');\r\n\n\n//# sourceURL=webpack://spin-calc/./ts/index.ts?");

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