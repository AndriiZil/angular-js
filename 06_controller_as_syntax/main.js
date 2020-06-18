const app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    this.myLesson = 'Lesson';
    this.addLesson = function () {
        console.log('addLesson');
    }

    $scope.mainCtrl = this // The same as AS syntax
});

app.controller('firstCtrl', function () {
    this.myLesson = 'Lesson1';
});

app.controller('secondCtrl', function () {
    this.myLesson = 'Lesson2';
});