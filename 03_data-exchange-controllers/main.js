const app = angular.module('app', []);

app.controller('firstController', ($scope, myFactory) => {
    console.log('firstCtrl');
    $scope.myFactory = myFactory;
    $scope.hello = 'Hello world';
});

app.controller('secondController', ($scope, myFactory) => {
    console.log('secondCtrl');
    $scope.myFactory = myFactory;
    $scope.hello = 'Hello world';
});

app.factory('myFactory', () => {
    return {
        hello: 'Hello World'
    }
})