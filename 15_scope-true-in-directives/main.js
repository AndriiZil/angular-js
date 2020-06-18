const app = angular.module('app', []);

app.controller('booksCtrl', function ($scope) {
    $scope.name = 'Hi';
    console.log('scope from controller', $scope);
});

app.directive('book', function () {

    return {
        scope: true,
        template: '<div>My name is {{ name }}<input type="name" ng-model="name"></div>',
        restrict: 'E',
        link: function (scope, element, attrs) {
            console.log('scope from directive', scope);
            console.log(scope.name);
        }
    }
});