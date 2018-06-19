const ServicesWallet = require('./ServicesWallet');

it('when sender balance is 5000 transfer amount 2000 should be success', () => {
    //Arrange
    const sender_balance = 5000;
    const transfer_amount = 2000;
    const expected_success = true; // success
    //Action
    const actual = ServicesWallet.checkSenderBalanceCanTransfer(sender_balance, transfer_amount);
    //Assert
    expect(actual).toBe(expected_success);

});


it('when receiver balance is 2 receive amount 2000 should be success', () => {
    //Arrange
    const sender_balance = 2000;
    const transfer_amount = 2;
    const expected_success = true; // success
    //Action
    const actual = ServicesWallet.checkReceiverBalanceCanReceive(sender_balance,transfer_amount);
    //Assert
    expect(actual).toBe(expected_success);

});