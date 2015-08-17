/**
 * Created by S706825 on 02/03/2015.
 */
uniformApp .controller('fiveCtrl', function($scope,$timeout) {

    $scope.activateMenu();
    $timeout(function(){
        classie.remove(document.getElementById( 'ngViewed' ) ,"closed");
        var tween = new TimelineMax({yoyo: true})
            .set('.videoContainer',{x:-400},.1)
            .set('#contentView div',{y:100},.1)
            .add(TweenMax.to('#contentView>h2', .3, {opacity:1,marginTop: 0}), 0)
            .add(TweenMax.to('#contentView div', .3, {opacity:1,y: 0}), .3)
            .add(TweenMax.to('.videoContainer', .8, {opacity:1,x:0}), .3)

    },1000);
})