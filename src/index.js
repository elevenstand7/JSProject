
import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded",
function(){
    const title = document.querySelector("h2");
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='title-char'>$&</span>");

    document.querySelectorAll(".title-char").forEach(
        (ele, idx)=>{
            ele.style.setProperty('--delay', `${idx *0.1}s`)
        }
    )


    let introPage = document.getElementById("game-start");
    introPage.showModal();
    const gameScore = document.getElementById("score");
    const gameTime = document.getElementById("time");
    const game = new Game(gameScore, gameTime);
    let gameStart = document.getElementById("start");

    gameStart.addEventListener("click", ()=>{
        introPage.close();
        console.log("Game Start!");
        game.start();
    });

    let reStart = document.getElementById("restart");

    reStart.addEventListener("click", ()=>{
        let endPage = document.getElementById("game-end");
        endPage.close();
        game.reStart();
    })
});



