/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game-view */ \"./src/scripts/game-view.js\");\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const game = new Game();\n//     const rootEl = document.querySelector(\".game-board\");\n//     new View(game, rootEl);\n//   });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3XCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbi8vICAgICBjb25zdCByb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYm9hcmRcIik7XG4vLyAgICAgbmV3IFZpZXcoZ2FtZSwgcm9vdEVsKTtcbi8vICAgfSk7XG4iXSwibmFtZXMiOlsiVmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.clickHandler = this.clickHandler.bind(this);\n    this.setUpBoard();\n  }\n  setUpBoard() {\n    const ul = document.createElement(\"ul\");\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j < 3; j++) {\n        const li = document.createElement(\"li\");\n        li.dataset.pos = JSON.stringify([i, j]);\n        ul.append(li);\n      }\n    }\n    this.el.append(ul);\n    this.el.addEventListener(\"click\", this.handleClick);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLElBQUk7RUFDTkMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxFQUFFLEVBQUM7SUFDakIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxFQUFFLEdBQUVBLEVBQUU7SUFDWCxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBR0FBLFVBQVVBLENBQUEsRUFBRTtJQUNSLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXZDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxFQUFFLEVBQUM7TUFDaEIsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEVBQUUsRUFBQztRQUNoQixNQUFNQyxFQUFFLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2Q0csRUFBRSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQ04sQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQztRQUN2Q0osRUFBRSxDQUFDVSxNQUFNLENBQUNMLEVBQUUsQ0FBQztNQUNqQjtJQUNKO0lBRUEsSUFBSSxDQUFDVCxFQUFFLENBQUNjLE1BQU0sQ0FBQ1YsRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQ0osRUFBRSxDQUFDZSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUM7RUFDdkQ7QUFDSjtBQUdBLCtEQUFlbkIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUtdmlldy5qcz9jNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZpZXd7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgZWwpe1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmVsID1lbDtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFVwQm9hcmQoKTtcbiAgICB9XG5cblxuICAgIHNldFVwQm9hcmQoKXtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICAgICAgZm9yKGxldCBpPTA7aTwzO2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDM7aisrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBsaS5kYXRhc2V0LnBvcyA9IEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5hcHBlbmQodWwpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdLCJuYW1lcyI6WyJWaWV3IiwiY29uc3RydWN0b3IiLCJnYW1lIiwiZWwiLCJjbGlja0hhbmRsZXIiLCJiaW5kIiwic2V0VXBCb2FyZCIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImoiLCJsaSIsImRhdGFzZXQiLCJwb3MiLCJKU09OIiwic3RyaW5naWZ5IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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