const app = angular.module('app', []);

app.controller('myBooksCtrl', ($scope) => {
    $scope.showBook = () => {
        console.log('this is some book');
    }
});

app.controller('angularBookCtrl', ($scope) => {
    // $scope.showBook = () => {
    //     console.log('this is angular js book');
    // }
});

app.controller('emberBookCtrl', ($scope) => {

});