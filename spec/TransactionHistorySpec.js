describe('Transaction', function() {
  var Transaction = require('../src/TransactionHistory');
  var transaction;

  beforeEach(function() {
    // arrange
    transaction = new Transaction()
  });

  describe('#addTransaction', function() {
    it("stores the transaction data into its history", function () {
      // act
      transaction._add('11/08/1988', 2000, 3000);
      transaction._add('12/08/1988', 2000, 3000);

      // assert
      expect(transaction.history()).toEqual([['11/08/1988', 2000, 3000], ['12/08/1988', 2000, 3000]]);
    });
  });
});
