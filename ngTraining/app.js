var training = angular.module('trainingApp', ['ngRoute']);
training.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/training', {
            templateUrl: 'training.html',
            controller:'trainingController'
        })
    .when('/speakers', {
        templateUrl: 'speakers.html',
        controller: 'speakerController'
    });
}
]);

training.directive('listItem', function() {
    return {
        restrict: 'E',
        scope : {
          name : '@'  
        },
        template : '<b><i>{{name}}</i></b>'
    }
});


