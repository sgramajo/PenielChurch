app.controller('aboutCtrl', function($scope, $location) {

    $scope.stmts = ""; 
    $scope.getParameterByName = function(sectionName) {
            var topic =  $location.url().split("?topic=")[1];
            if(topic == undefined && sectionName == '') 
            {
                    return true; 
            }
            return topic === sectionName;  
    };
      
});

/*Directives- */
app.directive('popover', function () {
    return {
        restrict:'A',
        scope: { item: '=popover' },
        link: function(scope, element, attrs){
            scope.$watch('item', function(item) { 
                $(element).popover({ 
                    //content: "HEre"// item.tooltip
                });
            });
        }
    }
})