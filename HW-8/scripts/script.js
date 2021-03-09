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
        portrait.fadeOut(4000,()=>{
            portrait.attr("src", imagesArray[i]);
        portrait.fadeIn(4000);
        });
    });
});
//For second phase of images


$(document).ready(function(){
    $("#open").click(function(){
      $("#slider").slideDown("slow");
    });
    $("#flip").click(function(){
        $("#panel").slideDown();
      });
  });

$(document).ready(function()
{
    $(".hide").click(function()
    {
        $("#img1").fadeOut(1000);
        $("#img2").fadeOut(2000);
        $("#img3").fadeOut(3000);
        $("#img4").fadeOut(4000);
        $("#img5").fadeOut(5000);
        $("#img6").fadeOut(6000);
        $('#paragraph').delay(5000).fadeOut(400);

    });

    $(".hide").click(function()
    {
        $("#img1").fadeIn(1000);
        $("#img2").fadeIn(2000);
        $("#img3").fadeIn(3000);
        $("#img4").fadeIn(4000);
        $("#img5").fadeIn(5000);
        $("#img6").fadeIn(6000);
        $('#paragraph').delay(5000).fadeIn(400);

    });

});
