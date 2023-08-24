class View{
    constructor(game, el){
        this.game = game;
        this.el =el;
        this.clickHandler = this.clickHandler.bind(this);
        this.setUpBoard();
    }


    setUpBoard(){
        const ul = document.createElement("ul");

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const li = document.createElement("li");
                li.dataset.pos = JSON.stringify([i, j])
                ul.append(li);
            }
        }

        this.el.append(ul);
        this.el.addEventListener("click", this.handleClick);
    }
}


export default View;
