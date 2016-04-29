var training = angular.module('trainingApp', []);
training.controller('trainingController', function ($scope) {
    $scope.trainings = [];
    $scope.add = function (name, duration) {
        $scope.trainings.push({ Name: name, Duration: duration });
        $scope.training.name = '';
        $scope.training.duration = 4;

    }
});