angular.module('myApp')
  .factory('Service', function ($http, $q) {
    return {
      transfer: function (account_no_sender, acccount_no_receiver, amount) {
        var deferred = $q.defer();

        $http({
          method: 'POST',
          url: 'http://localhost:1337/api/transfer',
          data: {
            account_no_sender: account_no_sender,
            acccount_no_receiver: acccount_no_receiver,
            amount: amount,
          },
        }).then(
          function (response) {
            // success callback
            deferred.resolve(response.data);
          },
          function (response) {
            // failure callback
            deferred.resolve(response.data);
          }
        );

        return deferred.promise;
      },
      getBalance: function (user_account_number) {
        var deferred = $q.defer();

        $http({
          method: 'POST',
          url: 'http://localhost:1337/api/wallet/getbalance',
          data: {
            user_account_number: user_account_number,
          },
        }).then(
          function (response) {
            // success callback
            deferred.resolve(response.data);
          },
          function (response) {
            // failure callback
            deferred.resolve(response.data);
          }
        );

        return deferred.promise;
      },

    }
  });