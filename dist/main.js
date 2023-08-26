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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import View from \"./scripts/game-view\";\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const game = new Game();\n//     const rootEl = document.querySelector(\".game-board\");\n//     new View(game, rootEl);\n//   });\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"hello world!\");\n  let introPage = document.getElementById(\"game-start\");\n  introPage.showModal();\n  let gameStart = document.getElementById(\"start\");\n  gameStart.addEventListener(\"click\", () => {\n    introPage.close();\n    console.log(\"Game Start!\");\n    const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    // if(game.restTime === 0){\n    //     let endPage = document.getElementById(\"game-end\");\n    //     endPage.showModal();\n    // }\n    // const gameStart = document.getElementById(\"start\");\n    // gameStart.addEventListener(\"click\", function(){alert(\"u click start!\")});\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVTtFQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDM0IsSUFBSUMsU0FBUyxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDckRELFNBQVMsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7RUFDckIsSUFBSUMsU0FBUyxHQUFHUCxRQUFRLENBQUNLLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDNUNFLFNBQVMsQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7SUFDeENHLFNBQVMsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7SUFDakJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxQixNQUFNTSxJQUFJLEdBQUcsSUFBSVYscURBQUksQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0E7SUFDQTtJQUNBO0lBQ0o7SUFDQTtFQUNKLENBQ0EsQ0FBQztBQUFBLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IFZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lLXZpZXdcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4vLyAgICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWJvYXJkXCIpO1xuLy8gICAgIG5ldyBWaWV3KGdhbWUsIHJvb3RFbCk7XG4vLyAgIH0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFxuZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKTtcbiAgICBsZXQgaW50cm9QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXN0YXJ0XCIpO1xuICAgIGludHJvUGFnZS5zaG93TW9kYWwoKTtcbiAgICBsZXQgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpbnRyb1BhZ2UuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIFN0YXJ0IVwiKTtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIC8vIGlmKGdhbWUucmVzdFRpbWUgPT09IDApe1xuICAgICAgICAvLyAgICAgbGV0IGVuZFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtZW5kXCIpO1xuICAgICAgICAvLyAgICAgZW5kUGFnZS5zaG93TW9kYWwoKTtcbiAgICAgICAgLy8gfVxuICAgIC8vIGNvbnN0IGdhbWVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgLy8gZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2FsZXJ0KFwidSBjbGljayBzdGFydCFcIil9KTtcbn1cbil9KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImludHJvUGFnZSIsImdldEVsZW1lbnRCeUlkIiwic2hvd01vZGFsIiwiZ2FtZVN0YXJ0IiwiY2xvc2UiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    // this.gameStart = document.getElementById(\"start\");\n    // this.gameStop= document.getElementById(\"stop\");\n    this.restTime = document.getElementById(\"time\");\n    this.score = document.getElementById(\"score\");\n    this.gameOver = false;\n    this.timer;\n    this.loopyState;\n    this.startGame();\n  }\n  startGame() {\n    let currentScore = 0;\n    // this.gameStart.addEventListener(\"click\", ()=>{\n    //    console.log(\"Game Start!\");\n    if (this.timer) clearInterval(this.timer);\n    this.countDown();\n    this.loopyState = setInterval(this.showLoopy, 2000);\n    this.clickLoopy(currentScore);\n\n    // });\n  }\n\n  clickLoopy(currentScore) {\n    let loopyList = document.querySelectorAll(\".loopy\");\n    loopyList.forEach(ele => {\n      ele.addEventListener(\"click\", () => {\n        // alert(\"click loopy!\");\n        console.log('click loopy!');\n        currentScore += 1;\n        this.score.innerText = currentScore.toString();\n      });\n    });\n  }\n  showLoopy() {\n    let randomNum = Math.floor(Math.random() * 6);\n    let loopyList = document.querySelectorAll(\".loopy\");\n    let loopy = loopyList[randomNum];\n    loopy.classList.add(\"showUp\");\n    loopy.classList.remove(\"hidden\");\n\n    // this.hideLoopy(loopy);\n    setTimeout(function () {\n      loopy.classList.add(\"hidden\");\n      loopy.classList.remove(\"showUp\");\n    }, 1000);\n  }\n  countDown() {\n    let currentTime = Number(this.restTime.innerHTML.slice(0, 2));\n    this.timer = setInterval(() => {\n      if (currentTime !== 0) {\n        currentTime--;\n        this.restTime.innerText = currentTime.toString() + \"s\";\n      } else {\n        this.gameOver = true;\n        console.log(\"timer\");\n        clearInterval(this.timer);\n        clearInterval(this.loopyState);\n        let endPage = document.getElementById(\"game-end\");\n        document.getElementById(\"result\").innerHTML = `Your score is ${this.score.innerText}!`;\n        // const p =document.createElement(\"p\");\n        // p.innerText =  this.score.innerText;\n        // res.append(p);\n\n        endPage.showModal();\n      }\n    }, 1000);\n  }\n  stopGame() {\n    this.gameStop.addEventListener(\"click\", () => {\n      alert(\"stop\");\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDO1FBQ3pCSSxhQUFhLENBQUMsSUFBSSxDQUFDSCxVQUFVLENBQUM7UUFDOUIsSUFBSThCLE9BQU8sR0FBR25DLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztRQUNqREQsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNnQyxTQUFTLEdBQUksaUJBQWdCLElBQUksQ0FBQy9CLEtBQUssQ0FBQ2tCLFNBQVUsR0FBRTtRQUN0RjtRQUNBO1FBQ0E7O1FBRUFlLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUM7TUFDM0I7SUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1o7RUFFQUMsUUFBUUEsQ0FBQSxFQUFFO0lBQ04sSUFBSSxDQUFDQyxRQUFRLENBQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtNQUN4Q3NCLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FDSixDQUFDO0VBQUE7QUFFTDtBQUVBLCtEQUFlMUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgLy8gdGhpcy5nYW1lU3RvcD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9wXCIpO1xuICAgICAgICB0aGlzLnJlc3RUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuICAgICAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyO1xuICAgICAgICB0aGlzLmxvb3B5U3RhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG5cbiAgICBzdGFydEdhbWUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkdhbWUgU3RhcnQhXCIpO1xuICAgICAgICBpZih0aGlzLnRpbWVyKSBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmNvdW50RG93bigpO1xuICAgICAgICB0aGlzLmxvb3B5U3RhdGUgPSBzZXRJbnRlcnZhbCh0aGlzLnNob3dMb29weSwgMjAwMCk7XG4gICAgICAgIHRoaXMuY2xpY2tMb29weShjdXJyZW50U2NvcmUpO1xuXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGNsaWNrTG9vcHkoY3VycmVudFNjb3JlKXtcbiAgICAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgICAgIGxvb3B5TGlzdC5mb3JFYWNoKGVsZT0+e1xuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiY2xpY2sgbG9vcHkhXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBsb29weSEnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGN1cnJlbnRTY29yZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICl9KTtcbiAgICB9XG5cbiAgICBzaG93TG9vcHkoKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIGxldCBsb29weUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3B5XCIpO1xuICAgICAgICBsZXQgbG9vcHkgPSBsb29weUxpc3RbcmFuZG9tTnVtXTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcbiAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXG4gICAgICAgIC8vIHRoaXMuaGlkZUxvb3B5KGxvb3B5KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGxvb3B5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgICAgIH0sMTAwMCk7XG4gICAgfVxuXG4gICAgY291bnREb3duKCl7XG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IE51bWJlcih0aGlzLnJlc3RUaW1lLmlubmVySFRNTC5zbGljZSgwLDIpKTtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgLS07XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0VGltZS5pbm5lclRleHQgPSBjdXJyZW50VGltZS50b1N0cmluZygpICtcInNcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3B5U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1lbmRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLmlubmVySFRNTCA9IGBZb3VyIHNjb3JlIGlzICR7dGhpcy5zY29yZS5pbm5lclRleHR9IWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHAgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwLmlubmVyVGV4dCA9ICB0aGlzLnNjb3JlLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgICAgICAgICBlbmRQYWdlLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBzdG9wR2FtZSgpe1xuICAgICAgICB0aGlzLmdhbWVTdG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgYWxlcnQoXCJzdG9wXCIpO1xuICAgICAgICB9XG4gICAgKX07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJyZXN0VGltZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY29yZSIsImdhbWVPdmVyIiwidGltZXIiLCJsb29weVN0YXRlIiwic3RhcnRHYW1lIiwiY3VycmVudFNjb3JlIiwiY2xlYXJJbnRlcnZhbCIsImNvdW50RG93biIsInNldEludGVydmFsIiwic2hvd0xvb3B5IiwiY2xpY2tMb29weSIsImxvb3B5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJpbm5lclRleHQiLCJ0b1N0cmluZyIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvb3B5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0VGltZW91dCIsImN1cnJlbnRUaW1lIiwiTnVtYmVyIiwiaW5uZXJIVE1MIiwic2xpY2UiLCJlbmRQYWdlIiwic2hvd01vZGFsIiwic3RvcEdhbWUiLCJnYW1lU3RvcCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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