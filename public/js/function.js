// Dropdown 
$(".dropdown-menu li a").click(function(){
    $(this).parents(".btn-group").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".btn-group").find('.btn').val($(this).data('value'));
  });

// Calling Map
/**
 * Created by Sam Savong on 12/4/2017.
 */
$(function () {
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 11.525779, lng: 104.908512},
            zoom: 20,
        });

        // the sentence below are control Option
        var mapOptions = {
            center: new google.maps.LatLng(11.525779, 104.908512),
            zoom: 10,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: true
        };

        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        map.setMap;
        map.setTilt;
        // the three line below use to set up the marker at Phnom Penh
        var myCenter = new google.maps.LatLng(11.525779, 104.908512);
        var marker = new google.maps.Marker({position:myCenter});
    }

    // 
    var map;

        // Create a new blank array for all the listing markers.
        var markers = [];
        
        var filterindex = 0;

        function initMap() {

            // Constructor creates a new map - only center and zoom are required.
            map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 11.565830, lng: 104.888935},
            zoom: 13,
            gestureHandling: 'greedy'
            
            });

            // These are the real estate listings that will be shown to the user.
            // Normally we'd have these in a database instead.
            var locations = [
            {title: 'RUPP', location: {lat: 11.568937, lng: 104.890603}, type: 'buy', category: 'house'},
            {title: 'ITC', location: {lat: 11.571133, lng: 104.898276}, type: 'buy', category: 'land'},
            {title: 'A', location: {lat: 11.565791, lng: 104.894617}, type: 'rent', category: 'house'},
            {title: 'B', location: {lat: 11.574839, lng: 104.892785}, type: 'buy', category: 'house'},
            {title: 'C', location: {lat: 11.569621, lng: 104.906032}, type: 'rent', category: 'house'},
            {title: 'D', location: {lat: 11.566030, lng: 104.881001}, type: 'rent', category: 'land'},
            {title: 'E', location: {lat: 11.553001, lng: 104.882497}, type: 'buy', category: 'land'},
            {title: 'F', location: {lat: 11.562014, lng: 104.890362}, type: 'rent', category: 'house'},
            {title: 'G', location: {lat: 11.543779, lng: 104.919564}, type: 'buy', category: 'land'},
            {title: 'H', location: {lat: 11.586964, lng: 104.907545}, type: 'rent', category: 'house'},
            {title: 'I', location: {lat: 11.551507, lng: 104.867066}, type: 'buy', category: 'workplace'},
            {title: 'J', location: {lat: 11.571697, lng: 104.925098}, type: 'buy', category: 'workplace'},
            {title: 'K', location: {lat: 11.548049, lng: 104.907201}, type: 'rent', category: 'workplace'}
            ];

            var color = ['72c988', 'c972b3', '72b3c9', 'deb6a9', 'b96447', 'c4b9e4', 'b74661'];
            var iconString = ['home' , 'cemetery-grave' , 'glyphish_suitcase'];

            var largeInfowindow = new google.maps.InfoWindow();
            // The following group uses the location array to create an array of markers on initialize.
            for (var i = 0; i < locations.length; i++) {
                var typeMaker = locations[i].type;
                var categoryMarker = locations[i].category;
                // Style the markers a bit. This will be our listing marker icon.
                var defaultIcon;
                if(categoryMarker == 'house'){
                    defaultIcon = makeMarkerIcon(iconString[0], color[0]);
                }else if(categoryMarker == 'land'){
                    defaultIcon = makeMarkerIcon(iconString[1], color[1]);
                }else if(categoryMarker == 'workplace'){
                    defaultIcon = makeMarkerIcon(iconString[2], color[2]);
                }

                // Get the position from the location array.
                var position = locations[i].location;
                var title = locations[i].title;
                
                // Create a marker per location, and put into markers array.
                var marker = new google.maps.Marker({
                    position: position,
                    title: title,
                    animation: google.maps.Animation.DROP,
                    icon: defaultIcon,
                    type: typeMaker,
                    category: categoryMarker,
                    id: i
                    
                });
                
                //console.log(marker.type);
                // Push the marker to our array of markers.
                markers.push(marker);
                // Create an onclick event to open the large infowindow at each marker.
                marker.addListener('click', function() {
                    populateInfoWindow(this, largeInfowindow);
                });
                // Two event listeners - one for mouseover, one for mouseout,
                // to change the colors back and forth.
                markers.forEach(function (){
                    // Create a "highlighted location" marker color for when the user
                    // mouses over the marker.
                    var highlightedIcon;
                    if(markers[i].category == 'house'){
                        highlightedIcon = makeMarkerIcon(iconString[0], color[5]);
                    }else if(markers[i].category == 'land'){
                        highlightedIcon = makeMarkerIcon(iconString[1], color[5]);
                    }else if(markers[i].category == 'workplace'){
                        highlightedIcon = makeMarkerIcon(iconString[2], color[5]);
                    }
                    marker.addListener('mouseover', function() {
                        this.setIcon(highlightedIcon);
                    });
                })
                    
                markers.forEach(function(){
                    var defaultIcon;
                    if(markers[i].category == 'house'){
                        defaultIcon = makeMarkerIcon(iconString[0], color[0]);
                    }else if(markers[i].category == 'land'){
                        defaultIcon = makeMarkerIcon(iconString[1], color[1]);
                    }else if(markers[i].category == 'workplace'){
                        defaultIcon = makeMarkerIcon(iconString[2], color[2]);
                    }
                    //console.log(defaultIcon);
                    marker.addListener('mouseout', function() {
                    this.setIcon(defaultIcon);    
                    });
                });
            } // end loop

            showListings();
        } // end initMap

        // This function populates the infowindow when the marker is clicked. We'll only allow
        // one infowindow which will open at the marker that is clicked, and populate based
        // on that markers position.
        function populateInfoWindow(marker, infowindow) {
            // Check to make sure the infowindow is not already opened on this marker.
            if (infowindow.marker != marker) {
                infowindow.marker = marker;
                infowindow.setContent('<div>' + marker.title + '</div>');
                infowindow.open(map, marker);
                // Make sure the marker property is cleared if the infowindow is closed.
                infowindow.addListener('closeclick', function() {
                    infowindow.marker = null;
                });
            }
        }

        // This function will loop through the markers array and display them all.
        function showListings() {
            var bounds = new google.maps.LatLngBounds();
            // Extend the boundaries of the map for each marker and display the marker
            for (var i = 0; i < markers.length; i++) {
            
            markers[i].setMap(map);
            bounds.extend(markers[i].position);
            }
            map.fitBounds(bounds);
        }
        function filterlist(markertype, markercategory) {
            var bounds = new google.maps.LatLngBounds();
            // Extend the boundaries of the map for each marker and display the marker
            for (var i = 0; i < markers.length; i++) {
                if(markercategory == 'allCategory' || markertype == 'allType'){
                    if(markercategory == 'allCategory' && markertype == 'allType'){
                        showListings();
                    }
                    else if(markercategory == 'allCategory' && markertype != 'allType'){
                        markers.forEach(function (){
                            if(markers[i].type == markertype ){
                                markers[i].setMap(map);
                                bounds.extend(markers[i].position);
                            }
                        })
                        hidelistingsfilter(markertype , markercategory);
                    }else if(markercategory != 'allCategory' && markertype == 'allType'){
                        markers.forEach(function (){
                            if(markers[i].category == markercategory ){
                                markers[i].setMap(map);
                                bounds.extend(markers[i].position);
                            }
                        })
                        hidelistingsfilter(markertype , markercategory);
                    }
                }else{
                    markers.forEach(function (){
                        if(markers[i].type == markertype && markers[i].category == markercategory){
                            markers[i].setMap(map);
                            bounds.extend(markers[i].position);
                        }
                    })
                    hidelistingsfilter(markertype , markercategory);
                }
            }
            map.fitBounds(bounds);
        }

        // This function will loop through the listings and hide them all.
        function hideListings() {
            for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
            }
        }
        // This function will loop through the listings and hide the marker that we don't select.
        function hidelistingsfilter(markertype, markercategory) {
            for (var i = 0; i < markers.length; i++) {
                
                if(markercategory == 'allCategory' || markertype == 'allType'){
                    if(markercategory == 'allCategory' && markertype == 'allType'){
                        showListings();
                    }
                    else if(markercategory == 'allCategory' && markertype != 'allType'){
                        markers.forEach(function (){
                            if(markers[i].type != markertype ){
                                markers[i].setMap(null);
                            }
                        })
                    }else if(markercategory != 'allCategory' && markertype == 'allType'){
                        markers.forEach(function (){
                            if(markers[i].category != markercategory ){
                                markers[i].setMap(null);
                            }
                        })
                    }
                }else{
                    markers.forEach(function (){
                        if(markers[i].type != markertype || markers[i].category != markercategory){
                            markers[i].setMap(null);
                        }
                    })
                }
            }
        }

        // This function takes in a COLOR, and then creates a new marker
        // icon of that color. The icon will be 21 px wide by 34 high, have an origin
        // of 0, 0 and be anchored at 10, 34).
        function makeMarkerIcon(iconSting ,markerColor) {
            var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_xpin_icon&chld=pin|'+ iconSting + '|'+ markerColor +
            '|52B552',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(22,37));
            return markerImage;
        } // end function makerMarkerIcon

        function test(){
            var x = document.getElementById("filtertype");
            var typeValue = x.options[x.selectedIndex].value;
            var category = document.getElementById('Categoryfilter');
            var categoryValue = category.options[category.selectedIndex].value;
            console.log(typeValue);
            console.log(categoryValue);
            filterlist(typeValue, categoryValue);
        } // end function test

});