const Wallet = require('./Wallet');

it('when account number equal 123456789 should be return balance 5000', () => {
    //Arrange
    const account_number = "123456789";
    const expected_balance = 5000;
    //Action
    const actual_balance = Wallet.getBalance(account_number);
    //Assert
    expect(actual_balance).toBe(expected_balance);
});