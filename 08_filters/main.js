const app = angular.module('app', []);

app.controller('mainCtrl', ($scope) => {
    $scope.money1 = '1.22$';
    $scope.money2 = '$2.33';
    $scope.money3 = '4.33';
});

app.filter('moneyFilter', () => {
    return function (str) {
        let lastChar = str.slice(-1);
        let firstChar = str.slice(0, 1);
        let slicedPart;

        if (lastChar === '$') {
            slicedPart = str.slice(0, str.length - 1);
            return '$' + slicedPart;
        } else if (firstChar === '$') {
            return str;
        } else {
            return '$' + str;
        }
    }
})