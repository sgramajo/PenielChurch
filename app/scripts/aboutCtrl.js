app.controller('aboutCtrl', function($scope, $location) {
    $scope.pastors = [{"id": 1, "name": "Senior Pastors Luis and Marta Lopez", "img":"../images/pastor2.jpg"}, 
    {"id": 2, "name": "Co-Pastors Joel and Francis Garcia", "img":"../images/DSCF1543.jpg", "stmt": ""}, 
    {"id": 3, "name": "Administrative Pastors Isaac and Kelly Rivera", "img":"../images/DSCF1538.jpg", "stmt": "May God bless you in abundance with all the blessings God has poured out for you in response to your faithfulness!! My name is Pastor Isaac, the adminstrative Pastor, joined by my wife Pastor Kelly. It has been a blessing to experience all of the great moments of abundance that each member of Peniel has obtained and we look forward to YOURS! God has placed us in his path of Revival for a great purpose and we cannot do it without each of you or your faithfulness. Bless as God has blessed you, with what you have and you will see his wonders fulfill his promise to your hearts desire. He knows what you need, Trust in him and he will be faithful. Remember, 'The will of God will never take you, where the grace of God cannot protect you' Blessing"}, 
    {"id": 4, "name": "Education Pastors Kelvin and Daphne Garcia", "img":"../images/DSCF1533.jpg", "stmt": ""}, 
    {"id": 5, "name": "Youth Pastors Danny and Jennifer Ortiz", "img":"../images/DSCF1530.jpg", "stmt": "Blessings! My name is Daniel but you can call me Danny.  I am married to my beautiful wife Jennifer and we have 2 precious girls and one on the way.  We have the privilege of serving young people here at Peniel.  Its our passion to see people come to LIFE in Jesus and discover all that He has for them.  We believe God has called us to reach the youth to love, guide, and teach them of how to reach their potential in Jesus.  We invite you to come to LIFE!"},
    {"id": 6, "name": "Small Group Pastors James and Nathasha Garcia", "img":"../images/DSCF1531.jpg", "stmt": "Hello and God bless you! We are truly privileged to be a part of what God is doing in our church. If there's one thing I can tell you, no matter where you are or what you're dealing with, it's that Jesus is greater. Our lives would be nothing without Him. I've been married to my beautiful wife, Nathasha, since November 2013 and we have one son, Evan. We have been working in ministry for a long time and have been pastors over the ministry God has given us since 2015. If you would like any further information on Peniel Small Groups or anything else we can help you with, feel free to contact us at penielsmallgroups@gmail.com or visit our Facebook page at www.facebook.com/penielsmallgroups."}]; 
    $scope.stmts = ""; 
    $scope.getParameterByName = function(sectionName) {
            var topic =  $location.url().split("?topic=")[1];
            if(topic == undefined && sectionName == '') 
            {
                    return true; 
            }
            return topic === sectionName;  
    }; 
    $scope.changeStmts = function(id){
        if($scope.pastors[id].stmt != "")
        {
                $scope.stmts = $scope.pastors[id].stmt; 
        }
        else
        {
                $scope.stmts = ""; 
        }
    }; 
});

