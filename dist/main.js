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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import View from \"./scripts/game-view\";\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const game = new Game();\n//     const rootEl = document.querySelector(\".game-board\");\n//     new View(game, rootEl);\n//   });\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"hello world!\");\n  let introPage = document.getElementById(\"game-start\");\n  introPage.showModal();\n  let gameStart = document.getElementById(\"start\");\n  gameStart.addEventListener(\"click\", () => {\n    introPage.close();\n    console.log(\"Game Start!\");\n    const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    // const gameStart = document.getElementById(\"start\");\n    // gameStart.addEventListener(\"click\", function(){alert(\"u click start!\")});\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVTtFQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsSUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDckRELFNBQVMsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7RUFDckIsSUFBSUMsU0FBUyxHQUFHUCxRQUFRLENBQUNLLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDNUNFLFNBQVMsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7SUFDeENHLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7SUFDakJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxQixNQUFNTSxJQUFJLEdBQUcsSUFBSVYscURBQUksQ0FBQyxDQUFDO0lBQzNCO0lBQ0E7RUFDSixDQUNBLENBQUM7QUFBQSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ib2FyZFwiKTtcbi8vICAgICBuZXcgVmlldyhnYW1lLCByb290RWwpO1xuLy8gICB9KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixcbmZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCFcIik7XG4gICAgbGV0IGludHJvUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zdGFydFwiKTtcbiAgICBpbnRyb1BhZ2Uuc2hvd01vZGFsKCk7XG4gICAgbGV0IGdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgICAgIGdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgaW50cm9QYWdlLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBTdGFydCFcIik7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIC8vIGNvbnN0IGdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgLy8gZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2FsZXJ0KFwidSBjbGljayBzdGFydCFcIil9KTtcbn1cbil9KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImludHJvUGFnZSIsImdldEVsZW1lbnRCeUlkIiwic2hvd01vZGFsIiwiZ2FtZVN0YXJ0IiwiY2xvc2UiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    // this.gameStart = document.getElementById(\"start\");\n    // this.gameStop= document.getElementById(\"stop\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.gameOver = false;\n    this.timer;\n    this.loopyState;\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    // this.gameStart.addEventListener(\"click\", ()=>{\n    //    console.log(\"Game Start!\");\n    if (this.timer) clearInterval(this.timer);\n    this.countDown();\n    this.loopyState = setInterval(this.showLoopy, 2000);\n    this.clickLoopy(currentScore);\n\n    // });\n  }\n\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        console.log('click loopy!');\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n  countDown() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    this.timer = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime--;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        this.gameOver = true;\n        console.log(\"timer\");\n        clearInterval(this.timer);\n        clearInterval(this.loopyState);\n      }\n    }, 1000);\n  }\n  stopGame() {\n    this.gameStop.addEventListener(\"click\", () => {\n      alert(\"stop\");\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDO1FBQ3pCSSxhQUFhLENBQUMsSUFBSSxDQUFDSCxVQUFVLENBQUM7TUFDdEM7SUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1o7RUFFQThCLFFBQVFBLENBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ0MsUUFBUSxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7TUFDeENvQixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQ0osQ0FBQztFQUFBO0FBRUw7QUFFQSwrREFBZXhDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLmdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgICAgIC8vIHRoaXMuZ2FtZVN0b3A9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcFwiKTtcbiAgICAgICAgdGhpcy5yZXN0VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcbiAgICAgICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lcjtcbiAgICAgICAgdGhpcy5sb29weVN0YXRlO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIGxldCBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICAvLyB0aGlzLmdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJHYW1lIFN0YXJ0IVwiKTtcbiAgICAgICAgaWYodGhpcy50aW1lcikgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5jb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5sb29weVN0YXRlID0gc2V0SW50ZXJ2YWwodGhpcy5zaG93TG9vcHksIDIwMDApO1xuICAgICAgICB0aGlzLmNsaWNrTG9vcHkoY3VycmVudFNjb3JlKTtcblxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBjbGlja0xvb3B5KGN1cnJlbnRTY29yZSl7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsb29weUxpc3QuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICAvLyBhbGVydChcImNsaWNrIGxvb3B5IVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgbG9vcHkhJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBjdXJyZW50U2NvcmUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApfSk7XG4gICAgfVxuXG4gICAgc2hvd0xvb3B5KCl7XG4gICAgICAgIGxldCByYW5kb21OdW0gPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICBsZXQgbG9vcHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb29weVwiKTtcbiAgICAgICAgbGV0IGxvb3B5ID0gbG9vcHlMaXN0W3JhbmRvbU51bV07XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJzaG93VXBcIik7XG4gICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cblxuICAgICAgICAvLyB0aGlzLmhpZGVMb29weShsb29weSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBsb29weS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1VwXCIpO1xuICAgICAgICB9LDEwMDApO1xuICAgIH1cblxuICAgIGNvdW50RG93bigpe1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBOdW1iZXIodGhpcy5yZXN0VGltZS5pbm5lckhUTUwuc2xpY2UoMCwyKSk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgIT09IDApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lIC0tO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdFRpbWUuaW5uZXJUZXh0ID0gY3VycmVudFRpbWUudG9TdHJpbmcoKSArXCJzXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29weVN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RvcEdhbWUoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGFsZXJ0KFwic3RvcFwiKTtcbiAgICAgICAgfVxuICAgICl9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwicmVzdFRpbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2NvcmUiLCJnYW1lT3ZlciIsInRpbWVyIiwibG9vcHlTdGF0ZSIsInN0YXJ0R2FtZSIsImN1cnJlbnRTY29yZSIsImNsZWFySW50ZXJ2YWwiLCJjb3VudERvd24iLCJzZXRJbnRlcnZhbCIsInNob3dMb29weSIsImNsaWNrTG9vcHkiLCJsb29weUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwidG9TdHJpbmciLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb29weSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50VGltZSIsIk51bWJlciIsImlubmVySFRNTCIsInNsaWNlIiwic3RvcEdhbWUiLCJnYW1lU3RvcCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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