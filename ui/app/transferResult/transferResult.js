'use strict';

angular.module('myApp.transferResult', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transferResult', {
    templateUrl: 'transferResult/transferResult.html',
    controller: 'TransferResultCtrl'
  });
}])

.controller('TransferResultCtrl', ['$scope','Service',function($scope,Service) {
    
  
}]);