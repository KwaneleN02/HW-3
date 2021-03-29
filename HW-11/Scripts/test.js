$.ajaxSetup({beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType("application/json");
    }
  }
  });$(document).ready(function()

{
    $.getJSON("data/test.json", "data/square.json", function(results)
    {
        console.log(results);
        $.each(results.images, function(i, field)
        {
            $("#display").append("<img src='" + field.Image + "' />");
            var img = new Image();
            img.onload = function() 
            {
            ctx.drawImage(this, Math.random() * 200, 0);
            //ctx.drawImage(img, 10, 10, 150, 150)
            };
img.src = field.Image;
        });
    });

    //Second Json file. 

    $.getJSON("data/square.json", function(results)
    {
        console.log(results);
        $.each(results.images, function(i, field)
        {
            $("#display").append("<img src='" + field.Image + "' />");
            var img = new Image();

        });
    });
});
