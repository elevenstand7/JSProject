
// import View from "./scripts/game-view";
import Game from "./scripts/game";

// document.addEventListener("DOMContentLoaded", () => {
//     const game = new Game();
//     const rootEl = document.querySelector(".game-board");
//     new View(game, rootEl);
//   });

document.addEventListener("DOMContentLoaded",
function(){
    console.log("hello world!");
    let introPage = document.getElementById("game-start");
    introPage.showModal();
    const gameScore = document.getElementById("score");
    const gameTime = document.getElementById("time");

    let gameStart = document.getElementById("start");

    gameStart.addEventListener("click", ()=>{
        introPage.close();
        console.log("Game Start!");
        const game = new Game(gameScore, gameTime);
    });

    let reStart = document.getElementById("restart");
    reStart.addEventListener("click", ()=>{
        let endPage = document.getElementById("game-end");
        endPage.close();
        document.getElementById("score").innerHTML = '0';
        document.getElementById("time").innerHTML = '10s';
        const game = new Game(gameScore, gameTime);
    })
});



