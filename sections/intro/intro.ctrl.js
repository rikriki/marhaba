/**
 * Created by S706825 on 02/03/2015.
 */
uniformApp.controller('introCtrl', function($scope,$location,$timeout) {
    $scope.pageBg="";

    $timeout(function(){classie.add( document.getElementById("introBtn"), 'activate' );},10000);
    $scope.introClick = function(){
        classie.add(document.getElementById( 'ngViewed' ),"closed");
        $timeout(function(){$location.path("/00");},1000);

    }
})