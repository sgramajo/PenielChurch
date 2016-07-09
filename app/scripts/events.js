var app = angular.module("myApp", []);

//Sites that helped
//https://www.googleapis.com/calendar/v3/calendars/potsh8cvmjmjl0tcbqcahpuorc@group.calendar.google.com/events?key=AIzaSyDItVtuek3ZSj3vsafVOtHNfqMRmMD6Uk8
//https://developers.google.com/apis-explorer/#p/calendar/v3/calendar.events.list?calendarId=potsh8cvmjmjl0tcbqcahpuorc%2540group.calendar.google.com&timeMin=2016-04-03T10%253A00%253A00-07%253A00&_h=1&

app.controller('MainCtrl', function($scope, $http) {
    var calendarId = "potsh8cvmjmjl0tcbqcahpuorc@group.calendar.google.com";
    var apiKey = "AIzaSyDItVtuek3ZSj3vsafVOtHNfqMRmMD6Uk8";  
    var todayDate = new Date(); //Today Date
    var then = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDay(); 
    var iframe = '<iframe src="https://calendar.google.com/calendar/embed?src=potsh8cvmjmjl0tcbqcahpuorc%40group.calendar.google.com&ctz=America/New_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    $http({
        method: 'GET',
        url: "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events?&timeMin=" + then + "T10%3A00%3A00-07%3A00&key=" + apiKey //maxResults=2500 -- add this before timeMin
        }).then(function (response) {
           var testing = angular.fromJson(response); 
           $scope.myData = []; 
            
            angular.forEach(testing.data.items, function(value, key) {
                //There is inconsistency in start dates
                var temp = (value.start && value.start.date)? value.start.date : (value.start && value.start.dateTime)? value.start.dateTime: null; 
                temp = (temp != null)? new Date(temp): null;  
                if(temp != null && todayDate < temp)                
                {
                    $scope.myData.push(value);
                }
            });
            $scope.myData.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                var bDate = (b.start && b.start.date)? b.start.date : (b.start && b.start.dateTime)? b.start.dateTime: null;
                var aDate = (a.start && a.start.date)? a.start.date : (a.start && a.start.dateTime)? a.start.dateTime: null;  
                return new Date(aDate) - new Date(bDate);
            }); 
                
        });     
});

