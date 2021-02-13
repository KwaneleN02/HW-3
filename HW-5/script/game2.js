var imagesIds = ["img1", "img2","img3","img4","img5","img6","img7","img8","img9","img10"];
// blank image path
var blank = "images/blank.png";

//empty array for the actual images 

var actualImg = new Array();

function Blanks(){
    createRandomImageArray();
    for (var i = 0; i < imagesIds.length; i++) 
    {
        document.getElementById(imagesIds[i]).src = blank
    }
}


    var imagePath = ["images/bottle.png","images/bottles.png","images/black.png","images/white.png","images/sign.png",
"images/Stationery.png","images/melissa.png","images/Stationery1.png","images/msblack.png","images/melissa.png",];

    var count= [0,0];

    while(actualImg.length < 10)
    {

        var randomnumber = Math.floor(Math.random() * imagePath.length)
        if(count[randomnumber] < 5)
        {
            actualImg.push(imagePath[randomnumber]);
    
            count[randomnumber] = count[randomnumber] + 1;
        }
    }

    function flipImage(number){
        document.getElementById(imagesIds[number]).src = actualImg[number];
    }
    
    


