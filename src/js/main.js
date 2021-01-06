
let littleBall;
let littleBallPositions = [230, 540, 860];
let cup1;
let cup2;
let cup3;
let score;

function startGame() {
    
    littleBall = new component (15, 15, "red", 235, 230);
    cup1 = new component (70, 100, "img/cupTrileroUpDown.png", 220, 160, "image");
    cup3 = new component (70, 100, "img/cupTrileroUpDown.png", 540, 160, "image");
    cup2 = new component (70, 100, "img/cupTrileroUpDown.png", 860, 160, "image");
    score = new component ("30px", "Consolas", "green", 800, 50, "text");
    myGameArea.start();
    
}

let myGameArea = {
    
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1100;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[4]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    
    play : function() {
        
        let sorteo = Math.round(Math.random() * 3) + 1;
        littleBall.x = littleBallPositions[sorteo];
        switch (littleBallPositions) {
            case [0]: 
                cup1.show();
                break;
                case [1]: 
                cup2.show();
                break;
                case [2]:
                    cup3.show();
                    break;
                    
                }
            },
            
            stop : function() {
                clearInterval(this.interval);
            }
        }
        
        
        
        function component(width, height, color, x, y, type) {
            
            this.gameArea = myGameArea;
            this.type = type;
            
            if (type == "image") {
                this.image = new Image();
                this.image.src = color; 
            }
            
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            
            this.rotate = function () {
                ctx = myGameArea.context;
                if (type == "image") {
                    ctx.rotate(45 * Math.PI / 180);
                }
                return;
            }
            
            this.update = function() {
                ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width,
                this.height);
            } else {
                if (this.type == "text") {
                    ctx.font = this.width + " " + this.height;
                    ctx.fillStyle = color;
                    ctx.fillText(this.text, this.x, this.y);
                } else {
                    ctx.fillStyle = color;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }
        }
        
        this.moveBall = function() {

                        
            if (littleBall.x <= 235) {
                changeDirection = false;
            } else if (littleBall.x > 890) {
                changeDirection = true;
            }
            
            if (littleBall.x >= 235 && changeDirection == false) {
                littleBall.x += 10;
            } else if (changeDirection == true) {
                littleBall.x -= 10;
            }
        }
        
        
        this.show = function () {
            this.y = 80;
        }
        
    }
    
    function updateGameArea() {
    
    myGameArea.clear();
    littleBall.moveBall();
    littleBall.update();
    
    
    

    cup1.update();
    cup2.update();
    cup3.update();
    score.text = "SCORE: " + "-50 EUR";
    score.update();
}


// class Cup {

//     constructor (x, y) {
        
//         this.x = x;
//         this.y = y;
//         this.url = "../img/cupTrileroUpDown.png"
//     }
    
//     update() {
//         ctx = myGameArea.context;
//         this.drawCup(); 
//     }
    
//     drawCup() {
//         let img = this.url;
//         ctx.scale(0.2, 0.2);
//         ctx.rotate(180);
//         ctx.drawImage(img, 220, 160);
       
//     }
// }

// function Cup (x, y) {

        
//         this.x = x;
//         this.y = y;
//         this.img = document.getElementById('cup');
//         this.draw = function () {
//             ctx = myGameArea.context;
//             ctx.scale(1, 1);
//             ctx.rotate(180);
//             img = this.img;
//             ctx.drawImage(img, this.x, this.y);
//         }
// }