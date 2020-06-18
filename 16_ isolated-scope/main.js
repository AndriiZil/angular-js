const app = angular.module('app', []);

app.controller('firstCtrl', function ($scope) {
    $scope.name = 'Hi';
    $scope.color = '#333333';

    $scope.reverse = function () {
        $scope.name = $scope.name.split('').reverse().join('');
    }
});

app.directive('fooBar', function () {

    return {
        scope: {
            name: '@', // read only
            color: '=', // two way binding
            reverse: '&' // From parent
        },
        template: '<div>My name is {{ name }}<input type="text" ng-model="name"></div>' +
        '<div>My color is {{ color }} <input type="text" ng-model="color"></div>' +
        '<button ng-click="reverse()">Reverse</button>',
        link: function ($scope, element, attrs) {
            console.log('fooBar');
        }
    }
});