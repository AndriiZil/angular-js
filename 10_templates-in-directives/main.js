const app = angular.module('app', []);

app.directive('fooBar', function () {
    let bookmarks = [
        { id: 1, name: 'AngularJS' },
        { id: 2, name: 'ReactJS' },
        { id: 3, name: 'VueJS' }
    ];

    return {
        template: '<div ng-repeat="bookmark in bookmarks">{{bookmark.name}}</div>',
        link: function ($scope, element, attrs) {
            console.log('fooBar');
            $scope.name = "Andrii";
            $scope.myBookmarks = bookmarks;
        }
    }
})