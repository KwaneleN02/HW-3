//create an Array
let imagesArray =
 ["./img/code.jpg","./img/draw.jpg","./img/graph.jpg","./img/monitors.jpg","./img/toys.jpg","./img/desk.jpg","./img/graphic.jpg","./img/coffee.jpg"]

//define my class
let portrait = $(".slide")

//Set Intervals
let i = 0;
setInterval(function(){
    $(document).ready(function(){
        i = (i+1) % imagesArray.length
        portrait.fadeOut(3000,()=>{
            portrait.attr("src", imagesArray[i]);
        portrait.fadeIn(3000);
        });
    });
});


//For the body with animated transitions. 

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(document).ready(function()
  {
      $('#underline').slideDown(2000);
      $('#containerC').fadeIn(3000);
  });

  

