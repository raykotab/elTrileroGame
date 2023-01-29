
// let littleBall;
// let cup1;
// let cup2;
// let cup3;
// let score;

// function startGame() {
    
//     littleBall = new component (15, 15, "green", 235, 230);
//     cup1 = new component (70, 100, "img/cupTrileroUpDown.png", 220, 160, "image");
//     cup3 = new component (70, 100, "img/cupTrileroUpDown.png", 540, 160, "image");
//     cup2 = new component (70, 100, "img/cupTrileroUpDown.png", 860, 160, "image");
//     score = new component ("30px", "Consolas", "red", 800, 50, "text");
//     myGameArea.start();
//     //myGameArea.play();
    
// }

// let myGameArea = {
    
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 1100;
//         this.canvas.height = 300;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[4]);
//         //this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
    
//     play : function() {
        
//         let littleBallPositions = [230, 540, 860];
//         let sorteo = Math.round(Math.random() * 3) + 1;
//         littleBall.x = littleBallPositions[sorteo];
//         switch (littleBallPositions) {
//             case [0]: 
//                 cup1.show();
//                 break;
//             case [1]: 
//                 cup2.show();
//                 break;
//             case [2]:
//                 cup3.show();
//                 break;
                    
//         }
//     },
            
//     stop : function() {
//         clearInterval(this.interval);
//     }
// }
        
// // function everyinterval(n) {
// //     if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
// //     return false;
// // }

// // let gameSteps = [];
        
// function component(width, height, color, x, y, type) {
            
//     this.gameArea = myGameArea;
//     this.type = type;
    
//     if (type == "image") {
//         this.image = new Image();
//         this.image.src = color; 
//     }
    
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
    
    
//     this.update = function() {
        
//         ctx = myGameArea.context;
//         if (type == "image") {
//             ctx.drawImage(this.image,
//                 this.x,
//                 this.y,
//                 this.width,
//                 this.height);
//         } else {
//             if (this.type == "text") {
//                 ctx.font = this.width + " " + this.height;
//                 ctx.fillStyle = color;
//                 ctx.fillText(this.text, this.x, this.y);
//             } else {
//                 ctx.fillStyle = color;
//                 ctx.fillRect(this.x, this.y, this.width, this.height);
//              }
//         }
//     }
        
//     this.moveBall = function() {                
//         if (littleBall.x <= 235) {
//             changeDirection = false;
//         } else if (littleBall.x > 890) {
//             changeDirection = true;
//         }
            
//         if (littleBall.x >= 235 && changeDirection == false) {
//             littleBall.x += 10;
//         } else if (changeDirection == true) {
//             littleBall.x -= 10;
//         }
//     }
             
//     this.showResult = function () {

//         if (this.type == "image" && this.y >= 160) {
//             changeDirection = false;
//         } else if (this.y <= 100) {
//             changeDirection = true;
//         }
            
//         if (this.type == "image" && this.y >= 160 && changeDirection == false) {
//             this.y -= 10;
//         } else if (changeDirection == true) {
//             this.y += 10;
//         }
//         // this.cupUp = function () {
//         // this.y = 120;
//         // }
//         // this.result = setInterval(this.cupDown = function () {
//         //     this.y = 160;
//         //     }, 2000);
        
//     }
        
// }
    
// function updateGameArea() {
    
//     myGameArea.clear();
//     //littleBall.moveBall();
//     littleBall.update();
//     cup1.showResult();
//     cup1.update();
//     cup2.update();
//     cup3.update();
//     score.text = "SCORE: " + "-50 EUR";
//     score.update();
// }




// // // Show an element
// // var show = function (elem) {
// // 	elem.style.display = 'block';
// // };

// // // Hide an element
// // var hide = function (elem) {
// // 	elem.style.display = 'none';
// // };