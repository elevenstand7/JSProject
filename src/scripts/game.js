class Game{
    constructor(){
        this.gameStart = document.getElementById("start");
        this.restTime = document.getElementById("time");
        this.score = document.getElementById("score");
        this.startGame();
    }


    startGame(){
        let currentScore = 0;
        this.gameStart.addEventListener("click", function(){alert("u click start!")});
        // this.showLoopy();
        this.timer();
        setInterval(this.showLoopy, 2000);
        this.clickLoopy(currentScore);
        // alert("Game over!")


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

//function to get random number between 0-5, for select random hole
    // getRandomHole(){
    //     return Math.floor(Math.random()*6)
    // };

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

    // hideLoopy(ele){
    //     setTimeout(function(){
    //         ele.classList.add("hidden");
    //         ele.classList.remove("showUp");
    //     },3000);
    // }

    timer(){
        let currentTime = Number(this.restTime.innerHTML.slice(0,2));
        let countDown = setInterval(()=>{
            if(currentTime !== 0){
                currentTime -= 1;
                this.restTime.innerText = currentTime.toString() +"s";
            }else{
                // alert("Game over!");
                // clearInterval(countDown);
            }
        }, 1000);
    }

    gameOver(){

    }

}

export default Game;
