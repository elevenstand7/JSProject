
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

    const game = new Game(false);
    const hardGame = new Game(true);

    let gameStart = document.getElementById("start");
    let closeModal = document.getElementById("closeModal");

    closeModal.addEventListener("click",()=>{
        introPage.close();
    })

    gameStart.addEventListener("click", ()=>{
        // introPage.close();
        // console.log("Game Start!");
        game.start();
        gameStart.style.display = "none";

    });

    let reStart = document.getElementById("restart");
    let switchMode = document.getElementById("hard");

    reStart.addEventListener("click", ()=>{
        let endPage = document.getElementById("game-end");
        endPage.close();
        document.querySelector(".music-img").src = './assets/images/on.png';
        game.reStart();
    })
    switchMode.addEventListener("click", ()=>{
        // console.log("hard mode");

        hardGame.reStart();
    })

});



