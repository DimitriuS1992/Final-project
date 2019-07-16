function regular_map() {
    var var_location = new google.maps.LatLng(53.676079, 23.838837);

    var var_mapoptions = {
        center: var_location,
        zoom: 17
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Grodno"
    });
}


google.maps.event.addDomListener(window, 'load', regular_map);
