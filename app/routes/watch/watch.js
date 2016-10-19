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
        });

        $scope.setImage = function ($event, imageUrl) {
            $scope.mainImgUrl = imageUrl;
            var targetParent = $($event.target).parent();
            targetParent.siblings().removeClass('select');
            targetParent.addClass('select');
        };
    }]);