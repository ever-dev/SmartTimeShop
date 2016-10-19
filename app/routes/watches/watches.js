'use strict';

angular.module('smartTimeApp.watches', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/watches', {
            templateUrl: '/routes/watches/watches.html',
            controller: 'WatchesCtrl'
        });
    }])

    .controller('WatchesCtrl', ['$scope', function($scope) {
        $scope.name = 'asd';
    }]);