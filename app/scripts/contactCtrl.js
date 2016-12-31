//Angular App Module and Controller
app.controller('MapCtrl', function ($scope) {
    $scope.directions = "https://www.google.com/maps/dir/My+location/5301+Goddard+Avenue,+Orlando,+FL+32810/data=!4m6!4m5!1m0!1m2!1m1!1s0x88e770949dc0dd75:0xe54c7199912137e9!3e0"; 
   var myLatLng = {lat: 28.607948, lng: -81.400525};
   $scope.markers = [];
   var infoWindow = new google.maps.InfoWindow();

	 var mapOptions = {
        zoom: 15,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

   $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    
    var createMarker = function (){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: myLatLng,
            title: "Peniel Christian Church"
        });
       
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2 class="map">' + marker.title + '</h2>' + "5301 Goddard Ave, Orlando, FL" + 
             '<br /><a href="https://www.google.com/maps/dir/My+location/5301+Goddard+Avenue,+Orlando,+FL+32810/data=!4m6!4m5!1m0!1m2!1m1!1s0x88e770949dc0dd75:0xe54c7199912137e9!3e0" target="_blank">Directions to here</a>');
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    createMarker(); 
   $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});