'use strict';

var smartTimeApp =  angular.module('smartTimeApp', [
    'ngRoute',
    'smartTimeApp.watches'
]);

smartTimeApp.controller('SmartTimeAppCtrl', [ '$scope', function($scope) {
    $scope.name = 'default';
}]);