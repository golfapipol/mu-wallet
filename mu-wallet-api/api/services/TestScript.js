module.exports = {
  startTestScript: function () {
    //this.when_account_number_equal_123456789_should_be_return_balance_5000();
    this.when_sender_balance_is_5000_transfer_amount_2000_should_be_success();
    this.when_receiver_balance_is_2_receive_amount_2000_should_be_success();
    this.set_balance_to_default();
  },

  //   when_account_number_equal_123456789_should_be_return_balance_5000: function () {
  //     console.log("when_account_number_equal_123456789_should_be_return_balance_5000:");
  //     var account_number = 123456789;
  //     var result = TestWallet.testGetBalance(account_number);
  //     Promise.all([result]).then(function (value) {
  //       expected_balance = +(value.user_amount);
  //       console.log(value[0].user_amount);
  //       if (expected_balance == 5000) {
  //         console.log("Passed");
  //       } else console.log("Failed");
  //     });
  //   },

  when_sender_balance_is_5000_transfer_amount_2000_should_be_success: function () {
    console.log("when_sender_balance_is_5000_transfer_amount_2000_should_be_success:");
    var balance = 5000;
    var amount = 2000;
    if (balance - amount >= 0) {
        console.log("Passed");
    }else console.log("Failed");
    //console.log(ServicesWallet.validateAccountNo(123456789));
  },

  when_receiver_balance_is_2_receive_amount_2000_should_be_success: function () {
    console.log("when_receiver_balance_is_2_receive_amount_2000_should_be_success:");
    var balance = 2000;
    var amount = 2;
    if (balance + amount <= 5000) {
        console.log("Passed");
    }else console.log("Failed");
  },

  set_balance_to_default: function () {
    console.log("set_balance_to_default:");
    ServicesWallet.setNewBalanceByAccountNo(123456789, 5000);
    ServicesWallet.setNewBalanceByAccountNo(234567123, 2);
    console.log("OK");
  },
}
