'use strict';

angular.module('smartTimeApp.watches', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/watches', {
            templateUrl: 'watches/watches.html',
            controller: 'WatchesCtrl'
        });
    }])

    .controller('WatchesCtrl', [function() {

    }]);