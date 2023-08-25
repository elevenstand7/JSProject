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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import View from \"./scripts/game-view\";\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const game = new Game();\n//     const rootEl = document.querySelector(\".game-board\");\n//     new View(game, rootEl);\n//   });\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"hello world!\");\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  // const gameStart = document.getElementById(\"start\");\n  // gameStart.addEventListener(\"click\", function(){alert(\"u click start!\")});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVTtFQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsTUFBTUMsSUFBSSxHQUFHLElBQUlMLHFEQUFJLENBQUMsQ0FBQztFQUN2QjtFQUNBO0FBQ0osQ0FDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWUtdmlld1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbi8vICAgICBjb25zdCByb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYm9hcmRcIik7XG4vLyAgICAgbmV3IFZpZXcoZ2FtZSwgcm9vdEVsKTtcbi8vICAgfSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsXG5mdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIC8vIGNvbnN0IGdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgLy8gZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2FsZXJ0KFwidSBjbGljayBzdGFydCFcIil9KTtcbn1cbik7XG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.currentHole = []; //array to hold the holes current having loopy;\n    this.score = 0;\n    // this.addEventListener(\"click\", this.clickHole);\n    // this.clickHandler = this.clickHandler.bind(this);\n    this.startGame();\n  }\n  getRandomHole() {\n    return Math.floor(Math.random() * 6);\n  }\n  startGame() {\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    this.clickHole();\n  }\n  //     setRandomLoopy(params) {\n  //         let loopy = document.\n  //     }\n\n  clickHole() {\n    let holeList = document.querySelectorAll(\".hole\");\n    holeList.forEach(ele => {\n      ele.addEventListener(\"click\", function () {\n        alert(\"click hole!\");\n      });\n    });\n    // if (this.currentHole.includes(currentClick)){\n    //     score += 1;\n    //     document.getElementById(\"score\").innerText = score.toString();\n    // }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDakQsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZDtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUdBQyxhQUFhQSxDQUFBLEVBQUU7SUFDWCxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztFQUN0QztFQUVBSixTQUFTQSxDQUFBLEVBQUU7SUFDUCxJQUFJLENBQUNMLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7TUFBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQzdFLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEI7RUFDSjtFQUNBO0VBQ0E7O0VBRUlBLFNBQVNBLENBQUEsRUFBRTtJQUNQLElBQUlDLFFBQVEsR0FBR1osUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDakRELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLElBQUU7TUFDbEJBLEdBQUcsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7UUFBQ0MsS0FBSyxDQUFDLGFBQWEsQ0FBQztNQUFBLENBQ2pFLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDSDtJQUNBO0lBQ0E7SUFDQTtFQUNKO0FBRUo7O0FBRUEsK0RBQWViLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgICAgIHRoaXMuY3VycmVudEhvbGUgPSBbXTsvL2FycmF5IHRvIGhvbGQgdGhlIGhvbGVzIGN1cnJlbnQgaGF2aW5nIGxvb3B5O1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGlja0hvbGUpO1xuICAgICAgICAvLyB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBnZXRSYW5kb21Ib2xlKCl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7YWxlcnQoXCJ1IGNsaWNrIHN0YXJ0IVwiKX0pO1xuICAgICAgICB0aGlzLmNsaWNrSG9sZSgpO1xuICAgIH1cbi8vICAgICBzZXRSYW5kb21Mb29weShwYXJhbXMpIHtcbi8vICAgICAgICAgbGV0IGxvb3B5ID0gZG9jdW1lbnQuXG4vLyAgICAgfVxuXG4gICAgY2xpY2tIb2xlKCl7XG4gICAgICAgIGxldCBob2xlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9sZVwiKTtcbiAgICAgICAgaG9sZUxpc3QuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXthbGVydChcImNsaWNrIGhvbGUhXCIpfVxuICAgICAgICApfSk7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRIb2xlLmluY2x1ZGVzKGN1cnJlbnRDbGljaykpe1xuICAgICAgICAvLyAgICAgc2NvcmUgKz0gMTtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIikuaW5uZXJUZXh0ID0gc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImdhbWVTdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50SG9sZSIsInNjb3JlIiwic3RhcnRHYW1lIiwiZ2V0UmFuZG9tSG9sZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsImNsaWNrSG9sZSIsImhvbGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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