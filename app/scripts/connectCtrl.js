app.controller('connectCtrl', function($scope, $location, $http) {
     $scope.seeAll = false; 
     $scope.columns = ["Leader","Meeting Place", "Days/Times"];
     $scope.smallGroupsDesp = "Peniel Small Groups. Any day. Any hour. Any place. Sharing Jesus. Building the Church."; 
     $scope.smallGroups = [{lang: "Spanish", leader: "Jackeline Matias", focus: "Women", day: "Monday @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"},
        {lang: "English", leader: "Willy Figueroa", focus: "Young Adult Men", day: "Monday @ 7pm", meeting:"Altamonte Mall Food Court: 451 E Altamonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "Spanish/English", leader: "Hector Ortiz", focus: "Men", day: "Thursday @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Kelly Felix", focus: "Young Adult Women", day: "Monday @ 6:3pm", meeting:"Menchies: 510 N Orlando Ave #102, Winter Park, FL 32789"}, 
        {lang: "English", leader: "Yadira Ortiz", focus: "Young Adult Women", day: "Monday @ 7:30pm", meeting:"Barnes and Nobles (Altamonte Mall): 451 E Altamonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "Spanish", leader: "Monica Jarrin", focus: "Women", day: "Monday @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Angelyn Fontanez", focus: "Middle & High School Ladies", day: "Monday @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "Spanish", leader: "Zoraida Roman", focus: "Women", day: "Thursday @ 7pm", meeting:"McDonalds: 1028 Lee Rd, Orlando, FL 32810"}, 
        {lang: "Spanish/English", leader: "Pastor Nathasha", focus: "Young Adult Women", day: "Thursday @ 6:30pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Antonio Fontanez", focus: "High School Men", day: "Monday @ 5:45pm", meeting:"ChickFilA: 8673 Summit Centre Way, Orlando, FL 32810"}, 
        {lang: "Spanish/English", leader: "Edgardo Viera", focus: "Men", day: "Monday @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}];
        
        $scope.getParameterByName = function(sectionName) {
                var topic =  $location.url().split("?topic=")[1];
                if(topic == undefined && sectionName == '') 
                {
                        return true; 
                }
                return topic === sectionName;  
        }; 
      
})

