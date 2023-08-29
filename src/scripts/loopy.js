

const hitSound = new Audio('./src/audio/hit.mp3');

class Loopy{
    constructor(element, beHit, game){
        this.element = element;
        this.isVisible = false;
        this.beHit = beHit;
        this.element.addEventListener("click", this.hit.bind(this));
        this.isEvil = false;
        this.isHit = false;
        this.game = game;
    }

    show(){
        this.isVisible = true;
        this.element.classList.add("showUp");
        this.element.classList.remove("hidden");
    }

    hide(){
        this.isVisible = false;
        this.element.classList.add("hidden");
        this.element.classList.remove("showUp");
    }

    hit(){
        if(this.isVisible && !this.isHit){
            if(this.isEvil){
                console.log("hit evil loopy!")
                this.game.gameOver();
            }else{
                this.element.classList.add("dazedEffect");
                this.beHit();
                hitSound.currentTime = 0;
                hitSound.play();
                this.hide();
                setTimeout(()=>{
                    this.element.classList.remove("dazedEffect");
                    this.isHit = false;
                }, 600);
            }
        }
    }

    changeEvil(){
        this.element.src = './assets/images/evil-loopy.png';
        this.isEvil = true;
    }
    changeNormal(){
        this.element.src = './assets/images/loopy-removebg-preview.png';
        this.isEvil = false;
    }
}


export default Loopy;
