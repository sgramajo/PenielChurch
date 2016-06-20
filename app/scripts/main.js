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
