class Game{
    constructor(){
        this.gameStart = document.getElementById("start");
        this.currentHole = 0;//array to hold the holes current having loopy;
        this.restTime = document.getElementById("time");
        // this.addEventListener("click", this.clickHole);
        // this.clickHandler = this.clickHandler.bind(this);
        this.startGame();
    }


    startGame(){
        let currentScore = 0;
        let currentTime = 60;
        this.gameStart.addEventListener("click", function(){alert("u click start!")});
        // this.showLoopy();
        this.timer();
        setInterval(this.showLoopy, 2000);
        this.clickLoopy(currentScore);
    }

    clickLoopy(currentScore){
        let loopyList = document.querySelectorAll(".loopy");
        loopyList.forEach(ele=>{
            ele.addEventListener("click", function(){
                // alert("click loopy!");
                currentScore += 1;
                document.getElementById("score").innerText = currentScore.toString();

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
        let currentTime = Number(document.getElementById("time").innerHTML.slice(0,2));
        setInterval(function(){
            if(currentTime >0){
                currentTime -= 1;
                document.getElementById("time").innerText = currentTime.toString()+" s";
            }
        }, 1000);
    }

}

export default Game;
