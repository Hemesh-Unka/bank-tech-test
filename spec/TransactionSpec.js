describe('Transaction', function() {
  var transaction, fakeDeposit;

  beforeEach(function() {
    // arrange
    transaction = new Transaction()
  });

  describe('#addTransaction', function() {
    it("stores the transaction data into its history", function () {
      // act
      transaction.add(1524496475302, 2000, 3000);
      transaction.add(1524496475302, 2000, 3000);

      // assert
      expect(transaction.getHistory()).toEqual([[1524496475302, 2000, 3000], [1524496475302, 2000, 3000]]);
    });
  });
});
