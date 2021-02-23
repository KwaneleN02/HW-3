var imageIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
var blank = 'images/bottle.png';
var firstNumber = -1;
var secondNumber = -1;

//JSON Declaration
var player = {"firstname": "", "lastname":""}
//variable with a blank image
//adding an empty array
var actualImages = new Array();

// changed the name of the function so it wouldn't conflict with the variable name
function createBlank() {
  // need to call a function to fill out all the actual images
  insertImages();
    for (var i = 0; i < imageIds.length; i++) {
	document.getElementById(imageIds[i]).src = blank;
    }

}

// this function will fill the actualImages array
function insertImages()
{


  // changed a few image names so that it would match what was in the images folder
  var imagePaths = ["images/msblack.png","images/bottles.png","images/melissa.png","images/msblack.png",
  "images/1.png","images/iris.png","images/melissa.png","images/bottles.png","images/1.png","images/iris.png"];

  // need an array to keep track of how many times an image has been put into the memory game; we need 10 actual images
  var count = [0,0,0,0,0,0,0,0,0,0];
  while (actualImages.length < 10) {

    var rand = Math.floor(Math.random() * imagePaths.length);
   
    // check to see if the image has only been entered less than two times
    if (count[rand] < 2) {
      // add the image to the actual image array
      actualImages.push(imagePaths[rand]);
      // increase the count at that index
      count[rand]++;
    }
  }
}
function flipImage(n) 
{

console.log(n);
  document.getElementById(imageIds[n]).src = actualImages[n];

  if(firstNumber>=0)
  {
    secondNumber = n;
    document.getElementById(imageIds[n]).src = actualImages[secondNumber];
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
  else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
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


function imagesDisappear()
{
  document.getElementById(imageIds[firstNumber]).src = blank;
  document.getElementById(imageIds[secondNumber]).src = blank;
  firstNumber = -1;
  secondNumber = -1;

}


    
//Add to the JSON from textboxes
function addToPlayer()
{
   var firstname=document.getElementById("txtfirstName").value;
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

