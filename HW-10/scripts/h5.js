var MyObject;
var myEnemy;

function startGame() {
    MyObject = new item(30, 30, "purple", 10, 120);
    myEnemy  = new item(10, 200, "Blue", 300, 120);    
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function item(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
    this.clash = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (MyObject.clash(myEnemy)) {
        myGameArea.stop();
    } else {
        myGameArea.clear();
        myEnemy.x -= 1;        
        myEnemy.update();
        MyObject.newPos();    
        MyObject.update();
    }
}

function Up() {
    MyObject.speedY = -1; 
}

function Down() {
    MyObject.speedY = 1; 
}

function Left() {
    MyObject.speedX = -1; 
}

function Right() {
    MyObject.speedX = 1; 
}

function clearmove() {
    MyObject.speedX = 0; 
    MyObject.speedY = 0; 
}