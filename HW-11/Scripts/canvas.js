var can = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var square1, square2, square3, square4, square5
var speed = 100;
var x = 0;
var y = 450;
var enemy1 = [square2, square3];
var enemy2 = [square4, square5];
var x1 = 550;
var y1 = 550;
var x2 = 400;
var y2 = 550;
var x3 = 550;
var y3 = 450;
var x4 = 400;
var y4 = 450;

setInterval(update, 1000 / 30);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  square1 = new square(x, y, 50, 50, "blue");
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
  square2 = new square(x2,y2,50,50,"green");
  ctx.fillStyle = square2.theColor;
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

  square3 = ctx.fillRect(x1, y1, 70, 50, 50);
  square4 = ctx.fillRect(x3, y3, 70, 50, 50);
  square5 = ctx.fillRect(x4, y4, 70, 50, 50);

  x1-=35
  x2-=35
  x3-=25
  x4-=25

  if (Math.abs(x1)>= 600)
  {
      x1 = 500;
  }
  if (Math.abs(x2)>= 600)
  {
      x2 = 500;
  }
  if (Math.abs(x3)>= 600)
  {
      x3 = 550;
  }
  if (Math.abs(x4)>= 600)
  {
      x4 = 550;
  }
 

}

$(document).ready(function() {
  $(this).keypress(function(event) 
  {
    var key = event.originalEvent.key;

    //Directions

    //moveRight
    if (key === "a") 
        {
        	x -= speed;
        }

    //moveLeft
    if (key === "d") 
        {
    	    x += speed;
        }
     //moveUp
    if (key === "w") 
        {
            y -= speed;
        }

    //moveDown
    if (key === "s") 
        {
        	y += speed;
        }
    


    //Barriers
    if (x > 550)
    {
        x = 550;
    }
    //Left Borders
    if (x < 0)
    {
        x = 0;
    }
    //Top Borders
      if (y > 550)
    {
        y = 550;
    }

    //Bottom Border
    if (y < 0)
    {
        y = 0;
    }
    var didCollide = hasCollided(square1, square2);
if(didCollide)
  {
    window.alert("ouch!");
  }
  })
});


  function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

