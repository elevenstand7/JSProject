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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.currentHole = 0; //array to hold the holes current having loopy;\n    this.score = 0;\n    // this.addEventListener(\"click\", this.clickHole);\n    // this.clickHandler = this.clickHandler.bind(this);\n    this.startGame();\n  }\n  startGame() {\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    this.showLoopy();\n    this.clickHole();\n  }\n  //     setRandomLoopy(params) {\n  //         let loopy = document.\n  //     }\n\n  clickHole() {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", function () {\n        alert(\"click loopy!\");\n      });\n    });\n    // if (this.currentHole.includes(currentClick)){\n    //     score += 1;\n    //     document.getElementById(\"score\").innerText = score.toString();\n    // }\n  }\n\n  //function to get random number between 0-5, for select random hole\n  getRandomHole() {\n    return Math.floor(Math.random() * 6);\n  }\n  showLoopy() {\n    let randomNum = this.getRandomHole();\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n    this.hideLoopy(loopy);\n  }\n  hideLoopy(ele) {\n    setTimeout(function () {\n      ele.classList.add(\"hidden\");\n      ele.classList.remove(\"showUp\");\n    }, 3000);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDakQsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZDtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUdBQSxTQUFTQSxDQUFBLEVBQUU7SUFDUCxJQUFJLENBQUNMLFNBQVMsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7TUFBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQzdFLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUNKO0VBQ0E7RUFDQTs7RUFFSUEsU0FBU0EsQ0FBQSxFQUFFO0lBQ1AsSUFBSUMsU0FBUyxHQUFHVCxRQUFRLENBQUNVLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuREQsU0FBUyxDQUFDRSxPQUFPLENBQUNDLEdBQUcsSUFBRTtNQUNuQkEsR0FBRyxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVTtRQUNwQ0MsS0FBSyxDQUFDLGNBQWMsQ0FBQztNQUN6QixDQUNKLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDSDtJQUNBO0lBQ0E7SUFDQTtFQUNKOztFQUVKO0VBQ0lPLGFBQWFBLENBQUEsRUFBRTtJQUNYLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0VBQ3RDO0VBRUFULFNBQVNBLENBQUEsRUFBRTtJQUNQLElBQUlVLFNBQVMsR0FBSSxJQUFJLENBQUNKLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLElBQUlKLFNBQVMsR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDbkQsSUFBSVEsS0FBSyxHQUFHVCxTQUFTLENBQUNRLFNBQVMsQ0FBQztJQUNoQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDN0JGLEtBQUssQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2hDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixLQUFLLENBQUM7RUFDekI7RUFFQUksU0FBU0EsQ0FBQ1YsR0FBRyxFQUFDO0lBQ1ZXLFVBQVUsQ0FBQyxZQUFVO01BQ2pCWCxHQUFHLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUMzQlIsR0FBRyxDQUFDTyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQyxFQUFDLElBQUksQ0FBQztFQUNYO0FBRUo7QUFFQSwrREFBZXhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgICAgIHRoaXMuY3VycmVudEhvbGUgPSAwOy8vYXJyYXkgdG8gaG9sZCB0aGUgaG9sZXMgY3VycmVudCBoYXZpbmcgbG9vcHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrSG9sZSk7XG4gICAgICAgIC8vIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cblxuICAgIHN0YXJ0R2FtZSgpe1xuICAgICAgICB0aGlzLmdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXthbGVydChcInUgY2xpY2sgc3RhcnQhXCIpfSk7XG4gICAgICAgIHRoaXMuc2hvd0xvb3B5KCk7XG4gICAgICAgIHRoaXMuY2xpY2tIb2xlKCk7XG4gICAgfVxuLy8gICAgIHNldFJhbmRvbUxvb3B5KHBhcmFtcykge1xuLy8gICAgICAgICBsZXQgbG9vcHkgPSBkb2N1bWVudC5cbi8vICAgICB9XG5cbiAgICBjbGlja0hvbGUoKXtcbiAgICAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgICAgIGxvb3B5TGlzdC5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiY2xpY2sgbG9vcHkhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApfSk7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRIb2xlLmluY2x1ZGVzKGN1cnJlbnRDbGljaykpe1xuICAgICAgICAvLyAgICAgc2NvcmUgKz0gMTtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIikuaW5uZXJUZXh0ID0gc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuLy9mdW5jdGlvbiB0byBnZXQgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAtNSwgZm9yIHNlbGVjdCByYW5kb20gaG9sZVxuICAgIGdldFJhbmRvbUhvbGUoKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuICAgIH1cblxuICAgIHNob3dMb29weSgpe1xuICAgICAgICBsZXQgcmFuZG9tTnVtID0gIHRoaXMuZ2V0UmFuZG9tSG9sZSgpO1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbGV0IGxvb3B5ID0gbG9vcHlMaXN0W3JhbmRvbU51bV07XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMuaGlkZUxvb3B5KGxvb3B5KTtcbiAgICB9XG5cbiAgICBoaWRlTG9vcHkoZWxlKXtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dVcFwiKTtcbiAgICAgICAgfSwzMDAwKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJnYW1lU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudEhvbGUiLCJzY29yZSIsInN0YXJ0R2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsInNob3dMb29weSIsImNsaWNrSG9sZSIsImxvb3B5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwiZ2V0UmFuZG9tSG9sZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbU51bSIsImxvb3B5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGlkZUxvb3B5Iiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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