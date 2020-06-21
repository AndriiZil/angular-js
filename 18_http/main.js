const app = angular.module('app', []);

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