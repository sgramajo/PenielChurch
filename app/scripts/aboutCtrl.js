app.controller('aboutCtrl', function($scope, $location) {
    $scope.pastors = [{"id": 1, "name": "Senior Pastor Luis and Pastora Marta", "img":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22300%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F400x300%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_15594867807%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15594867807%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23777%22%2F%3E%3Cg%3E%3Ctext%20x%3D%22148.859375%22%20y%3D%22159%22%3E400x300%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}, 
    {"id": 2, "name": "Co-Pastor Joel and Pastora Francis", "img":"../images/DSCF1543.jpg", "stmt": ""}, 
    {"id": 3, "name": "Pastor Issac and Pastora Kelly", "img":"../images/DSCF1538.jpg", "stmt": ""}, 
    {"id": 4, "name": "Pastor Kelvin and Pastora Daphne", "img":"../images/DSCF1533.jpg", "stmt": ""}, 
    {"id": 5, "name": "Youth Pastor Danny and Pastora Jennifer", "img":"../images/DSCF1530.jpg", "stmt": "Blessings! My name is Daniel but you can call me Danny.  I am married to my beautiful wife Jennifer and we have 2 precious girls and one on the way.  We have the privilege of serving young people here at Peniel.  Its our passion to see people come to LIFE in Jesus and discover all that He has for them.  We believe God has called us to reach the youth to love, guide, and teach them of how to reach their potential in Jesus.  We invite you to come to LIFE!"},
    {"id": 6, "name": "Pastor Natasha and Pastora James", "img":"../images/DSCF1531.jpg", "stmt": "Hello and God bless you! We are truly privileged to be a part of what God is doing in our church. If there's one thing I can tell you, no matter where you are or what you're dealing with, it's that Jesus is greater. Our lives would be nothing without Him. I've been married to my beautiful wife, Nathasha, since November 2013 and we have one son, Evan. We have been working in ministry for a long time and have been pastors over the ministry God has given us since 2015. If you would like any further information on Peniel Small Groups or anything else we can help you with, feel free to contact us at penielsmallgroups@gmail.com or visit our Facebook page at www.facebook.com/penielsmallgroups."}]; 
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

