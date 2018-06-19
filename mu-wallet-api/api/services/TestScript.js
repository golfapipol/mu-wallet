module.exports = {
  startTestScript: function () {
    this.when_account_number_equal_123456789_should_be_return_balance_5000();
  },

  when_account_number_equal_123456789_should_be_return_balance_5000: function () {
    console.log("when_account_number_equal_123456789_should_be_return_balance_5000:");
    var account_number = "123456789";
    var expected_balance = Wallet.testGetBalance(123456789);
    Promise.all([expected_balance]).then(function(value){
        console.log(value);
    });

    if (expected_balance == 5000) {
      console.log("Passed");
    } else console.log("Failed");

  },
}
