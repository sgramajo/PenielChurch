app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "home.html"
    })
    .when('/connect', {
        templateUrl: 'connect.html',
        controller: 'connectCtrl'
    })
    .when('/grow', {
        templateUrl: 'grow.html'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
    })
    .when('/ministry',{
        templateUrl: 'ministry.html', 
        controller: 'ministryCtrl'
    });
});