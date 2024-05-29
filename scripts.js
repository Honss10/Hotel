function initMap() {
    var hotelLocation = { lat: 7.885603017918785, lng: -76.63515524500862 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: hotelLocation
    });
    var marker = new google.maps.Marker({
        position: hotelLocation,
        map: map
    });
}

window.onload = initMap;

