const button = document.getElementById('click-me');
class SelectRandom {
    constructor() {
        this.colourDisplay = document.getElementById('colour-display');
        this.bgFlip = document.getElementById('bg-flip');
    }
    pickRandom() {
        const pick = Math.random();
        const percentage = pick*100;
        return percentage;
    }
    validate() {
        const percentage = this.pickRandom();

        if (percentage >= 0 && percentage <= 15 || percentage >= 61 && percentage >=70) {
            this.bgFlip.style.backgroundColor = 'red';
            this.colourDisplay.innerHTML = 'red';
        }
        
        if (percentage >= 16 && percentage <= 30 || percentage >= 71 && percentage <= 80) {
            this.bgFlip.style.backgroundColor = '#F15025';
            this.colourDisplay.innerHTML = '#F15025';
        }
        if (percentage >= 31 && percentage <= 45 || percentage >= 81 && percentage <= 90) {
            this.bgFlip.style.backgroundColor = 'green';
            this.colourDisplay.innerHTML = 'green'
        }
        if (percentage >= 46 && percentage <= 60 || percentage >= 91 && percentage <= 100) {
            this.bgFlip.style.backgroundColor = 'Rgba(133,122,200)';
            this.colourDisplay.innerHTML = 'Rgba(133,122,200)';
        }
    }
}
const myClass = new SelectRandom();
button.addEventListener('click', (e) => {
    myClass.pickRandom()
    myClass.validate()
});