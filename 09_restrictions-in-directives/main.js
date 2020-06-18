const app = angular.module('app', []);

app.directive('fooBar', function () {
    return {
        restrict: 'EACM', // 'A', 'E', 'EA', 'C', 'M'
        link: function () {
            console.log('fooBar');
        }
    }
});

// element 'E'
// attribute 'A'
// class 'C'
// comment 'M'