app.controller('ministryCtrl', function($scope, $location, $translate, $rootScope) { 
     $scope.ministries = [
        {"group": "men", "image":"./images/Men.jpg", "outlineEN": "Welcome to the Mens ministry!! We are the Men of Courage like those of Gideons army. God has called each man including you to be the priest of the house which God has placed you. God needs men like YOU to make the difference in this generation through good deeds, willing heart and a brotherhood unique to this generation. Will you take up your staff and be a man of influence? This is your moment! Find a fellow brother and stand next to him to join in Gods army of the Gideon of today called Peniel Christian Church. We welcome you!!", "outlineESP": "Bienvenido al Ministerio de Hombres! Somos los Hombres de Valor como aquellos del ejército de Gedeón. Dios ha llamado a cada hombre incluyendote a ti para ser al sacerdote del hogar que Dios te a puesto. Dios necesita hombres como TU para hacer la diferencia en esta generacion a traves de buenas obras, disposicion del corazon y hermandad unico a esta generacion. Tomará tu dominio y serás hombre de influencia? Este es tu momento! Únete a un hermano y párate con el para unirte a el ejercito de Dios como los Gedeones del hoy llamado Iglesia Cristiana Peniel. Te damos la bienvenida!!"}, 
        {"group": "sparks", "image":"./images/Kids.jpg", "outlineEN": "Welcome to the Kid's Ministry!! We look forward to having you join us and through this ministry see Gods great love be spread. We need and welcome you to be a part of Gods GREAT revival in Peniel through this ministry. Help be an activist of Gods work and not a spectator. The difference is made by YOU!", "outlineESP": "Bienvenido al ministerio de Ninos!! Estamos contentos en que te unas con nosotros y junto ver a través de este ministerio ver el grande amor de Dios se compartido. Necesitamos y te damos la bienvenida para ser parte del GRANDE avivamiento en Peniel a través de este ministerio. Ayuda a ser protagonista del trabajo de Dios y no sea espectador. TU haces la diferencia!"}, 
        {"group": "youth", "image":"../images/Uth2.jpg", "outlineEN": "Lym Mission Statement - As Life Youth Ministries we are called by God to bring LIFE that is abundant in Christ our Saviour to a DEAD world.  We carry on this mission through preaching the Word of God, evangelizing, small groups, and being ever present in our community. We strive not only to bring LIFE to Central Florida but to the world for that is what God has spoken.  Through this vision, REVIVAL, which God has set over our Church (Peniel), we identify with the Spirit of God and its outpouring over on youth ministry.  All of these things will be the result of building the next generation of pastors, teachers, evangelists, prophets, and worshipers who would continue to spread the message of a powerful loving Jesus. We ask the DEAD to come to LIFE through Christ!", "outlineESP": "Misión de ‘LYM’ - Como Life Youth Ministry somos llamado por Dios a traer VIDA en abundancia en Cristo nuestro Salvador a un mundo MUERTO. Seguimos esta misión a través de predicar la palabra de Dios, evangelizando, grupos pequeños, y estando presente en nuestra comunidad. Tenemos fervor para no solo traer VIDA a la Florida Central pero también a un mundo como Dios habló. A través de esta visión, AVIVAMIENTO, que Dios ha puesto sobre nuestra iglesia, nos identificamos con el Espíritu de Dios y su derramar sobre este ministerio de jóvenes. Todas estas cosas serán el resultado de edificar la próxima generación de pastores, maestros, evangelistas, profetas y adoradores lo cual continuarán compartiendo el mensaje del amor poderoso de Jesus. Pedimos que lo MUERTO RESUCITE a través de Cristo!"},
        {"group": "women", "image":"../images/Womens.jpg", "outlineEN": "Welcome to the Women's Ministry!! We look forward to having you join us and through this ministry see Gods great love be spread. We need and welcome you to be a part of Gods GREAT revival in Peniel through this ministry. Help be an activist of Gods work and not a spectator. The difference is made by YOU!", "outlineESP": "Bienvenido al ministerio de Ninos!! Estamos contentos en que te unas con nosotros y junto ver a través de este ministerio ver el grande amor de Dios se compartido. Necesitamos y te damos la bienvenida para ser parte del GRANDE avivamiento en Peniel a través de este ministerio. Ayuda a ser protagonista del trabajo de Dios y no sea espectador. TU haces la diferencia!"}];

    $scope.ministryOutline = ""; 
    $scope.ministrySummary = "Our desire is that you get involved and grow here at Peniel Christian Church. Here are some great ministries that will help you get on track to a developed and blessed life. We desire and want to help you grow in your relationship with Jesus Christ. Even if you just accepted the Lord into your life or you have been saved for any amount of time, this is for YOU! From a young child in our SPARKS ministry, or a growing young man or women involved in our Life Youth ministry to even getting involved with our Men's and Women's Ministries we offer a variety of great opportunities to develop in this blessed life. Visit our Calendar to find out what's coming up.";  
    $scope.ministryImage = ""; 
    $scope.$on("$routeChangeSuccess", function() {
        $scope.testing(); 
    });
    //get the summaries on the page
    $scope.testing = function(){
        //$window.alert($translate.use()); --- for debugging use 
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
            if($translate.use() == 'en')
                $scope.ministryOutline = result[0].outlineEN;
            else
                $scope.ministryOutline = result[0].outlineESP;   
            $scope.ministrySummary = result[0].other; 
            $scope.ministryImage = 'url(' + result[0].image + ') no-repeat center center';  
        }
        return true;  
    }; 
     $rootScope.$on('$translateChangeSuccess', function () {
        $scope.testing(); 
    });
}); 
