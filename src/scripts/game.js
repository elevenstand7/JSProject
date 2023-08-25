class Game{
    constructor(){
        this.gameStart = document.getElementById("start");
        this.currentHole = [];//array to hold the holes current having loopy;
        this.score = 0;
        // this.addEventListener("click", this.clickHole);
        // this.clickHandler = this.clickHandler.bind(this);
        this.startGame();
    }


    getRandomHole(){
        return Math.floor(Math.random()*6)
    }

    startGame(){
        this.gameStart.addEventListener("click", function(){alert("u click start!")});
        this.clickHole();
    }
//     setRandomLoopy(params) {
//         let loopy = document.
//     }

    clickHole(){
        let holeList = document.querySelectorAll(".hole");
        holeList.forEach(ele=>{
            ele.addEventListener("click", function(){alert("click hole!")}
        )});
        // if (this.currentHole.includes(currentClick)){
        //     score += 1;
        //     document.getElementById("score").innerText = score.toString();
        // }
    }

}

export default Game;
