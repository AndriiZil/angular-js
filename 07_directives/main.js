const app = angular.module('app', []);

// app.directive('foo', function () {
//     return function ($scope, element, attrs) {
//         console.log('This is my directive');
//     }
// });

// app.directive('foo', function () {
//     return {
//         link: function ($scope, element, attrs) {
//             console.log('This is my directive');
//             console.log('Scope', $scope);
//             console.log('Scope', element);
//             console.log('Scope', attrs);
//             element.text('this is my magic directive.')
//         }
//     }
// });

app.directive('foo', function () {
    return {
        link: function ($scope, element, attrs) {
            element.on('click', function () {
                if (element.text() === 'foo') {
                    element.text('bar');
                } else {
                    element.text('foo');
                }
            })
        }
    }
});