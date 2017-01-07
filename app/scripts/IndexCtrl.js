var app = angular.module("myApp", ['ngRoute', 'angular.filter', 'ngAnimate', 'ui.bootstrap']);

app.controller('NavCtrl', function($scope, $timeout, QueueService) {
    $scope.navItems = [
        {"topic": "About", "url":"#/about", "subtopics":
            [{"title": "Vision", "url": "#/about?topic=vision"}, {"title": "Meet the Pastors", "url": "#/about?topic=pastors"}, {"title": "Church Info", "url": "#/about?topic=info"}]}, 
        {"topic": "Connect", "url":"#/connect", "subtopics": 
            [{"title": "Events", "url": "#/connect?topic=events"}, {"title": "Small Groups", "url": "#/connect?topic=smallGroups"}]},
        {"topic": "Grow", "url":"#/grow", "subtopics": 
            [ {"title": "Kids", "url": "#/ministry?topic=sparks"}, {"title": "Youth", "url": "#/ministry?topic=youth"}, {"title": "Women", "url": "#/ministry?topic=women"}, {"title": "Men", "url": "#/ministry?topic=men"}]},
        {"topic": "Giving", "url":"https://pushpay.com/pay/penielchristianchurch/_pwyNHDRmDJVkAk_E_Qjmw"}, 
        {"topic": "Contact", "url":"#/contact"}]; 
    $scope.times = [{"day": "Tuesday", "time": "7:00pm - 8:00pm", "type": "Prayer Service"}, {"day": "Wednesday", "time": "7:30pm - 9:30pm", "type": "Bible Service"}, 
                    {"day": "Friday", "time": "7:00pm - 9:30pm", "type": "Youth Service"}, {"day": "Sunday", "time": "11:00am - 1:30pm", "type": "Sunday Service"}]; 
    $scope.churchName = "Peniel Christian Church";
    $scope.giving = "https://pushpay.com/pay/penielchristianchurch/bohOQ6p1wcEC0X_Bgk2Yag";  
      //slideshow
        var INTERVAL = 3000,
        slides = [{id:"image00", src:"./images/peniel.jpg"}];//, {id:"image01", src:"../images/vbs.jpg"}]; 
        
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
}); 