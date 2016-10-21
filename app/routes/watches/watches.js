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

        $scope.orderField = undefined;
        $scope.orderReverse = false;

        $scope.sort = function(field) {
            $scope.orderReverse = $scope.orderField == field ? !$scope.orderReverse : false;
            $scope.orderField = field;
        }

        $scope.isSortUp = function (field) {
            return $scope.orderField == field && !$scope.orderReverse;
        }

        $scope.isSortDown = function (field) {
            return $scope.orderField == field && $scope.orderReverse;
        }
    }]);