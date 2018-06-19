var assert = require('assert');
describe('MU Wallet', function () {
  describe('GetBalance', function () {
    it('when_account_number_equal_123456789_should_be return_2000', function () {
      var expected_amount = Wallet.GetBalance('123456789');
      assert.equal(2000, expected_amount);
    });
  });
});
