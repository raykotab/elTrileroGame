
export class Score {

    constructor (quantity) {

        this.quantity = quantity;
        this.score = 0;
    }

    showScore() {

        this.score -= this.quantity; 
        console.log("score");
    }

    bet(quantity) {
        console.log(quantity);
    }
}