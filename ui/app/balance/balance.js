'use strict';

angular.module('myApp.balance', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/balance', {
    templateUrl: 'balance/balance.html',
    controller: 'BalanceCtrl'
  });
}])

.controller('BalanceCtrl', ['$scope',function($scope) {
  $scope.account_number = '123-456-789';
  $scope.balance = 5000;
  $scope.account_name = 'สมบูรณ์ เสียงระฆัง';
  $scope.currentTime = moment().format();
  $scope.getBalance = function(account_number) {
    return $scope.balance;
  };
}]);