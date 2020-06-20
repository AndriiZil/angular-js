const app = angular.module('app', ['ngMockE2E']);

app.run(function ($httpBackend) {
    console.log('RUN APP');

    let books = [
        { name: 'AngularJS' },
        { name: 'ReactJS' }
    ];

    console.log($httpBackend.whenGET('http://localhost:3001/books').respond(200, books));
    console.log($httpBackend.whenPOST('http://localhost:3001/books').respond(function (method, url, data) {
        let result = JSON.parse(data);
        books.push(result);
        return [200, result];
    }));
});

app.controller('mainCtrl', function ($http, $scope) {

    $http.get('http://localhost:3001/books')
        .then(({data}) => {
            console.log(data);
            $scope.books = data;
        })
        .catch(err => console.log(err))

    $scope.addBook = function (book) {
        console.log(book);
        $scope.books.push(book);
        $scope.book = null;

        $http.post('http://localhost:3001/books', book)
            .then(({data}) => console.log(data))
            .catch(err => console.log(err));
    }
})