
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
    let gameStart = document.getElementById("start");
        gameStart.addEventListener("click", ()=>{
        introPage.close();
        console.log("Game Start!");
        const game = new Game();
        // if(game.restTime === 0){
        //     let endPage = document.getElementById("game-end");
        //     endPage.showModal();
        // }
    // const gameStart = document.getElementById("start");
    // gameStart.addEventListener("click", function(){alert("u click start!")});
}
)});



