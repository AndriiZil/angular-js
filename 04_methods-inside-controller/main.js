const app = angular.module('app', []);

app.controller('firstCtrl', ($scope, myFactory) => {
    $scope.myFactory = myFactory;
    $scope.hello = 'Hello World';

    $scope.getBookMark = () => {
        return 'My bookmark';
    };

    $scope.setHello = (text) => {
        $scope.hello = text;
    }
});

app.factory('myFactory', () => {
    return {
        hello: () => {
            return '*hello World';
        }
    }
})