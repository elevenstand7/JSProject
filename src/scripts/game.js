const backgroundMusic = new Audio('./src/audio/music.mp3');

backgroundMusic.addEventListener("ended", ()=>{
    backgroundMusic.play();
})

class Game{
    constructor(gameScore, gameTime){
        this.restTime = gameTime;
        this.score = gameScore;
        this.timer;
        this.loopyState;
        this.startGame();
    }


    startGame(){
        let currentScore = 0;
        let musicOn = true;
        const musicBtn = document.querySelector(".music");

        const musicImageList = ['./assets/images/on.png', './assets/images/off.png']
        let currentImgIdx = 0;

        if(this.timer) clearInterval(this.timer);

        this.countDown();
        this.loopyState = setInterval(this.showLoopy, 2000);
        this.clickLoopy(currentScore);

        backgroundMusic.play();


        musicBtn.addEventListener("click",()=>{


            currentImgIdx = (currentImgIdx+1) % musicImageList.length;
            const nextImg = musicImageList[currentImgIdx];


            const musicImg = document.querySelector(".music-img");
            musicImg.src = nextImg;


            if(currentImgIdx === 1)  backgroundMusic.pause();
            if(currentImgIdx === 0)  backgroundMusic.play();

        });
    }

    clickLoopy(currentScore){
        let loopyList = document.querySelectorAll(".loopy");
        loopyList.forEach(ele=>{
            ele.addEventListener("click", ()=>{

                // console.log('click loopy!');
                currentScore += 1;
                this.score.innerText = currentScore.toString();

            }
        )});
    }

    showLoopy(){
        let randomNum =  Math.floor(Math.random()*6);
        let loopyList = document.querySelectorAll(".loopy");
        let loopy = loopyList[randomNum];
        loopy.classList.add("showUp");
        loopy.classList.remove("hidden");


        // this.hideLoopy(loopy);
        setTimeout(function(){
            loopy.classList.add("hidden");
            loopy.classList.remove("showUp");
        },1000);
    }

    countDown(){
        let currentTime = Number(this.restTime.innerHTML.slice(0,2));
        this.timer = setInterval(()=>{
            if(currentTime !== 0){
                currentTime --;
                this.restTime.innerText = currentTime.toString() +"s";
            }else{

                    clearInterval(this.timer);
                    clearInterval(this.loopyState);

                    let endPage = document.getElementById("game-end");
                    document.getElementById("result").innerHTML = `Your score is ${this.score.innerText}!`;

                    endPage.showModal();
            }
        }, 1000);
    }


}

export default Game;
