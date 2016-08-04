var app = angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.tpls']);
//https://github.com/simpulton/angularjs-greensock-slideshow/blob/master/images/image02.jpg
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

app.controller('MainCtrl', function ($scope, $timeout, QueueService) {
    var INTERVAL = 3000,
        slides = [{id:"image00", src:"./images/image00.jpg"},
        {id:"image01", src:"../images/vbs.jpg"}]; 
       
    $scope.ministries = [{image: "https://images.unsplash.com/photo-1431069767777-c37892aa0a07?dpr=1&auto=format&crop=entropy&fit=crop&w=1920&h=1275&q=80", 
        events:[{
            title:"Music / Musicos", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee      nulla assumenda shoreditch et."},
            {title:"Sound Tech", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}
        ]},
        
        {image: "https://images.unsplash.com/photo-1442115597578-2d0fb2413734?dpr=1&auto=format&crop=entropy&fit=crop&w=1920&h=1280&q=80", 
        events:[{title:"Youth Ministry", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."},
        {title:"Kid's Ministry", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}]},
        
        {image:"https://images.unsplash.com/photo-1415226581130-91cb7f52f078?dpr=1&auto=format&crop=entropy&fit=crop&w=1920&h=1440&q=80", 
        events: [{title:"Men / Caballeros", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."},
        {title:"Women / Damas", description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}]}];  

    $scope.descripEnglish = "Peniel Small Groups. Any day. Any hour. Any place. Sharing Jesus. Building the Church.";
    $scope.descripSpanish = "Peniel Grupos Pequenos. Cualquier dia. Cualquier hora. Cualquier lugar. Compatir a Jesus. Crecer la Iglesia.";  
    $scope.groups = [{lang: "Espanol", leader: "Jackeline Matias", focus: "Women/Damas", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"},
        {lang: "English", leader: "Willy Figueroa", focus: "Young Adult Guys/Varones Jovenes Adultos", day: "Monday/Lunes @ 7pm", meeting:"Altomonte Mall Food Court: 451 E Altomonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "Espanol/English", leader: "Ivan Sanchez", focus: "Men/Hombres", day: "Thursday/Jueves @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Kelly Felix", focus: "Young Adult Women/ Jovenes Adultas", day: "Monday/Lunes @ 6:3pm", meeting:"Menchies: 510 N Orlando Ave #102, Winter Park, FL 32789"}, 
        {lang: "English", leader: "Yadira Ortiz", focus: "Young Adult Ladies/Jovenes Adultas", day: "Monday/Lunes @ 7:30pm", meeting:"Barnes and Nobles (Altamonte Mall): 451 E Altamonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "Espanol", leader: "Monica Jarrin", focus: "Women/Damas", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Angelyn Fontanez", focus: "Middle & High School Girls/Damas Joevenes de escuela intermedia y superior", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "Espanol", leader: "Zoraida Roman", focus: "Women/Damas", day: "Thursday/Jueves @ 7pm", meeting:"McDonalds: 1028 Lee Rd, Orlando, FL 32810"}, 
        {lang: "Espanol/English", leader: "Sally Velasquez", focus: "Young Adult Women/ Jovenes Adultas", day: "Thursday/Jueves @ 6:30pm", meeting:"Barnes and Nobles (Altamonte Mall): 451 E Altamonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "English", leader: "Vernie Velasquez", focus: "Young Adult Guys/Varones Jovenes Adultos", day: "Monday/Lunes @ 7pm", meeting:"Dunkin Donuts: 300 S US Highway 17-92, Longwood, FL 32750"}, 
        {lang: "English", leader: "Antonio Fontanez", focus: "High School Guys/ Varones de escuela Superior", day: "Monday/Lunes @ 5:45pm", meeting:"ChickFilA: 8673 Summit Centre Way, Orlando, FL 32810"}, 
        {lang: "Espanol/English", leader: "Edgardo Rodriquez", focus: "Men/Caballeros", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}]; 

    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    function nextSlide() {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        $timeout(nextSlide, INTERVAL);
    }

    function setCurrentAnimation(animation) {
        $scope.currentAnimation = animation;
    }

    function isCurrentAnimation(animation) {
        return $scope.currentAnimation === animation;
    }

    function loadSlides() {
        QueueService.loadManifest(slides);
    }

    $scope.$on('queueProgress', function(event, queueProgress) {
        $scope.$apply(function(){
            $scope.progress = queueProgress.progress * 100;
        });
    });

    $scope.$on('queueComplete', function(event, slides) {
        $scope.$apply(function(){
            $scope.slides = slides;
            $scope.loaded = true;

            $timeout(nextSlide, INTERVAL);
        });
    });

    $scope.progress = 0;
    $scope.loaded = false;
    $scope.currentIndex = 0;
    $scope.currentAnimation = 'slide-left-animation';

    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;
    $scope.setCurrentAnimation = setCurrentAnimation;
    $scope.isCurrentAnimation = isCurrentAnimation;

    loadSlides();
});

app.factory('QueueService', function($rootScope){
    var queue = new createjs.LoadQueue(true);

    function loadManifest(manifest) {
        queue.loadManifest(manifest);

        queue.on('progress', function(event) {
            $rootScope.$broadcast('queueProgress', event);
        });

        queue.on('complete', function() {
            $rootScope.$broadcast('queueComplete', manifest);
        });
    }

    return {
        loadManifest: loadManifest
    }
})


app.controller('KitchenSinkCtrl',  function(moment, $scope, $http){
    var vm = this;
    vm.events = retrieveEvents(vm, $http); 
 
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.isCellOpen = true;

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
});

function retrieveEvents(vm, $http) {
    var calendarId = "potsh8cvmjmjl0tcbqcahpuorc@group.calendar.google.com";
    var apiKey = "AIzaSyDItVtuek3ZSj3vsafVOtHNfqMRmMD6Uk8";  
    var todayDate = new Date(); //Today Date
    var then = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDay();
     vm.events = [];  
    $http({
        method: 'GET',
        url: "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events?&timeMin=" + then + "T10%3A00%3A00-07%3A00&key=" + apiKey //maxResults=2500 -- add this before timeMin
        }).then(function (response) {
        var testing = angular.fromJson(response); 

        angular.forEach(testing.data.items, function(value, key) {
            var temp = (value.start && value.start.date)? value.start.date : (value.start && value.start.dateTime)? value.start.dateTime: null; 
            temp = (temp != null)? new Date(temp): null;  
            if(temp != null && todayDate < temp)                
            {
                vm.events.push({
                    title: value.summary,
                    type: 'info',
                    startsAt: new Date(temp),
                    endsAt: new Date((value.end && value.end.date)? value.end.date : (value.end && value.end.dateTime)? value.end.dateTime: null),
                    draggable: false,
                    resizable: false
                });
            }
        });
    });    
    return vm.events; 
}