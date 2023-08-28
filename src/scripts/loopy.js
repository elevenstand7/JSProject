const hitSound = new Audio('./src/audio/hit.mp3');

class Loopy{
    constructor(element, beHit){
        this.element = element;
        this.isVisible = false;
        this.beHit = beHit;
        this.element.addEventListener("click", this.hit.bind(this));
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
        if(this.isVisible){
            this.element.classList.add("dazedEffect");
            this.beHit();
            hitSound.currentTime = 0;
            hitSound.play();
            this.hide();
            setTimeout(()=>{
                this.element.classList.remove("dazedEffect");
            }, 600);
        }
    }

    changeEvil(){
        this.element.src = './assets/images/evil-loopy.png';
    }
    changeNormal(){
        this.element.src = './assets/images/loopy-removebg-preview.png';
    }
}


export default Loopy;
