'use strict';

angular.module('smartTimeApp.watch', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/watch/:watchId', {
            templateUrl: '/routes/watch/watch.html',
            controller: 'WatchCtrl'
        });
    }])

    .controller('WatchCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
        var id = $routeParams.watchId;
        $http.get('data/smartwatch.json').success(function(data) {
            $scope.watch = _.find(data, function(el) {
                return el.id == id;
            });
            $scope.mainImgUrl = $scope.watch.pictureUrls[0];
            $scope.selectedColor = $scope.watch.colors[0];
            $scope.selectedScreenSize = $scope.watch.hasScreen ? $scope.watch.screenSizesMm[0] : undefined;
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImgUrl = imageUrl;
        };

        $scope.setColor = function(color) {
            $scope.selectedColor = color;
        }

        $scope.setScreenSize = function(screenSize) {
            $scope.selectedScreenSize = screenSize;
        }
    }]);