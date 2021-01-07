

class LittleBall {

    constructor(position) {

        this.x = position;
    //     estado cup
    // asignacion de sitio por  game
    }
    getPosition() {
        return this.x;
    }

    setPosition(x) {
        this.x = x;
    }

    animation () {
        console.log("animation littleBall");
    }

    disappear () {
        console.log("littleBall disappeared");
    }
    
}