class Game{
    constructor(){
        this.gameStart = document.getElementById("start");
        this.currentHole = 0;//array to hold the holes current having loopy;
        this.score = document.getElementById("score");
        this.restTime = document.getElementById("time");
        // this.addEventListener("click", this.clickHole);
        // this.clickHandler = this.clickHandler.bind(this);
        this.startGame();
    }


    startGame(){
        let currentScore = 0;
        this.gameStart.addEventListener("click", function(){alert("u click start!")});
        // this.showLoopy();
        setInterval(this.showLoopy, 2000);
        this.clickHole(currentScore);
    }
//     setRandomLoopy(params) {
//         let loopy = document.
//     }

    clickHole(currentScore){
        let loopyList = document.querySelectorAll(".loopy");
        loopyList.forEach(ele=>{
            ele.addEventListener("click", function(){
                alert("click loopy!");
                currentScore += 1;
                this.score.innerText = currentScore.toString();

            }
        )});

            // document.getElementById("score").innerText = score.toString();

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
        },3000);
    }

    // hideLoopy(ele){
    //     setTimeout(function(){
    //         ele.classList.add("hidden");
    //         ele.classList.remove("showUp");
    //     },3000);
    // }

}

export default Game;
