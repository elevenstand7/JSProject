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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.startGame();\n    this.gameOver = false;\n    this.timer;\n    this.loopyState;\n  }\n  startGame() {\n    let currentScore = 0;\n    this.gameStart.addEventListener(\"click\", () => {\n      console.log(\"Game Start!\");\n      if (this.timer) clearInterval(this.timer);\n      this.countDown();\n      this.loopyState = setInterval(this.showLoopy, 2000);\n      this.clickLoopy(currentScore);\n    });\n\n    // this.timer();\n    // setInterval(this.showLoopy, 2000);\n    // this.clickLoopy(currentScore);\n    // alert(\"Game over!\")\n  }\n\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        console.log('click loopy!');\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n  countDown() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    this.timer = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime--;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        this.gameOver = true;\n        console.log(\"timer\");\n        clearInterval(this.timer);\n        clearInterval(this.loopyState);\n      }\n    }, 1000);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDOUIsUUFBUSxDQUFDbUIsU0FBUyxHQUFHVyxXQUFXLENBQUNWLFFBQVEsQ0FBQyxDQUFDLEdBQUUsR0FBRztNQUN6RCxDQUFDLE1BQUk7UUFDRyxJQUFJLENBQUNqQixRQUFRLEdBQUcsSUFBSTtRQUNwQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3BCQyxhQUFhLENBQUMsSUFBSSxDQUFDTixLQUFLLENBQUM7UUFDekJNLGFBQWEsQ0FBQyxJQUFJLENBQUNMLFVBQVUsQ0FBQztNQUN0QztJQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWjtBQUdKO0FBRUEsK0RBQWVWLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgICAgIHRoaXMucmVzdFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIik7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXI7XG4gICAgICAgIHRoaXMubG9vcHlTdGF0ZTtcbiAgICB9XG5cblxuICAgIHN0YXJ0R2FtZSgpe1xuICAgICAgICBsZXQgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBTdGFydCFcIik7XG4gICAgICAgICAgIGlmKHRoaXMudGltZXIpIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bigpO1xuICAgICAgICAgICAgdGhpcy5sb29weVN0YXRlID0gc2V0SW50ZXJ2YWwodGhpcy5zaG93TG9vcHksIDIwMDApO1xuICAgICAgICAgICAgdGhpcy5jbGlja0xvb3B5KGN1cnJlbnRTY29yZSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy50aW1lcigpO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCh0aGlzLnNob3dMb29weSwgMjAwMCk7XG4gICAgICAgIC8vIHRoaXMuY2xpY2tMb29weShjdXJyZW50U2NvcmUpO1xuICAgICAgICAvLyBhbGVydChcIkdhbWUgb3ZlciFcIilcblxuXG4gICAgfVxuXG4gICAgY2xpY2tMb29weShjdXJyZW50U2NvcmUpe1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbG9vcHlMaXN0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJjbGljayBsb29weSFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIGxvb3B5IScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gY3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKX0pO1xuICAgIH1cblxuXG4gICAgc2hvd0xvb3B5KCl7XG4gICAgICAgIGxldCByYW5kb21OdW0gPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbGV0IGxvb3B5ID0gbG9vcHlMaXN0W3JhbmRvbU51bV07XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblxuICAgICAgICAvLyB0aGlzLmhpZGVMb29weShsb29weSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBsb29weS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1VwXCIpO1xuICAgICAgICB9LDEwMDApO1xuICAgIH1cblxuXG5cbiAgICBjb3VudERvd24oKXtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gTnVtYmVyKHRoaXMucmVzdFRpbWUuaW5uZXJIVE1MLnNsaWNlKDAsMikpO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lICE9PSAwKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSAtLTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RUaW1lLmlubmVyVGV4dCA9IGN1cnJlbnRUaW1lLnRvU3RyaW5nKCkgK1wic1wiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubG9vcHlTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ2FtZVN0YXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc3RUaW1lIiwic2NvcmUiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsInRpbWVyIiwibG9vcHlTdGF0ZSIsImN1cnJlbnRTY29yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImNvdW50RG93biIsInNldEludGVydmFsIiwic2hvd0xvb3B5IiwiY2xpY2tMb29weSIsImxvb3B5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwiaW5uZXJUZXh0IiwidG9TdHJpbmciLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb29weSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50VGltZSIsIk51bWJlciIsImlubmVySFRNTCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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