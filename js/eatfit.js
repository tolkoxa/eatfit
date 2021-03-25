class eatfit {
    constructor() {
        this.slider = document.getElementById('slider');
        this.colorblock = document.getElementById('colorblock');
        this._init();
    }

    _init() {
        let random = this.randomizer(3);
        this.randomSlider(random);
    }

    randomSlider(number) {
        this.slider.classList.add(`slider-${number}`);
        console.log(number);
    }

    randomizer(i) {
        return Math.floor(Math.random() * i);
    }

}

let finFood = new eatfit();