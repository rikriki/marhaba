angular.module('app.route',['ngRoute'])
    .config(function($mdThemingProvider,$routeProvider) {
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('purple') // specify primary color, all
        // other color intentions will be inherited
        // from default
        $routeProvider
            .when('/',{
                templateUrl:'sections/intro/intro.tpl.html',
                controller:'introCtrl'
            })
            .when('/01',{
                templateUrl:'sections/01/01.tpl.html',
                controller:'oneCtrl'
            }).when('/00',{
                templateUrl:'sections/00/00.tpl.html',
                controller:'MainCtrl1'
            })
            .when('/02',{
                templateUrl:'sections/02/02.tpl.html',
                controller:'twoCtrl'
            })
            .when('/03',{
                templateUrl:'sections/03/03.tpl.html',
                controller:'threeCtrl'
            }).when('/04',{
                templateUrl:'sections/04/04.tpl.html',
                controller:'fourCtrl'
            }).when('/05',{
                templateUrl:'sections/05/05.tpl.html',
                controller:'fiveCtrl'
            }).when('/06',{
                templateUrl:'sections/06/06.tpl.html',
                controller:'sixCtrl'
            }).when('/07',{
                templateUrl:'sections/07/07.tpl.html',
                controller:'sevenCtrl'
            })

            .otherwise({
                redirectoTo:'/'
            })

    })