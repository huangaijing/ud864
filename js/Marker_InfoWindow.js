// Create a map variable
var map;
// Function to initialize the map within the map div
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.74135, lng: -73.99802 },
        zoom: 14
    });
    // Create a single latLng literal object.
    var singleLatLng = { lat: 40.74135, lng: -73.99802 };
    // TODO: Create a single marker appearing on initialize -
    // Create it with the position of the singleLatLng,
    // on the map, and give it your own title!
    var marker = new google.maps.Marker({
        map: map,
        position: singleLatLng,
        title: "First Try!",
        animation: google.maps.Animation.DROP
    });

    // TODO: create a single infowindow, with your own content.
    // It must appear on the marker
    var infoWindow = new google.maps.InfoWindow();
    // TODO: create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!

    marker.addListener('click', function() {
        // populateInfoWindow(this, infoWindow);
        var marker = this;
        infoWindow.setContent('<div>' + marker.position + '</div>');
        infoWindow.open(map, marker);
    });
};

initMap();
