
class Game {
  
  constructor () {
    
    this.sorteo = document.querySelector("#sorteo");
    this.cup1 = new Cup(230);
    this.cup2 = new Cup(540);
    this.cup3 = new Cup(860);
    this.littleBall = new LittleBall(230);
    this.userClick = false;
    this.buttonCup1 = document.querySelector("#cup1").addEventListener("click", this.cup1.animate);
    this.buttonCup2 = document.querySelector("#cup2").addEventListener("click", this.cup2.animate);
    this.buttonCup3 = document.querySelector("#cup3").addEventListener("click", this.cup3.animate);
    
  }
  
  startGame()  {

    this.littleBall.setPosition(230);
    this.cup1.animation();

    while (userClick == false) {
      this.random()
      // setInterval(this.random(), 2000)
    }
    this.bet();
    this.littleBall.disappear();
    //this.clickedCup.animation();
  }  

  random () {

    const posibilities = ["position1", "position2", "position3"];
    const result = posibilities[Math.floor(Math.random() * posibilities.length)]; 
    this.execute(result);
    //return this.sorteo.innerHTML = result;
  }  

  
  execute (result) {

    console.log(result);
    
    switch (result) {

      case "position1": 
        return (this.littleBall.setPosition(230),  
        this.cup1.isFull = true,
        this.cup1.animation());
      
      case "position2": 
        return (this.littleBall.setPosition(540), 
        this.cup2.isFull = true, 
        this.cup2.animation())

      case "position3":
        return (this.littleBall.setPosition(860), 
        this.cup3.isFull = true, 
        this.cup3.animation())
      
      default: console.log(typeof result); 
      break;
    }
  }
}
  game = new Game();
  game.random();