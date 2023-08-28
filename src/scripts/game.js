import Loopy from "./loopy";

const backgroundMusic = new Audio('./src/audio/music.mp3');

backgroundMusic.addEventListener("ended", ()=>{
    backgroundMusic.play();
})

class Game{
    constructor(gameScore, gameTime){
        this.restTime = null;
        this.score = 0;
        this.time = 0;
        this.loopyShowTime = 2000;
        this.loopyList = [];
        // this.startGame();
        this.gameScore = document.getElementById("score");
        this.gameTime = document.getElementById("time");
        // this.loopy = document.querySelectorAll(".loopy");

        document.querySelectorAll(".loopy").forEach(loopy=>{
            this.loopyList.push(new Loopy(loopy, this.updateScore.bind(this)));
        });
    }

    start(){
        document.getElementById("game-start").close();
        this.time = 30;
        this.score = 1;
        this.gameTime.innerText = this.time + 's';
        this.restTime = setInterval(this.countDown.bind(this), 1000);
        this.showRandomLoopy();

        backgroundMusic.play();
        this.evilLoopyTimer = setInterval(this.showEvilLoopy.bind(this), 2000);

        const musicImageList = ['./assets/images/on.png', './assets/images/off.png']
        const musicBtn = document.querySelector(".music");

        let currentImgIdx = 0;

        musicBtn.addEventListener("click",()=>{

            currentImgIdx = (currentImgIdx+1) % musicImageList.length;
            const nextImg = musicImageList[currentImgIdx];


            const musicImg = document.querySelector(".music-img");
            musicImg.src = nextImg;

            if(currentImgIdx === 1)  backgroundMusic.pause();
            if(currentImgIdx === 0)  backgroundMusic.play();
        });

    }

    countDown(){
        this.time--;
        this.gameTime.innerText = this.time + 's';

        if(this.time !== 0){
            this.showRandomLoopy();
        }else{
            this.gameOver();
        }
    }


    updateScore(){
        this.score+=1;
        this.gameScore.innerText = this.score;
    }

    showRandomLoopy(){
        let randomLoopy = this.loopyList[Math.floor(Math.random() * this.loopyList.length)];
        // console.log(randomLoopy.src)
        randomLoopy.show();
        setTimeout(() => randomLoopy.hide(),2000);
    }

    showEvilLoopy(){
        console.log("evil loopy!")
        // console.log(this.loopyList)
        const randomIdx = Math.floor(Math.random() * this.loopyList.length);
        // if(this.loopyList[randomIdx].isVisible){
        const evilLoopy = this.loopyList[randomIdx];
        setInterval(()=>{
            evilLoopy.changeEvil();
            setInterval(()=>{
                evilLoopy.changeNormal();
            },4000)
        }, 2000)

    }

    gameOver(){
        clearInterval(this.restTime);
        // clearInterval(this.evilLoopyTimer);
        document.getElementById("result").innerHTML = `Your score is ${this.score}!`;
        document.getElementById("game-end").showModal();
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }

    reStart(){
        document.getElementById("game-end").close();
        this.start();
    }


    // constructor(gameScore, gameTime){
    //         this.restTime = gameTime;
    //         this.score = gameScore;
    //         this.timer;
    //         this.loopyState;
    //         this.startGame();
    // }

    // startGame(){
    //     let currentScore = 0;
    //     let musicOn = true;
    //     const musicBtn = document.querySelector(".music");

    //     const musicImageList = ['./assets/images/on.png', './assets/images/off.png']
    //     let currentImgIdx = 0;

    //     if(this.timer) clearInterval(this.timer);

    //     this.countDown();
    //     this.loopyState = setInterval(this.showLoopy, 2000);
    //     this.clickLoopy(currentScore);

    //     backgroundMusic.play();


    //     musicBtn.addEventListener("click",()=>{


    //         currentImgIdx = (currentImgIdx+1) % musicImageList.length;
    //         const nextImg = musicImageList[currentImgIdx];


    //         const musicImg = document.querySelector(".music-img");
    //         musicImg.src = nextImg;


    //         if(currentImgIdx === 1)  backgroundMusic.pause();
    //         if(currentImgIdx === 0)  backgroundMusic.play();

    //     });
    // }

    // clickLoopy(currentScore){
    //     let loopyList = document.querySelectorAll(".loopy");
    //     loopyList.forEach(ele=>{
    //         ele.addEventListener("click", ()=>{

    //             // console.log('click loopy!');
    //             currentScore += 1;
    //             this.score.innerText = currentScore.toString();

    //         }
    //     )});
    // }

    // showLoopy(){
    //     let randomNum =  Math.floor(Math.random()*6);
    //     let loopyList = document.querySelectorAll(".loopy");
    //     let loopy = loopyList[randomNum];
    //     loopy.classList.add("showUp");
    //     loopy.classList.remove("hidden");


    //     // this.hideLoopy(loopy);
    //     setTimeout(function(){
    //         loopy.classList.add("hidden");
    //         loopy.classList.remove("showUp");
    //     },1000);
    // }

    // countDown(){
    //     let currentTime = Number(this.restTime.innerHTML.slice(0,2));
    //     this.timer = setInterval(()=>{
    //         if(currentTime !== 0){
    //             currentTime --;
    //             this.restTime.innerText = currentTime.toString() +"s";
    //         }else{

    //                 clearInterval(this.timer);
    //                 clearInterval(this.loopyState);

    //                 let endPage = document.getElementById("game-end");
    //                 document.getElementById("result").innerHTML = `Your score is ${this.score.innerText}!`;

    //                 endPage.showModal();
    //         }
    //     }, 1000);
    // }


}

export default Game;
