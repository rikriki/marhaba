angular.module('app.core',[])
.controller('MainCtrl', function($scope,$location,$window,$timeout) {

    var perspectiveWrapper = document.getElementById( 'perspective' );

    var w = angular.element($window);
    $scope.windowW = angular.element($window).width();
    $scope.windowH = angular.element($window).height();
    $scope.animate = true;
    $scope.page = "";
    $scope.navActivated = false;
    $scope.pageBg="home";
    $scope.intro = true;

    $scope.LeftBarSrc = "components/menu.tpl.html";
    $scope.navClick = function(page){
        $scope.navActivated = false;
        var viewWrapper = document.getElementById( 'ngViewed' );

        if($location.path() != page){
            classie.add(viewWrapper,"closed");
            $scope.page = page
        }else{
            classie.remove(viewWrapper,"closed");
        }
        classie.remove( perspectiveWrapper, 'animate' );
        $scope.intro = false;
    }
    $scope.activateMenu =function(){
        $scope.intro = false;
    }
    $scope.toggleNav=function(){
        $scope.navActivated= true
        classie.add( perspectiveWrapper, 'modalview' );
        // animate..
        setTimeout( function() { classie.add( perspectiveWrapper, 'animate' ); }, 25 );
    }
})