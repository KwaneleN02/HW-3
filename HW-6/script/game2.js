var imageIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
var blank = 'images/bottle.png';
var firstNumber = -1;
var secondNumber = -1;

//JSON Declaration
var player = {"firstname": "", "lastname":""}
//variable with a blank image
//adding an empty array
var actualImages = new Array();

function blank() {
    for (var i = 0; i < imageIds.length; i++) {
	document.getElementById(imageIds[i]).src = blank;
    }

}
var imagePaths = ["images/black.png","images/white.png","images/melissa.png","images/msblack.png",
"images/1.png","images/Sign.png","images/Stationery.png","images/Stationery1.png","images/Stationery2.png","images/iris.png",];

var count = 0;
while (count < 10) {
  var rand = Math.floor(Math.random() * imagePaths.length);
  if (!actualImages[rand]) {
    actualImages[rand] = imagePaths[rand];
    count++;
  }
}

function flipImage(n) 
{

  //make the second image disappear
  if(firstNumber>=0)
  {
    secondNumber = n;
    document.getElementById(imageIds(n)).src = actualImages[secondNumber];
  }
  else if(firstNumber < 0) //then the first image appears
  {
    firstNumber = n;
    document.getElementById(imageIds[firstNumber]).src = actualImages[firstNumber];
  }


  //check if images do not match
  if(actualImages[secondNumber] !=actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
    setTimeout(imagesDisappear, 1000); //After 1 second
  }

  //check to see if images match
  else if(actualImages[setondNumber]) == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0
  {
    firstNumber = -1;
    secondNumber = -1;
  }

}

function imagesDisappear()
{
  document.getElementById(imageIds[firstNumber]).src = blank;
  imagesDisappear();
  document.getElementById(imageIds[secondNumber]).src = blank;
  firstNumber = -1;
  secondNumber = -1;

}
    
//Add to the JSON from textboxes
function addToPlayer()
{
   var firstname=document.getElementById("txtfirstname").value;
   //add to local storage
   player.firstname = firstname;
   localStorage.setItem("playerInfo", JSON.stringify(player));
   window.location = "game2.html";
}

function playerInfo ()
{
  var playerInfomation = locationStorage.getItem(playerInfo);
  player = JSON.parse(playerInfomation);
  console.log(player.firstname);
}