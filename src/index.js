
// import View from "./scripts/game-view";
import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded",
function(){
    const title = document.querySelector("h1");
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='title-char'>$&</span>");

    document.querySelectorAll(".title-char").forEach(
        (ele, idx)=>{
            // idx += 50
            ele.style.setProperty('--delay', `${idx *0.1}s`)
        }
    )


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
        document.querySelector(".music-img").src = './assets/images/on.png';
        const game = new Game(gameScore, gameTime);
    })
});



