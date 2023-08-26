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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    // this.showLoopy();\n    this.timer();\n    setInterval(this.showLoopy, 2000);\n    this.clickLoopy(currentScore);\n    // alert(\"Game over!\")\n  }\n\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        console.log('click loopy!');\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n\n  //function to get random number between 0-5, for select random hole\n  // getRandomHole(){\n  //     return Math.floor(Math.random()*6)\n  // };\n\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n\n  // hideLoopy(ele){\n  //     setTimeout(function(){\n  //         ele.classList.add(\"hidden\");\n  //         ele.classList.remove(\"showUp\");\n  //     },3000);\n  // }\n\n  timer() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    let countDown = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime -= 1;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        // alert(\"Game over!\");\n        // clearInterval(countDown);\n      }\n    }, 1000);\n  }\n  gameOver() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsUUFBUUEsQ0FBQSxFQUFFLENBRVY7QUFFSjtBQUVBLCtEQUFlckMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgdGhpcy5yZXN0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2FsZXJ0KFwidSBjbGljayBzdGFydCFcIil9KTtcbiAgICAgICAgLy8gdGhpcy5zaG93TG9vcHkoKTtcbiAgICAgICAgdGhpcy50aW1lcigpO1xuICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLnNob3dMb29weSwgMjAwMCk7XG4gICAgICAgIHRoaXMuY2xpY2tMb29weShjdXJyZW50U2NvcmUpO1xuICAgICAgICAvLyBhbGVydChcIkdhbWUgb3ZlciFcIilcblxuXG4gICAgfVxuXG4gICAgY2xpY2tMb29weShjdXJyZW50U2NvcmUpe1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbG9vcHlMaXN0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJjbGljayBsb29weSFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGxvb3B5IScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gY3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKX0pO1xuICAgIH1cblxuLy9mdW5jdGlvbiB0byBnZXQgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAtNSwgZm9yIHNlbGVjdCByYW5kb20gaG9sZVxuICAgIC8vIGdldFJhbmRvbUhvbGUoKXtcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuICAgIC8vIH07XG5cbiAgICBzaG93TG9vcHkoKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsZXQgbG9vcHkgPSBsb29weUxpc3RbcmFuZG9tTnVtXTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGlkZUxvb3B5KGxvb3B5KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgICAgIH0sMTAwMCk7XG4gICAgfVxuXG4gICAgLy8gaGlkZUxvb3B5KGVsZSl7XG4gICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIC8vICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgLy8gICAgIH0sMzAwMCk7XG4gICAgLy8gfVxuXG4gICAgdGltZXIoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gTnVtYmVyKHRoaXMucmVzdFRpbWUuaW5uZXJIVE1MLnNsaWNlKDAsMikpO1xuICAgICAgICBsZXQgY291bnREb3duID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lICE9PSAwKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSAtPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdFRpbWUuaW5uZXJUZXh0ID0gY3VycmVudFRpbWUudG9TdHJpbmcoKSArXCJzXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBhbGVydChcIkdhbWUgb3ZlciFcIik7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChjb3VudERvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ2FtZVN0YXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc3RUaW1lIiwic2NvcmUiLCJzdGFydEdhbWUiLCJjdXJyZW50U2NvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJ0aW1lciIsInNldEludGVydmFsIiwic2hvd0xvb3B5IiwiY2xpY2tMb29weSIsImxvb3B5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsInRvU3RyaW5nIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibG9vcHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY3VycmVudFRpbWUiLCJOdW1iZXIiLCJpbm5lckhUTUwiLCJzbGljZSIsImNvdW50RG93biIsImdhbWVPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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