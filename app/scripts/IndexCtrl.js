var app = angular.module("myApp", ['ngRoute', 'angular.filter', 'ngAnimate', 'ui.bootstrap', 'pascalprecht.translate']);

app.controller('NavCtrl', function($scope, $timeout, QueueService, $translate) {
    $scope.navItems = [
        {"topic": "About", "topicESP": "Acerca de Peniel", "url":"#/about", "subtopics":
            [{"title": "Vision", "topicESP":"Visión", "url": "#/about?topic=vision"}, {"title": "Meet the Pastors", "topicESP":"Conozca a los Pastores", "url": "#/about?topic=pastors"}]}, 
        {"topic": "Connect", "topicESP": "Conectar", "url":"#/connect", "subtopics": 
            [{"title": "Events", "topicESP": "Eventos", "url": "#/connect?topic=events"}, {"title": "Small Groups", "topicESP": "Grupos Pequeños", "url": "#/connect?topic=smallGroups"}]},
        {"topic": "Grow", "topicESP":"Crecer", "url":"#/grow", "subtopics": 
            [ {"title": "Kids", "topicESP":"Niños", "url": "#/ministry?topic=sparks"}, {"title": "Youth", "topicESP": "Jóvenes", "url": "#/ministry?topic=youth"}, {"title": "Women", "topicESP": "Mujeres", "url": "#/ministry?topic=women"}, {"title": "Men", "topicESP": "Hombres", "url": "#/ministry?topic=men"}]},
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
        slides = [{id:"image00", src:"./images/anniversityBanner.jpg"}];//, {id:"image01", src:"../images/vbs.jpg"}]; 
        
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
    var womenLink = '/#/ministry?topic=women', kidsLink = '/#/ministry?topic=sparks', mensLink = '/#/ministry?topic=men', youth ='/#/ministry?topic=youth', events = 'http://mypeniel.org/#/connect?topic=events'; 
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
        SUMMARY: "Peniel Christian Church is a united church focused on spreading the Gospel of Jesus Christ to the nations. We are united under one vision-REVIVAL-alongside our Senior Pastors, Rev. Dr.Luis Lopez and Rev. Marta Lopez.",
        BUTTON_TEXT_EN: 'English',
        BUTTON_TEXT_ESP: 'Spanish',
        CONTACT: 'CONTACT INFORMATION',
        DIRECTIONS: 'Directions to here', 
        SERVICE: 'SERVICE TIMES', 
        ABOUTITLE: 'About Peniel Christian Church',  
        ABOUT: 'Peniel Christian Church is a bilingual church located in Orlando, FL. La Iglesia Cristiana Peniel es una iglesia bilingüe localizada en Orlando, FL.', 
        VISION: 'Peniel Christian Church is a united church focused on spreading the Gospel of Jesus Christ to the nations. We are united under one vision–REVIVAL–alongside our senior pastors, Dr. Luis Lopez and Rev. Marta Lopez. Join us for any one of our services listed below.', 
        PASTORS: 'Meet the Pastors', 
        ABOUTSUBPAGES: 'About Subpages', 
        CONNECTSUBPAGES: 'Connect Subpages',
        CONNECTTITLE: 'Connect with Peniel Christian Church', 
        WELCOME: 'Welcome', 
        MINISTRIES: 'MINISTRIES', 
        GROW: 'GROW WITH PENIEL CHRISTIAN CHURCH!!', 
        MINISTRYTITLE: 'You fit right in!',
        MINISTRY: "There are many ways you can connect in the Revival at Peniel Christian Church. The first way to connect to the vision God has given Peniel Christian Church is through Small Groups. Congregational Care, Evangelism and Discipleship are needed in our daily lives. And in the church, it's crucial. People of similar interests meet for Bible study, projects, and social activities. In Peniel Christian Church, we believe relationships need to be real and relevant for all age groups. We need each other for encouragement, growth and accountability.",
        MINISTRY2: 'You have an opportunity to also learn more about the ministries that best fit your life stage, from kids ministry via <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS KIDS</a>, students to collegiate to young adults (20-30s) via <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">LIFE YOUTH</a> MINISTRIES, and even all other adults (30s+) via our <a href="' + mensLink + '" style="color:#ff6600">MEN&#39;S</a>/<a href="' + womenLink + '" style="color: rgb(255,0,102)">WOMEN&#39S</a> ministries. We invite you to find where you &#39;best-fit&#39; into Gods&#39; plan for your life!', 
        'TUESDAY': 'Tuesday', 
        'WEDNESDAY': 'Wednesday', 
        'SUNDAY': 'Sunday', 
        'FRIDAY': 'Friday', 
        VISIONTITLE: 'Vision/Mission',
        GROWSUMMARY1: 'Our desire is that you get involved and grow here at Peniel Christian Church. Here are some great ministries that will help you get on track to a developed and blessed life.', 
        GROWSUMMARY2: 'We desire and want to help you grow in your relationship with Jesus Christ. Even if you just accepted the Lord into your life or you have been saved for any amount of time, this is for YOU! From a young child in our <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS</a> ministry, or a growing young man or women involved in our <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">LIFE YOUTH</a> MINISTRY to even getting involved with our <a href="' + mensLink + '" style="color:#ff6600">Men&#39;s</a> and <a href="' + womenLink + '" style="color: rgb(255,0,102)">Women&#39;s</a> Ministries we offer a variety of great opportunities to develop in this blessed life. Visit our <span style="text-decoration:underline; color: blue"><a href="'+ events + '">Calendar</a></span> to find out what&#39;s coming up.',
        BILINGUALPRAYER: 'Bilingual Prayer Service',
        BILINGUALBIBLE: 'Bilingual Bible Study', 
        BILINGUALYOUTH: 'Bilingual Youth Service', 
        BILINGUALWORSHIP: 'Bilingual Worship Service',
        CLICKHERE: 'Click Here', 
        'VIEWCONNECTEVENTS': 'to view events occuring in Peniel Christian Church.', 
        'SMALLGROUPSDESP': "Peniel Small Groups. Any day. Any hour. Any place. Sharing Jesus. Building the Church.", 
        FACEBKLINK: 'Facebook Link', 
        LANGUAGE: 'Language', 
        FOCUSGROUP: 'Focus Group', 
        'PASTORLUIS': 'Welcome to Peniel Christian Church, our purpose is to bless you and ensure you achieve your place with God, serving him and enjoying his presence and power. I invite you to experiment God in the worship services, Sundays at 11 AM in the sanctuary, or that you may integrate to one of the many groups that the congregation has dispersed throughout all areas and almost every day of the week. There you will find people like you that care and encourage each week to proceed forward in the spiritual life, you only have to connect to determine which is closest to you. As the Senior Pastor I bless you and encourage you to draw near to God and enjoy his congregation in Peniel with all the intensity that your passion may have to love Jesus.', 
        'PASTORISSAC': "May God bless you in abundance with all the blessings God has poured out for you in response to your faithfulness!! My name is Pastor Isaac, the adminstrative Pastor, joined by my wife Pastor Kelly. It has been a blessing to experience all of the great moments of abundance that each member of Peniel has obtained and we look forward to YOURS! God has placed us in his path of Revival for a great purpose and we cannot do it without each of you or your faithfulness. Bless as God has blessed you, with what you have and you will see his wonders fulfill his promise to your hearts desire. He knows what you need, Trust in him and he will be faithful. Remember, 'The will of God will never take you, where the grace of God cannot protect you' Blessing", 
        'PASTORDANNY': 'Blessings! My name is Daniel but you can call me Danny.  I am married to my beautiful wife Jennifer and we have 3 precious girls.  We have the privilege of serving young people here at Peniel.  Its our passion to see people come to LIFE in Jesus and discover all that He has for them.  We believe God has called us to reach the youth to love, guide, and teach them of how to reach their potential in Jesus.  We invite you to come to LIFE!', 
        'PASTORJAMES': "Hello and God bless you! We are truly privileged to be a part of what God is doing in our church. If there's one thing I can tell you, no matter where you are or what you're dealing with, it's that Jesus is greater. Our lives would be nothing without Him. I've been married to my beautiful wife, Nathasha, since November 2013 and we have one son, Evan. We have been working in ministry for a long time and have been pastors over the ministry God has given us since 2015. If you would like any further information on Peniel Small Groups or anything else we can help you with, feel free to contact us at penielsmallgroups@gmail.com or visit our Facebook page at www.facebook.com/penielsmallgroups."
    }) 
    .translations('esp', {
        CHURCHNAME: "Iglesia Cristiana Peniel",
        'SMALLGROUPS': "Grupos Pequeños",
        JOINSMALL: "Busca un Grupo Pequeño",
        'EVENTS': "Eventos",
        VIEWEVENTS: "Vea los Próximos Eventos", 
        UPCOMINGEVENTS: "Próximos Eventos", 
        'GIVE': "Da en Línea",
        GIVENOW: "Da Ahora",
        'CONNECT': "Conéctese con Nosotros Socialmente", 
        SUMMARY: "La Iglesia Cristiana Peniel es un iglesia unida que se enfoca en predicar el evangelio de Jesucristo a los naciones. Estamos unidos bajo una visión-AVIVAMIENTO-con los pastores, Rev. Dr.Luis López y Rev. Marta Lopez.", 
        BUTTON_TEXT_EN: 'Inglés',
        BUTTON_TEXT_ESP: 'Español',
        CONTACT: 'INFORMACION DE CONTACTO', 
        DIRECTIONS: 'Dirección para llegar', 
        SERVICE: 'HORARIO DE SERVICIOS',
        ABOUTITLE: 'Acerca de la Iglesia Cristiana Peniel',  
        ABOUT: 'La Iglesia Cristiana Peniel es una iglesia bilingue localizada en Orlando, FL.',
        VISIONTITLE: 'Vision/Mision',
        VISION: 'La Iglesia Cristiana Peniel es un iglesia unida que se enfoca en predicar el evangelio de Jesucristo a las naciones. Estamos unidos bajo una visión-AVIVAMIENTO-con los pastores, Rev. Dr.Luis López y Rev. Marta López.',
        PASTORS: 'Conozca a los Pastores', 
        ABOUTSUBPAGES: 'Acerca de las Subpaginas', 
        CONNECTSUBPAGES: 'Conectar Subpaginas',
        CONNECTTITLE: 'Conectate con la Iglesia Cristiana Peniel', 
        WELCOME: "Bienvenido",
        MINISTRIES: 'MINISTERIOS', 
        GROW: 'CRECE CON LA IGLESIA CRISTIANA PENIEL!!', 
        MINISTRYTITLE: 'HAY LUGAR PARA TI!',
        MINISTRY: "Hay muchas formas en que te puedes conectar al Avivamiento en la Iglesia Cristiana Peniel. La primera forma de conectarte a la visión que Dios le ha dado a la Iglesia Cristiana Peniel es a través de los Grupos Pequeños. Cuidado Congregacional, Evangelismo y Discipulado son necesarios en nuestro diario vivir. En la iglesia, es esencial. Personas con intereses similares se unen para estudio bíblico, proyectos, y actividades sociales. En la Iglesia Cristiana Peniel, creemos que las relaciones necesitan ser reales y relevantes para todas las edades. Nos necesitamos unos a otros para ánimo, crecimiento y tomarse en cuenta los unos por los otros.", 
        MINISTRY2: 'Tú tienes oportunidad también para aprender más sobre los ministerios que toman en consideración la etapa de tu vida presentemente, desde ministerio de niños con <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS KIDS</a>, estudiantes de la intermedia hasta colegio y jóvenes adultos (20-30s) a través de <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">LIFE YOUTH</a> MINISTRY, y hasta todos los otros adultos (30’s+) a través de nuestros ministerios de <a href="' + mensLink + '" style="color:#ff6600">HOMBRES</a>/<a href="' + womenLink + '" style="color: rgb(255,0,102)">MUJERES</a>. Te invitamos a encontrar dónde mejor puedes ser impactado por el propósito de Dios en tu vida!', 
        'TUESDAY': 'Martes', 
        'WEDNESDAY': 'Miércoles', 
        'SUNDAY': 'Domingo', 
        'FRIDAY': 'Viernes', 
        GROWSUMMARY1: 'Nuestro deseo es que te envuelvas y puedas crecer aquí en la Iglesia Cristiana Peniel. Aquí hay varios ministerios que te ayudarán a desarrollarte y a vivir una vida bendecida.', 
        GROWSUMMARY2:  'Deseamos y queremos ayudarte crecer en tu relación con Jesucristo. Quizás recién aceptastes al Señor en tu vida o has sido salvo por un tiempo, esto es para TI! Desde los niños en nuestro ministerio de <a href="' + kidsLink + '" style="color: #ff66ff; text-transform: uppercase;">SPARKS</a>, o creciendo como un joven con nuestro ministerio de <a href="' + youth + '" style="color: #00cc66; text-transform: uppercase;">LIFE YOUTH</a>, hasta envolviéndote con nuestros ministerios de <a href="' + mensLink + '" style="color:#ff6600">Hombres</a> y <a href="' + womenLink + '" style="color: rgb(255,0,102)">Mujeres</a> ofrecemos una variedad de grandes oportunidades para desarrollarte en tu vida bendecida. Visita nuestro <span style="text-decoration:underline; color: blue"><a href="'+ events + '">Calendario</a></span> para ver qué evento se acerca.',
        BILINGUALPRAYER: 'Servicio de Oración Bilingue',
        BILINGUALBIBLE: 'Estudio Bíblico Bilingue', 
        BILINGUALYOUTH: 'Servicio de Jóvenes Bilingue', 
        BILINGUALWORSHIP: 'Servicio de Adoración Bilingue', 
        CLICKHERE: 'Seleccione aquí', 
        'VIEWCONNECTEVENTS': 'para ver los eventos que están ocurriendo en la Iglesia Cristiana Peniel.', 
        'SMALLGROUPSDESP': "Grupos Pequeños de Peniel. Cualquier Día. Cualquier Hora. Cualquier lugar. Compartiendo a Jesús. Edificando la Iglesia.",
        FACEBKLINK: 'Página de Facebook', 
        LANGUAGE: 'Idioma', 
        FOCUSGROUP: 'Grupo de Enfoque', 
        'PASTORLUIS': 'Bienvenido a la Iglesia Cristiana Peniel, nuestro propósito es bendecirle y lograr que usted encuentre su lugar con Dios, sirviéndole y disfrutando de su presencia y poder. Le invito a que pueda experimentar de Dios en los servicios de adoración, los Domingos a las 11 AM en el santuario, o que se integre a alguno de los muchos grupos que la congregación tiene diseminados por toda el área y casi todos los días de la semana. Allí encontrará personas como usted que se alientan y animan cada semana a seguir adelante en la vida espiritual, tan sólo conéctese para averiguar cuál es el más cercano a usted. Como Pastor Principal, le bendigo y le animo que se acerque a Dios y disfrute de la congregación Peniel con toda la intensidad que pueda tener la pasión por amar a Jesús.', 
        'PASTORISSAC': 'Que Dios te bendiga en su abundancia con todas las bendiciones que Dios ha derramado para ti en respuesta de tu fidelidad!! Mi nombre es Pastor Isaac, Pastor Administrativo, junto a mi esposa Pastora Kelly. Ha sido una bendición experimentar todos los grandes momentos de abundancia que cada miembro de Peniel ha tenido y esperamos ansiosamente el TUYO! Dios nos ha puesto en su camino de Avivamiento por un gran propósito y no lo podemos lograr sin cada uno de ustedes o su fidelidad. Bendice como Dios te ha bendecido, con lo que tienes y verás sus maravillas cumplir y su promesa en los deseos de tu corazón. El sabe lo que tú necesitas, Confía en él y él te será fiel. Recuerda, “La voluntad de Dios no te llevará donde la gracia de Dios no te cuidará.” Bendiciones.', 
        'PASTORDANNY': 'Bendiciones! Mi nombre es Daniel pero me puedes llamar Danny. Estoy casado con mi hermosa esposa Jennifer y tenemos 3 preciosas hijas. Tenemos el privilegio de servir a los jóvenes aquí en Peniel. Es nuestra pasión ver a las personas tener VIDA en Jesús y descubrir todo lo que él tiene para ellos. Creemos que Dios nos ha llamado para alcanzar a los jóvenes para amar, guiar, y enseñarles cómo alcanzar su potencial en Jesús. Te invitamos para tener VIDA!', 
        'PASTORJAMES': 'Hola y Dios te bendiga! Tenemos un gran privilegio en ser parte de lo que Dios está haciendo en nuestra iglesia. Si hay una cosa que te puedo decir, es que no importando donde estas o que estas pasando, Jesús es más grande. Nuestras vidas no serian nada sin El. Yo estado casado con mi hermosa esposa, Nathasha, desde Noviembre 2013 y ahora junto a nuestro hijo, Evan. Hemos trabajado en ministerio por mucho tiempo, siendo pastores sobre el ministerio que Dios nos ha dado desde el 2015. Si deseas mas informacion sobre los Grupos Pequenos de Peniel o en cualquier cosa en que le podamos ayudar, sientanse libres de contactarnos por penielsmallgroups@gmail.com o visiten nuestra pagina de Facebook por www.facebook.com/penielsmallgroups.'
}); 
   
    $translateProvider.preferredLanguage('en'); 
}]); //end of translation

