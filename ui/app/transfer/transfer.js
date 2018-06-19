'use strict';

angular.module('myApp.transfer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transfer', {
    templateUrl: 'transfer/transfer.html',
    controller: 'TransferCtrl'
  });
}])

.controller('TransferCtrl', ['$scope','Service',function($scope,Service) {
  $scope.account_no_sender = 123456789;
  $scope.acccount_no_receiver = 234567123;

  $scope.Transfer = function(account_no_sender,acccount_no_receiver,amount){
    Service.transfer(account_no_sender,acccount_no_receiver,amount).then(function(response){
        console.log(JSON.stringify(response))

        $state.go('transferResult', {
          date : {
            account_no_sender : $scope.account_no_sender,
            acccount_no_receiver : $scope.acccount_no_receiver,
            amount : amount
          }
        }, { reload: false });
    });
      
  };
  
}]);