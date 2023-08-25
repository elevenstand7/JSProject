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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.currentHole = 0; //array to hold the holes current having loopy;\n    this.restTime = document.getElementById(\"time\");\n    // this.addEventListener(\"click\", this.clickHole);\n    // this.clickHandler = this.clickHandler.bind(this);\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    let currentTime = 60;\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    // this.showLoopy();\n    this.timer();\n    setInterval(this.showLoopy, 2000);\n    this.clickLoopy(currentScore);\n  }\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", function () {\n        // alert(\"click loopy!\");\n        currentScore += 1;\n        document.getElementById(\"score\").innerText = currentScore.toString();\n      });\n    });\n  }\n\n  //function to get random number between 0-5, for select random hole\n  // getRandomHole(){\n  //     return Math.floor(Math.random()*6)\n  // };\n\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n\n  // hideLoopy(ele){\n  //     setTimeout(function(){\n  //         ele.classList.add(\"hidden\");\n  //         ele.classList.remove(\"showUp\");\n  //     },3000);\n  // }\n\n  timer() {\n    let currentTime = Number(document.getElementById(\"time\").innerHTML.slice(0, 2));\n    setInterval(function () {\n      if (currentTime > 0) {\n        currentTime -= 1;\n        document.getElementById(\"time\").innerText = currentTime.toString() + \" s\";\n      }\n    }, 1000);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SG9sZSA9IDA7Ly9hcnJheSB0byBob2xkIHRoZSBob2xlcyBjdXJyZW50IGhhdmluZyBsb29weTtcbiAgICAgICAgdGhpcy5yZXN0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGlja0hvbGUpO1xuICAgICAgICAvLyB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IDYwO1xuICAgICAgICB0aGlzLmdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXthbGVydChcInUgY2xpY2sgc3RhcnQhXCIpfSk7XG4gICAgICAgIC8vIHRoaXMuc2hvd0xvb3B5KCk7XG4gICAgICAgIHRoaXMudGltZXIoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5zaG93TG9vcHksIDIwMDApO1xuICAgICAgICB0aGlzLmNsaWNrTG9vcHkoY3VycmVudFNjb3JlKTtcbiAgICB9XG5cbiAgICBjbGlja0xvb3B5KGN1cnJlbnRTY29yZSl7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsb29weUxpc3QuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChcImNsaWNrIGxvb3B5IVwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVyVGV4dCA9IGN1cnJlbnRTY29yZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICl9KTtcbiAgICB9XG5cbi8vZnVuY3Rpb24gdG8gZ2V0IHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwLTUsIGZvciBzZWxlY3QgcmFuZG9tIGhvbGVcbiAgICAvLyBnZXRSYW5kb21Ib2xlKCl7XG4gICAgLy8gICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNilcbiAgICAvLyB9O1xuXG4gICAgc2hvd0xvb3B5KCl7XG4gICAgICAgIGxldCByYW5kb21OdW0gPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbGV0IGxvb3B5ID0gbG9vcHlMaXN0W3JhbmRvbU51bV07XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblxuICAgICAgICAvLyB0aGlzLmhpZGVMb29weShsb29weSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBsb29weS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1VwXCIpO1xuICAgICAgICB9LDEwMDApO1xuICAgIH1cblxuICAgIC8vIGhpZGVMb29weShlbGUpe1xuICAgIC8vICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAvLyAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1VwXCIpO1xuICAgIC8vICAgICB9LDMwMDApO1xuICAgIC8vIH1cblxuICAgIHRpbWVyKCl7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MLnNsaWNlKDAsMikpO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgPjApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lIC09IDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLmlubmVyVGV4dCA9IGN1cnJlbnRUaW1lLnRvU3RyaW5nKCkrXCIgc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJnYW1lU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudEhvbGUiLCJyZXN0VGltZSIsInN0YXJ0R2FtZSIsImN1cnJlbnRTY29yZSIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInNob3dMb29weSIsImNsaWNrTG9vcHkiLCJsb29weUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsImlubmVyVGV4dCIsInRvU3RyaW5nIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibG9vcHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiTnVtYmVyIiwiaW5uZXJIVE1MIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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