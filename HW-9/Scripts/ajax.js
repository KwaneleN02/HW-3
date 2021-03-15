var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myBook = JSON.parse(this.responseText);
    document.getElementById("information").innerHTML = myBook.name;
  }
};
xmlhttp.open("GET", "data/headers.json", true);
xmlhttp.send(); 