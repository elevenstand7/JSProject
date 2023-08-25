class View{
    constructor(game, el){
        this.game = game;
        this.el =el;
        this.clickHandler = this.clickHandler.bind(this);
        this.setUpBoard();
    }


    setUpBoard(){
        const ul = document.createElement("ul");

        for(let i=0;i<6;i++){
            const li = document.createElement("li");
            li.dataset.pos = JSON.stringify([i, j])
            ul.append(div);

        }

        this.el.append(ul);
        this.el.addEventListener("click", this.handleClick);
    }
}


export default View;
