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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.gameStart = document.getElementById(\"start\");\n    this.currentHole = 0; //array to hold the holes current having loopy;\n    this.score = document.getElementById(\"score\");\n    this.restTime = document.getElementById(\"time\");\n    // this.addEventListener(\"click\", this.clickHole);\n    // this.clickHandler = this.clickHandler.bind(this);\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    this.gameStart.addEventListener(\"click\", function () {\n      alert(\"u click start!\");\n    });\n    // this.showLoopy();\n    setInterval(this.showLoopy, 2000);\n    this.clickHole(currentScore);\n  }\n  //     setRandomLoopy(params) {\n  //         let loopy = document.\n  //     }\n\n  clickHole(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", function () {\n        alert(\"click loopy!\");\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n\n    // document.getElementById(\"score\").innerText = score.toString();\n  }\n\n  //function to get random number between 0-5, for select random hole\n  // getRandomHole(){\n  //     return Math.floor(Math.random()*6)\n  // };\n\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 3000);\n  }\n\n  // hideLoopy(ele){\n  //     setTimeout(function(){\n  //         ele.classList.add(\"hidden\");\n  //         ele.classList.remove(\"showUp\");\n  //     },3000);\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVdBLENBQUEsRUFBRTtJQUNULElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDakQsSUFBSSxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDN0MsSUFBSSxDQUFDRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMvQztJQUNBO0lBQ0EsSUFBSSxDQUFDSSxTQUFTLENBQUMsQ0FBQztFQUNwQjtFQUdBQSxTQUFTQSxDQUFBLEVBQUU7SUFDUCxJQUFJQyxZQUFZLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7TUFBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQzdFO0lBQ0FDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDakMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFlBQVksQ0FBQztFQUNoQztFQUNKO0VBQ0E7RUFDQTs7RUFFSUssU0FBU0EsQ0FBQ0wsWUFBWSxFQUFDO0lBQ25CLElBQUlNLFNBQVMsR0FBR1osUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDbkRELFNBQVMsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLElBQUU7TUFDbkJBLEdBQUcsQ0FBQ1IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVU7UUFDcENDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDckJGLFlBQVksSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0gsS0FBSyxDQUFDYSxTQUFTLEdBQUdWLFlBQVksQ0FBQ1csUUFBUSxDQUFDLENBQUM7TUFFbEQsQ0FDSixDQUFDO0lBQUEsQ0FBQyxDQUFDOztJQUVDO0VBRVI7O0VBRUo7RUFDSTtFQUNBO0VBQ0E7O0VBRUFQLFNBQVNBLENBQUEsRUFBRTtJQUNQLElBQUlRLFNBQVMsR0FBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBSVQsU0FBUyxHQUFHWixRQUFRLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuRCxJQUFJUyxLQUFLLEdBQUdWLFNBQVMsQ0FBQ00sU0FBUyxDQUFDO0lBQ2hDSSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUM3QkYsS0FBSyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0lBR2hDO0lBQ0FDLFVBQVUsQ0FBQyxZQUFVO01BQ2pCSixLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM3QkYsS0FBSyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQyxFQUFDLElBQUksQ0FBQztFQUNYOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKOztBQUVBLCtEQUFlNUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SG9sZSA9IDA7Ly9hcnJheSB0byBob2xkIHRoZSBob2xlcyBjdXJyZW50IGhhdmluZyBsb29weTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgICAgIHRoaXMucmVzdFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIik7XG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2tIb2xlKTtcbiAgICAgICAgLy8gdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIGxldCBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXthbGVydChcInUgY2xpY2sgc3RhcnQhXCIpfSk7XG4gICAgICAgIC8vIHRoaXMuc2hvd0xvb3B5KCk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuc2hvd0xvb3B5LCAyMDAwKTtcbiAgICAgICAgdGhpcy5jbGlja0hvbGUoY3VycmVudFNjb3JlKTtcbiAgICB9XG4vLyAgICAgc2V0UmFuZG9tTG9vcHkocGFyYW1zKSB7XG4vLyAgICAgICAgIGxldCBsb29weSA9IGRvY3VtZW50LlxuLy8gICAgIH1cblxuICAgIGNsaWNrSG9sZShjdXJyZW50U2NvcmUpe1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbG9vcHlMaXN0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjbGljayBsb29weSFcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBjdXJyZW50U2NvcmUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApfSk7XG5cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIikuaW5uZXJUZXh0ID0gc2NvcmUudG9TdHJpbmcoKTtcblxuICAgIH1cblxuLy9mdW5jdGlvbiB0byBnZXQgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAtNSwgZm9yIHNlbGVjdCByYW5kb20gaG9sZVxuICAgIC8vIGdldFJhbmRvbUhvbGUoKXtcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KVxuICAgIC8vIH07XG5cbiAgICBzaG93TG9vcHkoKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsZXQgbG9vcHkgPSBsb29weUxpc3RbcmFuZG9tTnVtXTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGlkZUxvb3B5KGxvb3B5KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgICAgIH0sMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gaGlkZUxvb3B5KGVsZSl7XG4gICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIC8vICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgLy8gICAgIH0sMzAwMCk7XG4gICAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ2FtZVN0YXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRIb2xlIiwic2NvcmUiLCJyZXN0VGltZSIsInN0YXJ0R2FtZSIsImN1cnJlbnRTY29yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsInNldEludGVydmFsIiwic2hvd0xvb3B5IiwiY2xpY2tIb2xlIiwibG9vcHlMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGUiLCJpbm5lclRleHQiLCJ0b1N0cmluZyIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvb3B5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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