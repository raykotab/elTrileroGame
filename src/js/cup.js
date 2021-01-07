

class Cup {

    constructor (x, isFull = undefined) {

        this.x = x;
        this.y = 160;
        this.isFull = isFull;
    }
    

    animate () {
        console.log("animation cup");
    }
}