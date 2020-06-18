const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.name = 'Bob';
});

app.directive('fooBar', function () {
    return {
        restrict: 'E',
        transclude: true,
        // template: 'this is my super directive <div ng-transclude></div>',
        // template: 'this is my super directive <ng-transclude></ng-transclude>',
        link: function (scope, element, attrs, ctrl, transclude) {
            console.log('this is my direcive');
            transclude(scope, function (clone, scope) {
                console.log('!', clone, scope);
                element.append(clone);
            })
        }
    }
});