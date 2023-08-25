class Game{
    constructor(){
        this.gameStart = document.getElementById("start");
        this.currentHole = 0;//array to hold the holes current having loopy;
        this.score = 0;
        // this.addEventListener("click", this.clickHole);
        // this.clickHandler = this.clickHandler.bind(this);
        this.startGame();
    }


    startGame(){
        this.gameStart.addEventListener("click", function(){alert("u click start!")});
        this.showLoopy();
        this.clickHole();
    }
//     setRandomLoopy(params) {
//         let loopy = document.
//     }

    clickHole(){
        let loopyList = document.querySelectorAll(".loopy");
        loopyList.forEach(ele=>{
            ele.addEventListener("click", function(){
                alert("click loopy!");
            }
        )});
        // if (this.currentHole.includes(currentClick)){
        //     score += 1;
        //     document.getElementById("score").innerText = score.toString();
        // }
    }

//function to get random number between 0-5, for select random hole
    getRandomHole(){
        return Math.floor(Math.random()*6)
    }

    showLoopy(){
        let randomNum =  this.getRandomHole();
        let loopyList = document.querySelectorAll(".loopy");
        let loopy = loopyList[randomNum];
        loopy.classList.add("showUp");
        loopy.classList.remove("hidden");
        this.hideLoopy(loopy);
    }

    hideLoopy(ele){
        setTimeout(function(){
            ele.classList.add("hidden");
            ele.classList.remove("showUp");
        },3000);
    }

}

export default Game;
