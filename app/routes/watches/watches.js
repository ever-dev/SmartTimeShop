'use strict';

angular.module('smartTimeApp.watches', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/watches', {
            templateUrl: '/routes/watches/watches.html',
            controller: 'WatchesCtrl'
        });
    }])

    .controller('WatchesCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/smartwatch.json').success(function(data) {
            $scope.watches = data;
        });
    }]);