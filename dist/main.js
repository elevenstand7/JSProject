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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.gameOver = false;\n    this.timer;\n    this.loopyState;\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    this.gameStart.addEventListener(\"click\", () => {\n      console.log(\"Game Start!\");\n      if (this.timer) clearInterval(this.timer);\n      this.countDown();\n      this.loopyState = setInterval(this.showLoopy, 2000);\n      this.clickLoopy(currentScore);\n    });\n  }\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        console.log('click loopy!');\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n  countDown() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    this.timer = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime--;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        this.gameOver = true;\n        console.log(\"timer\");\n        clearInterval(this.timer);\n        clearInterval(this.loopyState);\n      }\n    }, 1000);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsR0FBR1csV0FBVyxDQUFDVixRQUFRLENBQUMsQ0FBQyxHQUFFLEdBQUc7TUFDekQsQ0FBQyxNQUFJO1FBQ0csSUFBSSxDQUFDbEIsUUFBUSxHQUFHLElBQUk7UUFDcEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNwQkMsYUFBYSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDO1FBQ3pCTyxhQUFhLENBQUMsSUFBSSxDQUFDTixVQUFVLENBQUM7TUFDdEM7SUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1o7QUFHSjtBQUVBLCtEQUFlVCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuICAgICAgICB0aGlzLnJlc3RUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuICAgICAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyO1xuICAgICAgICB0aGlzLmxvb3B5U3RhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgU3RhcnQhXCIpO1xuICAgICAgICAgICBpZih0aGlzLnRpbWVyKSBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd24oKTtcbiAgICAgICAgICAgIHRoaXMubG9vcHlTdGF0ZSA9IHNldEludGVydmFsKHRoaXMuc2hvd0xvb3B5LCAyMDAwKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tMb29weShjdXJyZW50U2NvcmUpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrTG9vcHkoY3VycmVudFNjb3JlKXtcbiAgICAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgICAgIGxvb3B5TGlzdC5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiY2xpY2sgbG9vcHkhXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBsb29weSEnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGN1cnJlbnRTY29yZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICl9KTtcbiAgICB9XG5cbiAgICBzaG93TG9vcHkoKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsZXQgbG9vcHkgPSBsb29weUxpc3RbcmFuZG9tTnVtXTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGlkZUxvb3B5KGxvb3B5KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgICAgIH0sMTAwMCk7XG4gICAgfVxuXG4gICAgY291bnREb3duKCl7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IE51bWJlcih0aGlzLnJlc3RUaW1lLmlubmVySFRNTC5zbGljZSgwLDIpKTtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgLS07XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0VGltZS5pbm5lclRleHQgPSBjdXJyZW50VGltZS50b1N0cmluZygpICtcInNcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3B5U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImdhbWVTdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXN0VGltZSIsInNjb3JlIiwiZ2FtZU92ZXIiLCJ0aW1lciIsImxvb3B5U3RhdGUiLCJzdGFydEdhbWUiLCJjdXJyZW50U2NvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJjb3VudERvd24iLCJzZXRJbnRlcnZhbCIsInNob3dMb29weSIsImNsaWNrTG9vcHkiLCJsb29weUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsImlubmVyVGV4dCIsInRvU3RyaW5nIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibG9vcHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY3VycmVudFRpbWUiLCJOdW1iZXIiLCJpbm5lckhUTUwiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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