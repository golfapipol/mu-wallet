'use strict';

angular.module('myApp.balance', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/balance', {
      templateUrl: 'balance/balance.html',
      controller: 'BalanceCtrl'
    });
  }])

  .controller('BalanceCtrl', ['$scope', 'Service', function ($scope, Service) {
    $scope.account_number = '123456789';
    $scope.account_name = 'สมบูรณ์ เสียงระฆัง';
    $scope.currentTime = moment().format();

    Service.getBalance($scope.account_number).then(function (response) {
      console.log(JSON.stringify(response))
      $scope.balance = response.user_amount;
    });
  }]);