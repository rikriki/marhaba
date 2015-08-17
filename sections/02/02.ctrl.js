/**
 * Created by S706825 on 02/03/2015.
 */
uniformApp.controller('twoCtrl', function($scope,$timeout) {

    $scope.activateMenu();
    $timeout(function(){
        classie.remove(document.getElementById( 'ngViewed' ) ,"closed");
        var tween = new TimelineMax({yoyo: true})
            .add(TweenMax.to('#contentView>h2', .3, {opacity:1,marginTop: 0}), 0)
            .add(TweenMax.to('#contentView div', .3, {opacity:1,marginTop: 0,delay:.3}), 0)
    },1000);
})