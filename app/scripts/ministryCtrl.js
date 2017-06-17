app.controller('ministryCtrl', function($scope, $location, $translate, $rootScope) { 
     $scope.ministries = [
        {"group": "men", "image":"./images/Men.jpg", "outlineEN": "Welcome to the Mens ministry!! We are the Men of Courage like those of Gideons army. God has called each man including you to be the priest of the house which God has placed you. God needs men like YOU to make the difference in this generation through good deeds, willing heart and a brotherhood unique to this generation. Will you take up your staff and be a man of influence? This is your moment! Find a fellow brother and stand next to him to join in Gods army of the Gideon of today called Peniel Christian Church. We welcome you!!", "outlineESP": "Bienvenido al Ministerio de Hombres! Somos los Hombres de Valor como aquellos del ejército de Gedeón. Dios ha llamado a cada hombre incluyendote a ti para ser al sacerdote del hogar que Dios te a puesto. Dios necesita hombres como TU para hacer la diferencia en esta generacion a traves de buenas obras, disposicion del corazon y hermandad unico a esta generacion. Tomará tu dominio y serás hombre de influencia? Este es tu momento! Únete a un hermano y párate con el para unirte a el ejercito de Dios como los Gedeones del hoy llamado Iglesia Cristiana Peniel. Te damos la bienvenida!!"}, 
        {"group": "sparks", "image":"./images/Kids.jpg", "outlineEN": "Welcome to the Kid's Ministry!! We look forward to having you join us and through this ministry see Gods great love be spread. We need and welcome you to be a part of Gods GREAT revival in Peniel through this ministry. Help be an activist of Gods work and not a spectator. The difference is made by YOU!", "outlineESP": "Bienvenido al ministerio de Niños!! Estamos gran en que te unas con nosotros y juntos ver a través de este ministerio el gran amor de Dios compartido. Te damos la bienvenida y queremos que seas parte del GRAN avivamiento en Peniel a través de este ministerio. Sé un protagonista del trabajo de Dios y no un espectador. TU haces la diferencia!"}, 
        {"group": "youth", "image":"../images/Uth2.jpg", "outlineEN": "Lym Mission Statement - As Life Youth Ministries we are called by God to bring LIFE that is abundant in Christ our Saviour to a DEAD world.  We carry on this mission through preaching the Word of God, evangelizing, small groups, and being ever present in our community. We strive not only to bring LIFE to Central Florida but to the world for that is what God has spoken.  Through this vision, REVIVAL, which God has set over our Church (Peniel), we identify with the Spirit of God and its outpouring over on youth ministry.  All of these things will be the result of building the next generation of pastors, teachers, evangelists, prophets, and worshipers who would continue to spread the message of a powerful loving Jesus. We ask the DEAD to come to LIFE through Christ!", "outlineESP": "Misión de ‘LYM’ - Como Life Youth Ministry somos llamados por Dios a traer VIDA en abundancia en Cristo nuestro Salvador a un mundo MUERTO. Seguimos esta misión a través de predicar la palabra de Dios, evangelizando, Grupos Pequeños, y estando presente en nuestra comunidad. Tenemos fervor para no solo traer VIDA a la Florida Central pero también a un mundo como Dios habló. A través de esta visión, AVIVAMIENTO, que Dios ha puesto sobre nuestra iglesia, nos identificamos con el Espíritu de Dios y su derramar sobre este ministerio de jóvenes. Todas estas cosas serán el resultado de edificar la próxima generación de pastores, maestros, evangelistas, profetas y adoradores los cuales continuarán compartiendo el mensaje del amor poderoso de Jesús. Pedimos que lo MUERTO RESUCITE a través de Cristo!"},
        {"group": "women", "image":"../images/Womens.jpg", "outlineEN": "Today as never before, the women feel overwhelmed with responsibilities and different problems to manage pressures of life and many women feel isolated and alone. They seek someone to take care of them, comfort them and listen to them; they need desperately the body of Christ. She wants to know that she is not alone and needs the hope that a personal relationship with Jesus will proportion her life.Here in Peniel you will be able to encounter the love of Jesus represented in the women of God. We have meetings the last Friday of each month with different topics that relate to the woman and also we meet in Small Groups on different days and places throughout the city.It is said, \"Women understand women\". Allow us to bless your life, uniting you with the ministry. You are welcome", "outlineESP": "Hoy como nunca antes, las mujeres se sienten abrumadas con responsabilidades y diferentes problematicás para manejar las presiones de la vida y muchas mujeres se sienten aisladas y solas. Y están buscando a alguien que la cuide, aliente y escuche: necesita desesperadamente el Cuerpo de Cristo. Ella quiere saber que no está sola, y necesita la esperanza que una relación personal con Jesús peude proporcionar. Aquí en Peniel podrás encontrar el amor de Jesús representado en las mujeres de Dios. Tenemos reuniones el último viernes de cada mes, con diferentes temas de actualidad para la muer y también nos reuniomos en Grupos Pequeños en diferentes días, horas y lugares de la cuidad. Se dice que \"Las mujeres comprenden a las mujeres\".Permítenos bendecir tu vida, uniéndote a este ministerio. Eres bienvenida. "}];

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
