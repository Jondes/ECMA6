export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    makeNosie(sound = 'loudNoise') {
        console.log(sound);
    }
}