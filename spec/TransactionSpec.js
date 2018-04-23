describe('Transaction', function() {
  var transaction, fakeDeposit;

  beforeEach(function() {
    // arrange
    transaction = new Transaction()
    fakeDeposit = ['11/08/1988', 2000, 3000];
  });

  describe('#addTransaction', function() {
    it("stores the transaction data into its history", function () {
      // act
      transaction.add(fakeDeposit);
      transaction.add(fakeDeposit);

      // assert
      expect(transaction.getHistory()).toEqual([fakeDeposit, fakeDeposit]);
    });
  });
});
