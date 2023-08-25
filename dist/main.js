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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    // this.showLoopy();\n    this.timer();\n    setInterval(this.showLoopy, 2000);\n    this.clickLoopy(currentScore);\n    // alert(\"Game over!\")\n  }\n\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n\n  //function to get random number between 0-5, for select random hole\n  // getRandomHole(){\n  //     return Math.floor(Math.random()*6)\n  // };\n\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n\n  // hideLoopy(ele){\n  //     setTimeout(function(){\n  //         ele.classList.add(\"hidden\");\n  //         ele.classList.remove(\"showUp\");\n  //     },3000);\n  // }\n\n  timer() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    let countDown = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime -= 1;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        // alert(\"Game over!\");\n        // clearInterval(countDown);\n      }\n    }, 1000);\n  }\n  gameOver() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgdGhpcy5yZXN0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2FsZXJ0KFwidSBjbGljayBzdGFydCFcIil9KTtcbiAgICAgICAgLy8gdGhpcy5zaG93TG9vcHkoKTtcbiAgICAgICAgdGhpcy50aW1lcigpO1xuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnNob3dMb29weSwgMjAwMCk7XG4gICAgICAgIHRoaXMuY2xpY2tMb29weShjdXJyZW50U2NvcmUpO1xuICAgICAgICAvLyBhbGVydChcIkdhbWUgb3ZlciFcIilcblxuXG4gICAgfVxuXG4gICAgY2xpY2tMb29weShjdXJyZW50U2NvcmUpe1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbG9vcHlMaXN0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJjbGljayBsb29weSFcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBjdXJyZW50U2NvcmUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApfSk7XG4gICAgfVxuXG4vL2Z1bmN0aW9uIHRvIGdldCByYW5kb20gbnVtYmVyIGJldHdlZW4gMC01LCBmb3Igc2VsZWN0IHJhbmRvbSBob2xlXG4gICAgLy8gZ2V0UmFuZG9tSG9sZSgpe1xuICAgIC8vICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpXG4gICAgLy8gfTtcblxuICAgIHNob3dMb29weSgpe1xuICAgICAgICBsZXQgcmFuZG9tTnVtID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KTtcbiAgICAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgICAgIGxldCBsb29weSA9IGxvb3B5TGlzdFtyYW5kb21OdW1dO1xuICAgICAgICBsb29weS5jbGFzc0xpc3QuYWRkKFwic2hvd1VwXCIpO1xuICAgICAgICBsb29weS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5oaWRlTG9vcHkobG9vcHkpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsb29weS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcInNob3dVcFwiKTtcbiAgICAgICAgfSwxMDAwKTtcbiAgICB9XG5cbiAgICAvLyBoaWRlTG9vcHkoZWxlKXtcbiAgICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIC8vICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgLy8gICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dVcFwiKTtcbiAgICAvLyAgICAgfSwzMDAwKTtcbiAgICAvLyB9XG5cbiAgICB0aW1lcigpe1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBOdW1iZXIodGhpcy5yZXN0VGltZS5pbm5lckhUTUwuc2xpY2UoMCwyKSk7XG4gICAgICAgIGxldCBjb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgIT09IDApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lIC09IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0VGltZS5pbm5lclRleHQgPSBjdXJyZW50VGltZS50b1N0cmluZygpICtcInNcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiR2FtZSBvdmVyIVwiKTtcbiAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKGNvdW50RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJnYW1lU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzdFRpbWUiLCJzY29yZSIsInN0YXJ0R2FtZSIsImN1cnJlbnRTY29yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzaG93TG9vcHkiLCJjbGlja0xvb3B5IiwibG9vcHlMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGUiLCJpbm5lclRleHQiLCJ0b1N0cmluZyIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvb3B5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0VGltZW91dCIsImN1cnJlbnRUaW1lIiwiTnVtYmVyIiwiaW5uZXJIVE1MIiwic2xpY2UiLCJjb3VudERvd24iLCJnYW1lT3ZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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