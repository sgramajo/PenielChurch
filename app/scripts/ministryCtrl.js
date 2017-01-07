app.controller('ministryCtrl', function($scope, $location) {

     $scope.ministries = [
        {"group": "men", "image":"./images/Men.gif", "outline": "Welcome to the Mens ministry!! We are the Men of Courage like those of Gideons army. God has called each man including you to be the priest of the house which God has placed you. God needs men like YOU to make the difference in this generation through good deeds, willing heart and a brotherhood unique to this generation. Will you take up your staff and be a man of influence? This is your moment! Find a fellow brother and stand next to him to join in Gods army of the Gideon of today called Peniel Christian Church. We welcome you!!", "other": ""}, 
        {"group": "sparks", "image":"./images/Kids.gif", "outline": "Welcome to the Kid's Ministry!! We look forward to having you join us and through this ministry see Gods great love be spread. We need and welcome you to be a part of Gods GREAT revival in Peniel through this ministry. Help be an activist of Gods work and not a spectator. The difference is made by YOU!", "other": ""}, 
        {"group": "youth", "image":"../images/Uth.gif", "outline": "Lym Mission Statement - As Life Youth Ministries we are called by God to bring LIFE that is abundant in Christ our saviour to a DEAD world.  We carry on this mission through preaching the Word of God, evangelizing, small groups, and being ever present in our community. We strive not only to bring LIFE to Central Florida but to the world for that is what God has spoken.  Through this vision God has set over our Church (Peniel) which is REVIVAL we identify with the Spirit of God and its outpouring over on youth ministry.  All of these things will be the result of building the next generation of pastors, teachers, evangelists, prophets, and worshipers who would continue to spread the message of a powerful loving Jesus.  Simply put we ask the DEAD to  come to LIFE thru Christ!", "other": ""},
        {"group": "women", "image":"../images/Womens.gif", "outline": "Welcome to the Women's Ministry!! We look forward to having you join us and through this ministry see Gods great love be spread. We need and welcome you to be a part of Gods GREAT revival in Peniel through this ministry. Help be an activist of Gods work and not a spectator. The difference is made by YOU!", "other": ""}];
     
    $scope.ministryOutline = ""; 
    $scope.ministrySummary = ""; 
    $scope.ministryImage = ""; 
    $scope.$on("$routeChangeSuccess", function() {
        $scope.testing(); 
    });
    $scope.testing = function(){
        var topic =  $location.url().split("?topic=")[1];
        if(topic == undefined && sectionName == '') 
        {
                return true; 
        }
        var result = $scope.ministries.filter(function(json)
        {
            return json.group === topic;
        });

        if(result.length)
        {     
            $scope.ministryOutline = result[0].outline;  
            $scope.ministrySummary = result[0].other; 
            $scope.ministryImage = 'url(' + result[0].image + ') no-repeat center center';  
            //angular.element('#topSection').css('background', 'url(' + result[0].image + ') no-repeat center center');
        }
        return true;  
    }; 
}); 
