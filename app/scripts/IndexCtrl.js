var app = angular.module("myApp", ['ngRoute', 'angular.filter', 'ngAnimate', 'ui.bootstrap', 'pascalprecht.translate']);

app.controller('NavCtrl', function($scope, $timeout, QueueService, $translate) {
    $scope.navItems = [
        {"topic": "About", "topicESP": "Acerca de", "url":"#/about", "subtopics":
            [{"title": "Vision", "topicESP":"Visión", "url": "#/about?topic=vision"}, {"title": "Meet the Pastors", "topicESP":"Conozca a los Pastores", "url": "#/about?topic=pastors"}]}, 
        {"topic": "Connect", "topicESP": "Conectar", "url":"#/connect", "subtopics": 
            [{"title": "Events", "topicESP": "Eventos", "url": "#/connect?topic=events"}, {"title": "Small Groups", "topicESP": "Grupo Pequeños", "url": "#/connect?topic=smallGroups"}]},
        {"topic": "Grow", "topicESP":"Crecer", "url":"#/grow", "subtopics": 
            [ {"title": "Kids", "topicESP":"Niños", "url": "#/ministry?topic=sparks"}, {"title": "Youth", "topicESP": "Jovenes", "url": "#/ministry?topic=youth"}, {"title": "Women", "topicESP": "Damas", "url": "#/ministry?topic=women"}, {"title": "Men", "topicESP": "Hombres", "url": "#/ministry?topic=men"}]},
        {"topic": "Giving", "topicESP": "Dar", "url":"https://pushpay.com/pay/penielchristianchurch/_pwyNHDRmDJVkAk_E_Qjmw"}]; 
    $scope.giving = "https://pushpay.com/pay/penielchristianchurch/bohOQ6p1wcEC0X_Bgk2Yag";  
      $scope.directions = "https://www.google.com/maps?q=from+here+to+5301+Goddard+Ave+Orlando,+Florida+32810&ion=1&espv=2&bav=on.2,or.r_cp.&bvm=bv.146094739,d.eWE&biw=1517&bih=708&dpr=0.9&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjEtPL-gvfRAhWESCYKHQUtBtkQ_AUIBigB"; 
      //translating
      $scope.changeLanguage = function(langKey){
          $translate.use(langKey); 
          //change the navbar
          angular.forEach($scope.navItems, function(value, key) {
                var temp = value.topic; 
                value.topic = value.topicESP; 
                value.topicESP = temp; 
                angular.forEach(value.subtopics, function(subValue, key) {
                    var temp = subValue.title;
                    subValue.title = subValue.topicESP; 
                    subValue.topicESP = temp;
                }); 
            });
      }; 
      
      //slideshow
        var INTERVAL = 3000,
        slides = [{id:"image00", src:"./images/peniel.jpg"}];//, {id:"image01", src:"../images/vbs.jpg"}]; 
        
        function setCurrentSlideIndex(index) {
                $scope.currentIndex = index;
        }

        function isCurrentSlideIndex(index) {
                return $scope.currentIndex === index;
        }

        function nextSlide() {
                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
                $timeout(nextSlide, INTERVAL);
        }

        function setCurrentAnimation(animation) {
                $scope.currentAnimation = animation;
        }

        function isCurrentAnimation(animation) {
                return $scope.currentAnimation === animation;
        }

        function loadSlides() {
                QueueService.loadManifest(slides);
        }

        $scope.$on('queueProgress', function(event, queueProgress) {
                $scope.$apply(function(){
                $scope.progress = queueProgress.progress * 100;
                });
        });

        $scope.$on('queueComplete', function(event, slides) {
                $scope.$apply(function(){
                $scope.slides = slides;
                $scope.loaded = true;

                $timeout(nextSlide, INTERVAL);
                });
        });

        $scope.progress = 0;
        $scope.loaded = false;
        $scope.currentIndex = 0;
        $scope.currentAnimation = 'slide-left-animation';

        $scope.setCurrentSlideIndex = setCurrentSlideIndex;
        $scope.isCurrentSlideIndex = isCurrentSlideIndex;
        $scope.setCurrentAnimation = setCurrentAnimation;
        $scope.isCurrentAnimation = isCurrentAnimation;

        loadSlides();     
}); 

app.factory('QueueService', function($rootScope){
    var queue = new createjs.LoadQueue(true);

    function loadManifest(manifest) {
        queue.loadManifest(manifest);

        queue.on('progress', function(event) {
            $rootScope.$broadcast('queueProgress', event);
        });

        queue.on('complete', function() {
            $rootScope.$broadcast('queueComplete', manifest);
        });
    }

    return {
        loadManifest: loadManifest
    }
}); 

app.config(['$translateProvider', function ($translateProvider){
    var womenLink = '/#/ministry?topic=women', kidsLink = '/ministry?topic=sparks', mensLink = '/#/ministry?topic=men', youth ='/#/ministry?topic=youth', events = 'http://mypeniel.org/#/connect?topic=events'; 
    $translateProvider.translations('en', {
        CHURCHNAME: "Peniel Christian Church",
        'SMALLGROUPS': "Small Groups", 
        JOINSMALL: "Join a Small Group",
        'EVENTS': "Events", 
        VIEWEVENTS: "View Upcoming Events", 
        UPCOMINGEVENTS: "Upcoming Events", 
        'GIVE': "Give Online",
        GIVENOW: "Give Now",
        'CONNECT': "Connect with Us Socially",
        SUMMARY: "Peniel Christian Church is a united church focused on spreading the Gospel of Jesus Christ to the nations. We are united under one vision-REVIVAL-alongside our Senior Pastors, Rev. Dr.Luis Lopez and Dr. Marta Lopez.",
        BUTTON_TEXT_EN: 'English',
        BUTTON_TEXT_ESP: 'Spanish',
        CONTACT: 'CONTACT INFORMATION',
        DIRECTIONS: 'Directions to here', 
        SERVICE: 'SERVICE TIMES', 
        ABOUTITLE: 'About Peniel Christian Church',  
        ABOUT: 'Peniel Christian Church is a bilingual church located in Orlando, FL. La Iglesia Cristiana Peniel es una iglesia bilingüe localizada en Orlando, FL.', 
        VISION: 'Peniel Christian Church is a united church focused on spreading the Gospel of Jesus Christ to the nations. We are united under one vision–REVIVAL–alongside our senior pastors, Dr. Luis Lopez and Dr. Marta Lopez. Join us for any one of our services listed below.', 
        PASTORS: 'Meet the Pastors', 
        ABOUTSUBPAGES: 'About Subpages', 
        CONNECTSUBPAGES: 'Connect Subpages',
        CONNECTTITLE: 'Connect with Peniel Christian Church', 
        WELCOME: 'Welcome', 
        MINISTRIES: 'MINISTRIES', 
        GROW: 'GROW WITH PENIEL CHRISTIAN CHURCH!!', 
        MINISTRYTITLE: 'You fit right in!',
        MINISTRY: "There are many ways you can connect in the Revival at Peniel Christian Church. The first way to connect to the vision God has given Peniel Christian Church is through Small Groups. Congregational Care, Evangelism and Discipleship are needed in our daily lives. And in the church, it's crucial. People of similar interests meet for Bible study, projects, and social activities. In Peniel Christian Church, we believe relationships need to be real and relevant for all age groups. We need each other for encouragement, growth and accountability.",
        MINISTRY2: "You have an opportunity to also learn more about the ministries that best fit your life stage, from kids ministry via SPARKS KIDS, students to collegiate to young adults (20-30s) via LIFE UTH MINISTRIES, and even all other adults (30's+) via our MENS/WOMENS ministries. We invite you to find where you 'best-fit' into Gods' plan for your life!", 
        'TUESDAY': 'Tuesday', 
        'WEDNESDAY': 'Wednesday', 
        'SUNDAY': 'Sunday', 
        'FRIDAY': 'Friday', 
        VISIONTITLE: 'Vision/Mission',
        GROWSUMMARY1: 'Our desire is that you get involved and grow here at Peniel Christian Church. Here are some great ministries that will help you get on track to a developed and blessed life.', 
        GROWSUMMARY2: 'We desire and want to help you grow in your relationship with Jesus Christ. Even if you just accepted the Lord into your life or you have been saved for any amount of time, this is for YOU! From a young child in our <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS</a> ministry, or a growing young man or women involved in our <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">Life Youth</a> ministry to even getting involved with our <a href="' + mensLink + '" style="color:#ff6600">Men&#39;s</a> and <a href="' + womenLink + '" style="color: rgb(255,0,102)">Women&#39;s</a> Ministries we offer a variety of great opportunities to develop in this blessed life. Visit our <span style="text-decoration:underline; color: blue"><a href="'+ events + '">Calendar</a></span> to find out what&#39;s coming up.',
        BILINGUALPRAYER: 'Bilingual Prayer Service',
        BILINGUALBIBLE: 'Bilingual Bible Study', 
        BILINGUALYOUTH: 'Bilingual Youth Service', 
        BILINGUALWORSHIP: 'Bilingual Worship Service',
        CLICKHERE: 'Click Here', 
        'VIEWCONNECTEVENTS': 'to view events occuring in Peniel Christian Church.', 
        'SMALLGROUPSDESP': "Peniel Small Groups. Any day. Any hour. Any place. Sharing Jesus. Building the Church.", 
        FACEBKLINK: 'Facebook Link', 
        LANGUAGE: 'Language', 
        FOCUSGROUP: 'Focus Group'
    }) 
    .translations('esp', {
        CHURCHNAME: "Iglesia Cristiana Peniel",
        'SMALLGROUPS': "Grupo Pequeños",
        JOINSMALL: "Busca un Grupo Pequeños",
        'EVENTS': "Eventos",
        VIEWEVENTS: "Vea los Proximos Eventos", 
        UPCOMINGEVENTS: "Proximos Eventos", 
        'GIVE': "Da en Linea",
        GIVENOW: "Da Ahora",
        'CONNECT': "Conectese con Nosotros Socialmente", 
        SUMMARY: "Iglesia Cristiana Peniel es un iglesia unida que enfoca en predicar el evangelio de Jesucristo a los naciones. Estamos unidos bajo una visión-AVIVAMIENTO-con los pastores, Rev. Dr.Luis López y Dr. Marta Lopez.", 
        BUTTON_TEXT_EN: 'Ingles',
        BUTTON_TEXT_ESP: 'Espanol',
        CONTACT: 'INFORMACIÓN DE CONTACTO', 
        DIRECTIONS: 'Direcciones para llegar', 
        SERVICE: 'TEMPO DE SERVICIO',
        ABOUTITLE: 'Acerca de la Iglesia Cristiana Peniel',  
        ABOUT: 'La Iglesia Cristiana Peniel es una iglesia bilingue localizada en Orlando, FL.',
        VISIONTITLE: 'Visión/Misión',
        VISION: 'Iglesia Cristiana Peniel es un iglesia unida que enfoca en predicar el evangelio de Jesucristo a los naciones. Estamos unidos bajo una visión-AVIVAMIENTO-con los pastores, Rev. Dr.Luis López y Dr. Marta López.',
        PASTORS: 'Conozca a los Pastores', 
        ABOUTSUBPAGES: 'Acerca de las Subpáginas', 
        CONNECTSUBPAGES: 'Conectar Subpáginas',
        CONNECTTITLE: 'Conectate con la Iglesia Cristiana Peniel', 
        WELCOME: "Bienvenido",
        MINISTRIES: 'MINISTERIOS', 
        GROW: 'CRECE CON LA IGLESIA CRISTIANA PENIEL!!', 
        MINISTRYTITLE: 'HAY LUGAR PARA TI!',
        MINISTRY: "Hay muchas formas en que te puedes conectar a el Avivamiento en la Iglesia Cristiana Peniel. La primera forma de conectarte a la visión que Dios le ha dado a la Iglesia Cristiana Peniel es a través de los grupos pequeños. Cuidado Congregacional, Evangelismo y Discipulado son necesarios en nuestro diario vivir. En la iglesia, es esencial. Personas con intereses similares se unen para estudio bíblico, proyectos, y actividades sociales. En la Iglesia Cristiana Peniel, creemos que relaciones necesitan ser real y relevante para todas las edades. Nos necesitamos unos a otros para animo, crecimiento y tomar cuenta uno por los otros.", 
        MINISTRY2: "Tu tienes oportunidad para también aprender más sobre los ministerios que toma en considera la etapa de tu vida presentemente, desde ministerio de niños con SPARKS KIDS, estudiantes de la intermedia hasta colegio y jóvenes adultos (20-30s) a través de LIFE YOUTH MINISTRY, y hasta todos los otros adultos (30’s+) a través de nuestros ministerios de HOMBRE/MUJERES. Te invitamos a encontrar donde mejor puede ser impactado por el propósito de Dios en tu vida!", 
        'TUESDAY': 'Martes', 
        'WEDNESDAY': 'Miercoles', 
        'SUNDAY': 'Domingo', 
        'FRIDAY': 'Viernes', 
        GROWSUMMARY1: 'Nuestro deseo es que te envuelvas y puedas crecer aquí en la Iglesia Cristiana Peniel. Aquí hay varios ministerios que te ayudarán alinearte para ser desarrollado y vivir una vida bendecida.', 
        GROWSUMMARY2:  'Deseamos y queremos ayudarte crecer en tu relación con Jesucristo. Quizas recien aceptastes a el Señor en tu vida o has sido salvo por un tiempo, esto es para TI! Desde adolescente en nuestro ministerio de <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS</a>, o creciendo como un joven con nuestro ministerio de <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">Life Youth</a>, hasta envolviendote con nuestros ministerios de <a href="' + mensLink + '" style="color:#ff6600">Hombres</a> y <a href="' + womenLink + '" style="color: rgb(255,0,102)">Mujeres</a> ofrecemos una variedad de grandes oportunidades para desarrollarte en tu vida bendecida. Visite nuestro <span style="text-decoration:underline; color: blue"><a href="'+ events + '">Calendario</a></span> para ver qué evento se acerca.',
        BILINGUALPRAYER: 'Servicio de Oración Bilingüe',
        BILINGUALBIBLE: 'Estudio Bíblico Bilingüe', 
        BILINGUALYOUTH: 'Servicio de Jovenes Bilingüe', 
        BILINGUALWORSHIP: 'Servicio de Adoración Bilingüe', 
        CLICKHERE: 'Seleccione aquí', 
        'VIEWCONNECTEVENTS': 'para ver los eventos ocurriendo en la Iglesia Cristiana Peniel.', 
        'SMALLGROUPSDESP': "Grupos Pequeños de Peniel. Cualquier Día. Cualquier Hora. Cualquier lugar. Compartiendo a Jesus. Edificando la Iglesia.",
        FACEBKLINK: 'Página de Facebook', 
        LANGUAGE: 'Idioma', 
        FOCUSGROUP: 'Grupo de Enfoque'
}); 
   
    $translateProvider.preferredLanguage('en'); 
}]); //end of translation

