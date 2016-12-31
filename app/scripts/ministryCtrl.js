app.controller('ministryCtrl', function($scope) {
    $scope.getParameterByName = function(sectionName) {
        var topic =  $location.url().split("?topic=")[1];
        if(topic == undefined && sectionName == '') 
        {
                return true; 
        }
        return topic === sectionName;  
    }; 
     $scope.ministries = [
        {"group": "men", "image":"./images/Men.gif", "outline": "Men group ---- something here", "other": "More items ----- "}, 
        {"group": "youth", "image":"../images/Uth.gif", "outline": "Youth Group ----- something here", "other": "More items -----"},
        {"group": "women", "image":"../images/Womens.gif", "outline": "Women Group ----- something here", "other": "More items -----"}]; 
}); 
