var app = angular.module("myApp", []);

app.directive("navbar", function(){
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      templateUrl: "../navbar.html"
}});

app.directive("footer", function(){
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: "../footer.html"
}});

app.controller('showhidecntr', function($scope, $window) {
    $scope.hgt = $window.innerHeight;
})

//Angular App Module and Controller
app.controller('MapCtrl', function ($scope) {
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
            title: "Peniel Church"
        });
       
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + "5301 Goddard Ave, Orlando, FL");
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