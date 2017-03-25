app.controller('connectCtrl', function($scope, $location, $http) {
     $scope.seeAll = false; 
     $scope.columns = ["Leader","Meeting Place", "Days/Times"];
     $scope.smallGroups = [{lang: "Spanish", leader: "Jackeline Matias", focus: "Women/Mujeres", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"},
        {lang: "English", leader: "Ivaneshka Sanchez", focus: "Young Adult/Jovenes Adultas", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"},
        {lang: "Spanish/English", leader: "Hector Ortiz", focus: "Men/Hombres", day: "Thursday/Jueves @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "Spanish", leader: "Jessica Torres", focus: "Women/Mujeres", day: "Thursday/Jueves @ 7pm", meeting:"Dunkin Donuts: 801 Lee Rd, Orlando, FL 32810"}, 
        {lang: "English", leader: "Manny Rivera", focus: "High School & College Age", day: "Monday/Lunes @ 7pm", meeting:"ChickFilA: 8673 Summit Centre Way, Orlando, FL 32810"}, 
        {lang: "English", leader: "Kelly Felix", focus: "Young Adult Women/Jovenes Adultas", day: "Friday/Viernes @ 5pm", meeting:"Menchies: 510 N Orlando Ave #102, Winter Park, FL 32789"},
        {lang: "English", leader: "Yadira Ortiz", focus: "Young Adult Women/Jovenes Adultas", day: "Monday/Lunes @ 7:30pm", meeting:"Barnes and Nobles (Altamonte Mall): 451 E Altamonte Dr, Altamonte Springs, FL 32701"}, 
        {lang: "Spanish", leader: "Monica Jarrin", focus: "Women/Mujeres", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Angelyn Fontanez", focus: "Young Adult Women/Jovenes Adultas", day: "Monday/Lunes @ 7pm", meeting:"Starbucks: 2425 W State Rd 434, Longwood, FL 32779"}, 
        {lang: "Spanish", leader: "Zoraida Roman", focus: "Women/Mujeres", day: "Thursday @ 7pm", meeting:"McDonalds: 1028 Lee Rd, Orlando, FL 32810"}, 
        {lang: "Spanish/English", leader: "Mary Bautista", focus: "Women/Mujeres", day: "Thursday/Jueves @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}, 
        {lang: "English", leader: "Antonio Fontanez", focus: "Young Adult Men/Varones Jovenes", day: "Monday/Lunes @ 7pm", meeting:"Starbucks: 2425 W State Rd 434, Longwood, FL 32779"}, 
        {lang: "Spanish/English", leader: "Pastor James", focus: "Men/Hombres", day: "Monday/Lunes @ 7pm", meeting:"Panera Bread: 200 S State Rd 434, Altamonte Springs, FL 32714"}];
        
        $scope.getParameterByName = function(sectionName) {
                var topic =  $location.url().split("?topic=")[1];
                if(topic == undefined && sectionName == '') 
                {
                        return true; 
                }
                return topic === sectionName;  
        }; 
      
})

