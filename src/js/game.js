
import {Cup} from './cup.js';
import {LittleBall} from './littleBall.js';
import {Score} from './score.js';

class Game {
  
  constructor () {
    
    this.cups = document.querySelector("#cups");
    this.cup1 = new Cup(230);
    this.cup2 = new Cup(540);
    this.cup3 = new Cup(860);
    this.littleBall = new LittleBall(230);
    this.score = new Score(10);
    this.userClick = false;
    this.buttonCup1 = document.querySelector("#cup1").addEventListener("click", this.endGame);
    this.buttonCup2 = document.querySelector("#cup2").addEventListener("click", this.endGame);
    this.buttonCup3 = document.querySelector("#cup3").addEventListener("click", this.endGame);

  }
  
  startGame()  {

    
   

    this.cup1.animate();

    if(this.buttonCup1 == true || this.buttonCup2 == true || this.buttonCup3 == true) {
      return this.userClick = true;
    }
    this.userClick = false;


    while (this.userClick == false) {
      this.random()
      return this.userClick = true;
    }
    return this.endGame();
  }  
  
  endGame() {
    console.log("clicked");
    //this.score.bet();
    this.littleBall.disappear();
    this.animation();
    this.score.showScore();
  }

  random () {

    const posibilities = ["position1", "position2", "position3"];
    const result = posibilities[Math.floor(Math.random() * posibilities.length)]; 
    const lapse = setInterval(this.execute(result), 5000)
    clearInterval(lapse);
    // const anim = document.getElementById("cup");
    // anim.addEventListener("animationsend", AnimationListener, false);

    
  }  

  
  execute (result) {

    console.log(result);
    
    switch (result) {

      case "position1": 
        return (this.littleBall.setPosition(230),  
        this.cup1.isFull = true,
        this.cup1.animate());
      
      case "position2": 
        return (this.littleBall.setPosition(540), 
        this.cup2.isFull = true, 
        this.cup2.animate())

      case "position3":
        return (this.littleBall.setPosition(860), 
        this.cup3.isFull = true, 
        this.cup3.animate())
      
      default: console.log(typeof result); 
      break;
    }
  }
}

  let game = new Game();
  game.startGame();