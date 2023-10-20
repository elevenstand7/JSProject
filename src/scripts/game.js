import Loopy from "./loopy";

const backgroundMusic = new Audio('./src/audio/music.mp3');

backgroundMusic.addEventListener("ended", ()=>{
    backgroundMusic.play();
})

class Game{
    constructor(hardOn){
        this.restTime = null;
        this.hardOn = hardOn;
        this.score = 0;
        this.time = 0;
        this.loopyShowTime = 2000;
        this.loopyList = [];
        // this.startGame();
        this.gameScore = document.getElementById("score");
        this.gameTime = document.getElementById("time");

        document.querySelectorAll(".loopy").forEach(loopy=>{
            this.loopyList.push(new Loopy(loopy, this.updateScore.bind(this), this));
        });
    }

    start(){
        document.getElementById("game-start").close();
        this.gameScore.innerHTML = "0";
        // document.querySelector(".music-img") = './assets/images/on.png';
        document.getElementById("hit-evil").innerHTML = "";
        this.time = 50;
        this.score = 0;
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

        randomLoopy.show();
        setTimeout(() => randomLoopy.hide(),2000);
    }

    showEvilLoopy(){
        // console.log("hard on!")
        // console.log(this.loopyList)
        const randomIdx = Math.floor(Math.random() * this.loopyList.length);

        const evilLoopy = this.loopyList[randomIdx];
        // console.log(this.hardOn)
        if(this.hardOn){
            // console.log("evil loopy!")
            evilLoopy.changeEvil();
            setTimeout(()=>{
                evilLoopy.changeNormal();
            },4000)
        }

    }

    gameOver(){
        document.getElementById("game-end").showModal();
        document.getElementById("result").innerHTML = `Your score is ${this.score}!`;
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        clearInterval(this.restTime);
        clearInterval(this.evilLoopyTimer);
    }

    reStart(){
        document.getElementById("game-end").close();
        document.querySelector(".music-img").src = './assets/images/on.png';
        this.start();
    }



}

export default Game;
