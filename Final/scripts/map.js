function initMap()
{
  var location = {lat: 46.860060, lng:-113.992500};
  var map = new google.maps.Map(document.getElementById("map"), 
  {
    zoom: 8, 
    center: location
  });
  var college = new google.maps.Marker(
    {
        position: location,
        map:map
    });
}