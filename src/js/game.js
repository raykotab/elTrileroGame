
import {Cup} from '../cup.js';
import {LittleBall} from '../littleBall.js';
import {Score} from '../score.js';

class Game {
  
  constructor () {
    
    this.cups = document.querySelector("#cups");
    this.cup1 = new Cup(230);
    this.cup2 = new Cup(540);
    this.cup3 = new Cup(860);
    this.littleBall = new LittleBall(230);
    this.score = new Score(10);
    this.userClick = false;
    this.buttonCup1 = document.querySelector("#cup1").addEventListener("click", this.animate);
    this.buttonCup2 = document.querySelector("#cup2").addEventListener("click", this.endGame);
    this.buttonCup3 = document.querySelector("#cup3").addEventListener("click", this.endGame)
  }
}

console.log(this.buttonCup1);
  let game = new Game();
  game.startGame();