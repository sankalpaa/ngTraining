training.controller('speakerController', function ($scope,$http) {

    $http.get('http://jsonplaceholder.typicode.com/users').success(function (data) {
            $scope.speakers = data;
        });
});