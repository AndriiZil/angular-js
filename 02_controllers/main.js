angular.module('app', [])
    .controller('myCtrl', ($scope) => {
        $scope.hello = 55;
        $scope.myBook = 'AngularJS';
    });