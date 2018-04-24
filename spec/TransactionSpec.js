describe('Transaction', function() {
  var transaction, fakeDeposit, date;

  beforeEach(function() {
    // arrange
    transaction = new Transaction()
  });

  describe('#addTransaction', function() {
    it("stores the transaction data into its history", function () {
      // act
      transaction.add('11/08/1988', 2000, 3000);
      transaction.add('12/08/1988', 2000, 3000);

      // assert
      expect(transaction.getHistory()).toEqual([['11/08/1988', 2000, 3000], ['12/08/1988', 2000, 3000]]);
    });
  });
});
