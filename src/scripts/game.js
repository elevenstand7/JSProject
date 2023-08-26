class Game{
    constructor(){
        // this.gameStart = document.getElementById("start");
        // this.gameStop= document.getElementById("stop");
        this.restTime = document.getElementById("time");
        this.score = document.getElementById("score");
        this.gameOver = false;
        this.timer;
        this.loopyState;
        this.startGame();
    }


    startGame(){
        let currentScore = 0;
        // this.gameStart.addEventListener("click", ()=>{
        //    console.log("Game Start!");
        if(this.timer) clearInterval(this.timer);
        this.countDown();
        this.loopyState = setInterval(this.showLoopy, 2000);
        this.clickLoopy(currentScore);

        // });
    }

    clickLoopy(currentScore){
        let loopyList = document.querySelectorAll(".loopy");
        loopyList.forEach(ele=>{
            ele.addEventListener("click", ()=>{
                // alert("click loopy!");
                console.log('click loopy!');
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
                    this.gameOver = true;
                    console.log("timer");
                    clearInterval(this.timer);
                    clearInterval(this.loopyState);
                    let endPage = document.getElementById("game-end");
                    document.getElementById("result").innerHTML = `Your score is ${this.score.innerText}!`;
                    // const p =document.createElement("p");
                    // p.innerText =  this.score.innerText;
                    // res.append(p);

                    endPage.showModal();
            }
        }, 1000);
    }

    stopGame(){
        this.gameStop.addEventListener("click", ()=>{
            alert("stop");
        }
    )};

}

export default Game;
