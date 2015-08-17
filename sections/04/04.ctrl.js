/**
 * Created by S706825 on 02/03/2015.
 */
uniformApp .controller('fourCtrl', function($scope,$timeout) {
    //$scope.pageBg="pageFour";
    $scope.activateMenu();
    $timeout(function(){
        classie.remove(document.getElementById( 'ngViewed' ) ,"closed");

        var tween = new TimelineMax({yoyo: true})
            .add(TweenMax.to('#contentView>h2', .3, {opacity:1,marginTop: 0}), 0)
            .set('#contentView>div,#contentView>ul,#contentView>b',{y:100})
            .add(TweenMax.to('#contentView>div', .3, {opacity:1,y:0,delay:.3}), 0)
            .add(TweenMax.to('#contentView>ul', .3, {opacity:1,y:0,delay:.6}), 0)
            .add(TweenMax.to('#contentView>b', .3, {opacity:1,y:0,delay:.9}), 0)
    },1000);
})