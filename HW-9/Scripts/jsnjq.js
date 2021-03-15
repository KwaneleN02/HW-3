$(document).ready(function () {
  $.getJSON("data/book.json", function (data) {

    //I love Arrays!  
    var arrItems = [];  
      $.each(data, function (index, value) {
          arrItems.push(value);       
      });

      // Pulling in my data (fingers crossed!).
      var book = [];
      for (var i = 0; i < arrItems.length; i++) {
          for (var key in arrItems[i]) {
              if (book.indexOf(key) === -1) {
                  book.push(key);
              }
          }
      }

      // This is for my Table
      var table = document.createElement("table");

      var tr = table.insertRow(-1); 

      for (var i = 0; i < book.length; i++) {
          var th = document.createElement("th");
          th.innerHTML = book[i];
          tr.appendChild(th);
      }

      for (var i = 0; i < arrItems.length; i++) {

          tr = table.insertRow(-1);

          for (var j = 0; j < book.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = arrItems[i][book[j]];
          }
      }

      //Table to contain and display my data
      var divContainer = document.getElementById("displayInfo");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
  });
});