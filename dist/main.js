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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const title = document.querySelector(\"h2\");\n  title.innerHTML = title.textContent.replace(/\\S/g, \"<span class='title-char'>$&</span>\");\n  document.querySelectorAll(\".title-char\").forEach((ele, idx) => {\n    ele.style.setProperty('--delay', `${idx * 0.1}s`);\n  });\n  let introPage = document.getElementById(\"game-start\");\n  introPage.showModal();\n  const gameScore = document.getElementById(\"score\");\n  const gameTime = document.getElementById(\"time\");\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameScore, gameTime);\n  let gameStart = document.getElementById(\"start\");\n  gameStart.addEventListener(\"click\", () => {\n    introPage.close();\n    console.log(\"Game Start!\");\n    game.start();\n  });\n  let reStart = document.getElementById(\"restart\");\n  reStart.addEventListener(\"click\", () => {\n    let endPage = document.getElementById(\"game-end\");\n    endPage.close();\n    game.reStart();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDa0M7QUFHbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQzVDLFlBQVU7RUFDTixNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLElBQUksQ0FBQztFQUMxQ0QsS0FBSyxDQUFDRSxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxDQUFDQyxPQUFPLENBQUMsS0FBSyxFQUFFLG9DQUFvQyxDQUFDO0VBRXhGTixRQUFRLENBQUNPLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDQyxPQUFPLENBQzVDLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxLQUFHO0lBQ1JELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxXQUFXLENBQUMsU0FBUyxFQUFHLEdBQUVGLEdBQUcsR0FBRSxHQUFJLEdBQUUsQ0FBQztFQUNwRCxDQUNKLENBQUM7RUFHRCxJQUFJRyxTQUFTLEdBQUdiLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNyREQsU0FBUyxDQUFDRSxTQUFTLENBQUMsQ0FBQztFQUNyQixNQUFNQyxTQUFTLEdBQUdoQixRQUFRLENBQUNjLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDbEQsTUFBTUcsUUFBUSxHQUFHakIsUUFBUSxDQUFDYyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQ2hELE1BQU1JLElBQUksR0FBRyxJQUFJbkIscURBQUksQ0FBQ2lCLFNBQVMsRUFBRUMsUUFBUSxDQUFDO0VBQzFDLElBQUlFLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ2MsY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUVoREssU0FBUyxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUk7SUFDcENZLFNBQVMsQ0FBQ08sS0FBSyxDQUFDLENBQUM7SUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxQkosSUFBSSxDQUFDSyxLQUFLLENBQUMsQ0FBQztFQUNoQixDQUFDLENBQUM7RUFFRixJQUFJQyxPQUFPLEdBQUd4QixRQUFRLENBQUNjLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFFaERVLE9BQU8sQ0FBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFJO0lBQ2xDLElBQUl3QixPQUFPLEdBQUd6QixRQUFRLENBQUNjLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDakRXLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLENBQUM7SUFDZkYsSUFBSSxDQUFDTSxPQUFPLENBQUMsQ0FBQztFQUNsQixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsXG5mdW5jdGlvbigpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlLnRleHRDb250ZW50LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSd0aXRsZS1jaGFyJz4kJjwvc3Bhbj5cIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpdGxlLWNoYXJcIikuZm9yRWFjaChcbiAgICAgICAgKGVsZSwgaWR4KT0+e1xuICAgICAgICAgICAgZWxlLnN0eWxlLnNldFByb3BlcnR5KCctLWRlbGF5JywgYCR7aWR4ICowLjF9c2ApXG4gICAgICAgIH1cbiAgICApXG5cblxuICAgIGxldCBpbnRyb1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtc3RhcnRcIik7XG4gICAgaW50cm9QYWdlLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGdhbWVTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgY29uc3QgZ2FtZVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdhbWVTY29yZSwgZ2FtZVRpbWUpO1xuICAgIGxldCBnYW1lU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuXG4gICAgZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBpbnRyb1BhZ2UuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIFN0YXJ0IVwiKTtcbiAgICAgICAgZ2FtZS5zdGFydCgpO1xuICAgIH0pO1xuXG4gICAgbGV0IHJlU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG5cbiAgICByZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBsZXQgZW5kUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1lbmRcIik7XG4gICAgICAgIGVuZFBhZ2UuY2xvc2UoKTtcbiAgICAgICAgZ2FtZS5yZVN0YXJ0KCk7XG4gICAgfSlcbn0pO1xuXG5cblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsImlkeCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJpbnRyb1BhZ2UiLCJnZXRFbGVtZW50QnlJZCIsInNob3dNb2RhbCIsImdhbWVTY29yZSIsImdhbWVUaW1lIiwiZ2FtZSIsImdhbWVTdGFydCIsImNsb3NlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwicmVTdGFydCIsImVuZFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loopy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopy */ \"./src/scripts/loopy.js\");\n\nconst backgroundMusic = new Audio('./src/audio/music.mp3');\nbackgroundMusic.addEventListener(\"ended\", () => {\n  backgroundMusic.play();\n});\nclass Game {\n  constructor(gameScore, gameTime) {\n    this.restTime = null;\n    this.score = 0;\n    this.time = 0;\n    this.loopyShowTime = 2000;\n    this.loopyList = [];\n    // this.startGame();\n    this.gameScore = document.getElementById(\"score\");\n    this.gameTime = document.getElementById(\"time\");\n    document.querySelectorAll(\".loopy\").forEach(loopy => {\n      this.loopyList.push(new _loopy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](loopy, this.updateScore.bind(this)));\n    });\n  }\n  start() {\n    document.getElementById(\"game-start\").close();\n    this.time = 10;\n    this.score = 1;\n    this.gameTime.innerText = this.time + 's';\n    this.timer = setInterval(this.countDown.bind(this), 1000);\n    this.showRandomLoopy();\n    backgroundMusic.play();\n    const musicImg = document.querySelector(\".music-img\");\n    musicImg.src = './assets/images/on.png';\n    const musicBtn = document.querySelector(\".music\");\n    const musicImageList = ['./assets/images/on.png', './assets/images/off.png'];\n    let currentImgIdx = 0;\n    musicBtn.addEventListener(\"click\", () => {\n      currentImgIdx = (currentImgIdx + 1) % musicImageList.length;\n      const nextImg = musicImageList[currentImgIdx];\n      musicImg.src = nextImg;\n      if (currentImgIdx === 1) backgroundMusic.pause();\n      if (currentImgIdx === 0) backgroundMusic.play();\n    });\n  }\n  countDown() {\n    this.time--;\n    this.gameTime.innerText = this.time + 's';\n    if (this.time !== 0) {\n      this.showRandomLoopy();\n    } else {\n      this.gameOver();\n    }\n  }\n  updateScore() {\n    this.score += 1;\n    this.gameScore.innerText = this.score;\n  }\n  showRandomLoopy() {\n    let randomLoopy = this.loopyList[Math.floor(Math.random() * this.loopyList.length)];\n    randomLoopy.show();\n    setTimeout(() => randomLoopy.hide(), 2000);\n  }\n  gameOver() {\n    clearInterval(this.timer);\n    document.getElementById(\"result\").innerHTML = `Your score is ${this.score}!`;\n    document.getElementById(\"game-end\").showModal();\n    backgroundMusic.pause();\n    backgroundMusic.currentTime = 0;\n  }\n  reStart() {\n    document.getElementById(\"game-end\").close();\n    this.start();\n  }\n\n  // constructor(gameScore, gameTime){\n  //         this.restTime = gameTime;\n  //         this.score = gameScore;\n  //         this.timer;\n  //         this.loopyState;\n  //         this.startGame();\n  // }\n\n  // startGame(){\n  //     let currentScore = 0;\n  //     let musicOn = true;\n  //     const musicBtn = document.querySelector(\".music\");\n\n  //     const musicImageList = ['./assets/images/on.png', './assets/images/off.png']\n  //     let currentImgIdx = 0;\n\n  //     if(this.timer) clearInterval(this.timer);\n\n  //     this.countDown();\n  //     this.loopyState = setInterval(this.showLoopy, 2000);\n  //     this.clickLoopy(currentScore);\n\n  //     backgroundMusic.play();\n\n  //     musicBtn.addEventListener(\"click\",()=>{\n\n  //         currentImgIdx = (currentImgIdx+1) % musicImageList.length;\n  //         const nextImg = musicImageList[currentImgIdx];\n\n  //         const musicImg = document.querySelector(\".music-img\");\n  //         musicImg.src = nextImg;\n\n  //         if(currentImgIdx === 1)  backgroundMusic.pause();\n  //         if(currentImgIdx === 0)  backgroundMusic.play();\n\n  //     });\n  // }\n\n  // clickLoopy(currentScore){\n  //     let loopyList = document.querySelectorAll(\".loopy\");\n  //     loopyList.forEach(ele=>{\n  //         ele.addEventListener(\"click\", ()=>{\n\n  //             // console.log('click loopy!');\n  //             currentScore += 1;\n  //             this.score.innerText = currentScore.toString();\n\n  //         }\n  //     )});\n  // }\n\n  // showLoopy(){\n  //     let randomNum =  Math.floor(Math.random()*6);\n  //     let loopyList = document.querySelectorAll(\".loopy\");\n  //     let loopy = loopyList[randomNum];\n  //     loopy.classList.add(\"showUp\");\n  //     loopy.classList.remove(\"hidden\");\n\n  //     // this.hideLoopy(loopy);\n  //     setTimeout(function(){\n  //         loopy.classList.add(\"hidden\");\n  //         loopy.classList.remove(\"showUp\");\n  //     },1000);\n  // }\n\n  // countDown(){\n  //     let currentTime = Number(this.restTime.innerHTML.slice(0,2));\n  //     this.timer = setInterval(()=>{\n  //         if(currentTime !== 0){\n  //             currentTime --;\n  //             this.restTime.innerText = currentTime.toString() +\"s\";\n  //         }else{\n\n  //                 clearInterval(this.timer);\n  //                 clearInterval(this.loopyState);\n\n  //                 let endPage = document.getElementById(\"game-end\");\n  //                 document.getElementById(\"result\").innerHTML = `Your score is ${this.score.innerText}!`;\n\n  //                 endPage.showModal();\n  //         }\n  //     }, 1000);\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7O0VBR0E7O0VBR0E7RUFDQTs7RUFHQTtFQUNBOztFQUdBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0FBR0o7O0FBRUEsK0RBQWVqQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb29weSBmcm9tIFwiLi9sb29weVwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL211c2ljLm1wMycpO1xuXG5iYWNrZ3JvdW5kTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsICgpPT57XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbn0pXG5cbmNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoZ2FtZVNjb3JlLCBnYW1lVGltZSl7XG4gICAgICAgIHRoaXMucmVzdFRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5sb29weVNob3dUaW1lID0gMjAwMDtcbiAgICAgICAgdGhpcy5sb29weUxpc3QgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgdGhpcy5nYW1lU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xuICAgICAgICB0aGlzLmdhbWVUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIikuZm9yRWFjaChsb29weT0+e1xuICAgICAgICAgICAgdGhpcy5sb29weUxpc3QucHVzaChuZXcgTG9vcHkobG9vcHksIHRoaXMudXBkYXRlU2NvcmUuYmluZCh0aGlzKSkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0KCl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1zdGFydFwiKS5jbG9zZSgpO1xuICAgICAgICB0aGlzLnRpbWUgPSAxMDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDE7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWUuaW5uZXJUZXh0ID0gdGhpcy50aW1lICsgJ3MnO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgIHRoaXMuc2hvd1JhbmRvbUxvb3B5KCk7XG4gICAgICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCk7XG5cbiAgICAgICAgY29uc3QgbXVzaWNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljLWltZ1wiKTtcbiAgICAgICAgbXVzaWNJbWcuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9vbi5wbmcnO1xuXG4gICAgICAgIGNvbnN0IG11c2ljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpY1wiKTtcbiAgICAgICAgY29uc3QgbXVzaWNJbWFnZUxpc3QgPSBbJy4vYXNzZXRzL2ltYWdlcy9vbi5wbmcnLCAnLi9hc3NldHMvaW1hZ2VzL29mZi5wbmcnXVxuICAgICAgICBsZXQgY3VycmVudEltZ0lkeCA9IDA7XG5cbiAgICAgICAgbXVzaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcblxuICAgICAgICAgICAgY3VycmVudEltZ0lkeCA9IChjdXJyZW50SW1nSWR4KzEpICUgbXVzaWNJbWFnZUxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgbmV4dEltZyA9IG11c2ljSW1hZ2VMaXN0W2N1cnJlbnRJbWdJZHhdO1xuXG4gICAgICAgICAgICBtdXNpY0ltZy5zcmMgPSBuZXh0SW1nO1xuXG4gICAgICAgICAgICBpZihjdXJyZW50SW1nSWR4ID09PSAxKSAgYmFja2dyb3VuZE11c2ljLnBhdXNlKCk7XG4gICAgICAgICAgICBpZihjdXJyZW50SW1nSWR4ID09PSAwKSAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb3VudERvd24oKXtcbiAgICAgICAgdGhpcy50aW1lLS07XG4gICAgICAgIHRoaXMuZ2FtZVRpbWUuaW5uZXJUZXh0ID0gdGhpcy50aW1lICsgJ3MnO1xuXG4gICAgICAgIGlmKHRoaXMudGltZSAhPT0gMCl7XG4gICAgICAgICAgICB0aGlzLnNob3dSYW5kb21Mb29weSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXBkYXRlU2NvcmUoKXtcbiAgICAgICAgdGhpcy5zY29yZSs9MTtcbiAgICAgICAgdGhpcy5nYW1lU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy5zY29yZTtcbiAgICB9XG5cbiAgICBzaG93UmFuZG9tTG9vcHkoKXtcbiAgICAgICAgbGV0IHJhbmRvbUxvb3B5ID0gdGhpcy5sb29weUxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sb29weUxpc3QubGVuZ3RoKV07XG4gICAgICAgIHJhbmRvbUxvb3B5LnNob3coKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByYW5kb21Mb29weS5oaWRlKCksMjAwMCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuaW5uZXJIVE1MID0gYFlvdXIgc2NvcmUgaXMgJHt0aGlzLnNjb3JlfSFgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtZW5kXCIpLnNob3dNb2RhbCgpO1xuICAgICAgICBiYWNrZ3JvdW5kTXVzaWMucGF1c2UoKTtcbiAgICAgICAgYmFja2dyb3VuZE11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG5cbiAgICByZVN0YXJ0KCl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1lbmRcIikuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgLy8gY29uc3RydWN0b3IoZ2FtZVNjb3JlLCBnYW1lVGltZSl7XG4gICAgLy8gICAgICAgICB0aGlzLnJlc3RUaW1lID0gZ2FtZVRpbWU7XG4gICAgLy8gICAgICAgICB0aGlzLnNjb3JlID0gZ2FtZVNjb3JlO1xuICAgIC8vICAgICAgICAgdGhpcy50aW1lcjtcbiAgICAvLyAgICAgICAgIHRoaXMubG9vcHlTdGF0ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gc3RhcnRHYW1lKCl7XG4gICAgLy8gICAgIGxldCBjdXJyZW50U2NvcmUgPSAwO1xuICAgIC8vICAgICBsZXQgbXVzaWNPbiA9IHRydWU7XG4gICAgLy8gICAgIGNvbnN0IG11c2ljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpY1wiKTtcblxuICAgIC8vICAgICBjb25zdCBtdXNpY0ltYWdlTGlzdCA9IFsnLi9hc3NldHMvaW1hZ2VzL29uLnBuZycsICcuL2Fzc2V0cy9pbWFnZXMvb2ZmLnBuZyddXG4gICAgLy8gICAgIGxldCBjdXJyZW50SW1nSWR4ID0gMDtcblxuICAgIC8vICAgICBpZih0aGlzLnRpbWVyKSBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXG4gICAgLy8gICAgIHRoaXMuY291bnREb3duKCk7XG4gICAgLy8gICAgIHRoaXMubG9vcHlTdGF0ZSA9IHNldEludGVydmFsKHRoaXMuc2hvd0xvb3B5LCAyMDAwKTtcbiAgICAvLyAgICAgdGhpcy5jbGlja0xvb3B5KGN1cnJlbnRTY29yZSk7XG5cbiAgICAvLyAgICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcblxuXG4gICAgLy8gICAgIG11c2ljQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG5cblxuICAgIC8vICAgICAgICAgY3VycmVudEltZ0lkeCA9IChjdXJyZW50SW1nSWR4KzEpICUgbXVzaWNJbWFnZUxpc3QubGVuZ3RoO1xuICAgIC8vICAgICAgICAgY29uc3QgbmV4dEltZyA9IG11c2ljSW1hZ2VMaXN0W2N1cnJlbnRJbWdJZHhdO1xuXG5cbiAgICAvLyAgICAgICAgIGNvbnN0IG11c2ljSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpYy1pbWdcIik7XG4gICAgLy8gICAgICAgICBtdXNpY0ltZy5zcmMgPSBuZXh0SW1nO1xuXG5cbiAgICAvLyAgICAgICAgIGlmKGN1cnJlbnRJbWdJZHggPT09IDEpICBiYWNrZ3JvdW5kTXVzaWMucGF1c2UoKTtcbiAgICAvLyAgICAgICAgIGlmKGN1cnJlbnRJbWdJZHggPT09IDApICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xuXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGNsaWNrTG9vcHkoY3VycmVudFNjb3JlKXtcbiAgICAvLyAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgLy8gICAgIGxvb3B5TGlzdC5mb3JFYWNoKGVsZT0+e1xuICAgIC8vICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrIGxvb3B5IScpO1xuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSAxO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gY3VycmVudFNjb3JlLnRvU3RyaW5nKCk7XG5cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgKX0pO1xuICAgIC8vIH1cblxuICAgIC8vIHNob3dMb29weSgpe1xuICAgIC8vICAgICBsZXQgcmFuZG9tTnVtID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo2KTtcbiAgICAvLyAgICAgbGV0IGxvb3B5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9vcHlcIik7XG4gICAgLy8gICAgIGxldCBsb29weSA9IGxvb3B5TGlzdFtyYW5kb21OdW1dO1xuICAgIC8vICAgICBsb29weS5jbGFzc0xpc3QuYWRkKFwic2hvd1VwXCIpO1xuICAgIC8vICAgICBsb29weS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cbiAgICAvLyAgICAgLy8gdGhpcy5oaWRlTG9vcHkobG9vcHkpO1xuICAgIC8vICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgICBsb29weS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIC8vICAgICAgICAgbG9vcHkuY2xhc3NMaXN0LnJlbW92ZShcInNob3dVcFwiKTtcbiAgICAvLyAgICAgfSwxMDAwKTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb3VudERvd24oKXtcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRUaW1lID0gTnVtYmVyKHRoaXMucmVzdFRpbWUuaW5uZXJIVE1MLnNsaWNlKDAsMikpO1xuICAgIC8vICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAvLyAgICAgICAgIGlmKGN1cnJlbnRUaW1lICE9PSAwKXtcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50VGltZSAtLTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnJlc3RUaW1lLmlubmVyVGV4dCA9IGN1cnJlbnRUaW1lLnRvU3RyaW5nKCkgK1wic1wiO1xuICAgIC8vICAgICAgICAgfWVsc2V7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3B5U3RhdGUpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBlbmRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWVuZFwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuaW5uZXJIVE1MID0gYFlvdXIgc2NvcmUgaXMgJHt0aGlzLnNjb3JlLmlubmVyVGV4dH0hYDtcblxuICAgIC8vICAgICAgICAgICAgICAgICBlbmRQYWdlLnNob3dNb2RhbCgpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9LCAxMDAwKTtcbiAgICAvLyB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIl0sIm5hbWVzIjpbIkxvb3B5IiwiYmFja2dyb3VuZE11c2ljIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImdhbWVTY29yZSIsImdhbWVUaW1lIiwicmVzdFRpbWUiLCJzY29yZSIsInRpbWUiLCJsb29weVNob3dUaW1lIiwibG9vcHlMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibG9vcHkiLCJwdXNoIiwidXBkYXRlU2NvcmUiLCJiaW5kIiwic3RhcnQiLCJjbG9zZSIsImlubmVyVGV4dCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjb3VudERvd24iLCJzaG93UmFuZG9tTG9vcHkiLCJtdXNpY0ltZyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJtdXNpY0J0biIsIm11c2ljSW1hZ2VMaXN0IiwiY3VycmVudEltZ0lkeCIsImxlbmd0aCIsIm5leHRJbWciLCJwYXVzZSIsImdhbWVPdmVyIiwicmFuZG9tTG9vcHkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwic2hvd01vZGFsIiwiY3VycmVudFRpbWUiLCJyZVN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/loopy.js":
/*!******************************!*\
  !*** ./src/scripts/loopy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst hitSound = new Audio('./src/audio/hit.mp3');\nclass Loopy {\n  constructor(element, beHit) {\n    this.element = element;\n    this.isVisible = false;\n    this.beHit = beHit;\n    this.element.addEventListener(\"click\", this.hit.bind(this));\n  }\n  show() {\n    this.isVisible = true;\n    this.element.classList.add(\"showUp\");\n    this.element.classList.remove(\"hidden\");\n  }\n  hide() {\n    this.isVisible = false;\n    this.element.classList.add(\"hidden\");\n    this.element.classList.remove(\"showUp\");\n  }\n  hit() {\n    if (this.isVisible) {\n      this.element.classList.add(\"dazedEffect\");\n      this.beHit();\n      hitSound.currentTime = 0;\n      hitSound.play();\n      this.hide();\n      setTimeout(() => {\n        this.element.classList.remove(\"dazedEffect\");\n      }, 600);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loopy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sb29weS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxHQUFHLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztBQUVqRCxNQUFNQyxLQUFLO0VBQ1BDLFdBQVdBLENBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFDO0lBQ3ZCLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsU0FBUyxHQUFHLEtBQUs7SUFDdEIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9EO0VBRUFDLElBQUlBLENBQUEsRUFBRTtJQUNGLElBQUksQ0FBQ0osU0FBUyxHQUFHLElBQUk7SUFDckIsSUFBSSxDQUFDRixPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNwQyxJQUFJLENBQUNSLE9BQU8sQ0FBQ08sU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzNDO0VBRUFDLElBQUlBLENBQUEsRUFBRTtJQUNGLElBQUksQ0FBQ1IsU0FBUyxHQUFHLEtBQUs7SUFDdEIsSUFBSSxDQUFDRixPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNwQyxJQUFJLENBQUNSLE9BQU8sQ0FBQ08sU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzNDO0VBRUFMLEdBQUdBLENBQUEsRUFBRTtJQUNELElBQUcsSUFBSSxDQUFDRixTQUFTLEVBQUM7TUFDZCxJQUFJLENBQUNGLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO01BQ3pDLElBQUksQ0FBQ1AsS0FBSyxDQUFDLENBQUM7TUFDWkwsUUFBUSxDQUFDZSxXQUFXLEdBQUcsQ0FBQztNQUN4QmYsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLENBQUM7TUFDZixJQUFJLENBQUNGLElBQUksQ0FBQyxDQUFDO01BQ1hHLFVBQVUsQ0FBQyxNQUFJO1FBQ1gsSUFBSSxDQUFDYixPQUFPLENBQUNPLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGFBQWEsQ0FBQztNQUNoRCxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFDSjtBQUNKO0FBR0EsK0RBQWVYLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9sb29weS5qcz83NmZlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhpdFNvdW5kID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9oaXQubXAzJyk7XG5cbmNsYXNzIExvb3B5e1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGJlSGl0KXtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZUhpdCA9IGJlSGl0O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGl0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHNob3coKXtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3dVcFwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93VXBcIik7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIGlmKHRoaXMuaXNWaXNpYmxlKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF6ZWRFZmZlY3RcIik7XG4gICAgICAgICAgICB0aGlzLmJlSGl0KCk7XG4gICAgICAgICAgICBoaXRTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICBoaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhemVkRWZmZWN0XCIpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMb29weTtcbiJdLCJuYW1lcyI6WyJoaXRTb3VuZCIsIkF1ZGlvIiwiTG9vcHkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJiZUhpdCIsImlzVmlzaWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaXQiLCJiaW5kIiwic2hvdyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhpZGUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/loopy.js\n");

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