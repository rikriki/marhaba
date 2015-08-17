/**
 * Created by S706825 on 02/03/2015.
 */
uniformApp.controller('MainCtrl1', function($scope,$location,$timeout) {
    $scope.activateMenu();
    $scope.animate = true;
    $scope.pageClick = function(page){
        var navWrapper = document.getElementById("navWrapper");
        classie.remove( navWrapper.querySelector('section:nth-child(1)'), 'animate' );
        classie.remove( navWrapper.querySelector('section:nth-child(2)'), 'animate' );
        classie.remove( navWrapper.querySelector('section:nth-child(3)'), 'animate' );
        classie.add(document.getElementById( 'ngViewed' ) ,"closed");
        $timeout(function(){

            $location.path(page)
        },1000)

    }


})