/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game-view */ \"./src/scripts/game-view.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_game__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const game = new (_scripts_game__WEBPACK_IMPORTED_MODULE_1___default())();\n  const rootEl = document.querySelector(\".game-board\");\n  new _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, rootEl);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUN1QztBQUNMO0FBRWxDRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHLElBQUlILHNEQUFJLENBQUMsQ0FBQztFQUN2QixNQUFNSSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUNwRCxJQUFJTiwwREFBSSxDQUFDSSxJQUFJLEVBQUVDLE1BQU0sQ0FBQztBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ib2FyZFwiKTtcbiAgICBuZXcgVmlldyhnYW1lLCByb290RWwpO1xuICB9KTtcblxuIl0sIm5hbWVzIjpbIlZpZXciLCJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsInJvb3RFbCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.clickHandler = this.clickHandler.bind(this);\n    this.setUpBoard();\n  }\n  setUpBoard() {\n    const ul = document.createElement(\"ul\");\n    for (let i = 0; i < 6; i++) {\n      const li = document.createElement(\"li\");\n      li.dataset.pos = JSON.stringify([i, j]);\n      ul.append(div);\n    }\n    this.el.append(ul);\n    this.el.addEventListener(\"click\", this.handleClick);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLElBQUk7RUFDTkMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxFQUFFLEVBQUM7SUFDakIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxFQUFFLEdBQUVBLEVBQUU7SUFDWCxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBR0FBLFVBQVVBLENBQUEsRUFBRTtJQUNSLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXZDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxFQUFFLEVBQUM7TUFDaEIsTUFBTUMsRUFBRSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDdkNFLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUNMLENBQUMsRUFBRU0sQ0FBQyxDQUFDLENBQUM7TUFDdkNULEVBQUUsQ0FBQ1UsTUFBTSxDQUFDQyxHQUFHLENBQUM7SUFFbEI7SUFFQSxJQUFJLENBQUNmLEVBQUUsQ0FBQ2MsTUFBTSxDQUFDVixFQUFFLENBQUM7SUFDbEIsSUFBSSxDQUFDSixFQUFFLENBQUNnQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUM7RUFDdkQ7QUFDSjtBQUdBLCtEQUFlcEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUtdmlldy5qcz9jNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZpZXd7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgZWwpe1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmVsID1lbDtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFVwQm9hcmQoKTtcbiAgICB9XG5cblxuICAgIHNldFVwQm9hcmQoKXtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTw2O2krKyl7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmRhdGFzZXQucG9zID0gSlNPTi5zdHJpbmdpZnkoW2ksIGpdKVxuICAgICAgICAgICAgdWwuYXBwZW5kKGRpdik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kKHVsKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXSwibmFtZXMiOlsiVmlldyIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsImVsIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsInNldFVwQm9hcmQiLCJ1bCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJsaSIsImRhdGFzZXQiLCJwb3MiLCJKU09OIiwic3RyaW5naWZ5IiwiaiIsImFwcGVuZCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function() {

eval("class Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n  }\n  getRandomHole() {\n    return Math.floor(Math.random() * 6);\n  }\n\n  //     setRandomLoopy(params) {\n  //         let loopy = document.\n  //     }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ2FtZVN0YXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldFJhbmRvbUhvbGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcblxuICAgIH1cblxuICAgIGdldFJhbmRvbUhvbGUoKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuICAgIH1cblxuLy8gICAgIHNldFJhbmRvbUxvb3B5KHBhcmFtcykge1xuLy8gICAgICAgICBsZXQgbG9vcHkgPSBkb2N1bWVudC5cbi8vICAgICB9XG5cblxufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUk7RUFDTkMsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUVyRDtFQUVBQyxhQUFhQSxDQUFBLEVBQUU7SUFDWCxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztFQUN0Qzs7RUFFSjtFQUNBO0VBQ0E7QUFHQSJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;