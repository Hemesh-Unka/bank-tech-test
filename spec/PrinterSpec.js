describe('Printer', function() {
  var printer;

  beforeEach(function() {
    // arrange
    printer = new Printer();
  });

  describe('#returnHeaders', function() {
    it('returns the headers of the account', function () {

      // evaluation
      expect(printer.returnHeaders()).toEqual('date || credit || debit || balance\n');
    });
  });

  describe('#formatTransactions', function() {
    it('returns the transactions in the specified format', function() {
      // arrange
      var fakeTransactionHistory = [['11/08/1988', 2000, 2000], ['12/08/1988', 2000, 4000]];
      var expectedString = '11/08/1988 || 2000.00 || 2000.00\n12/08/1988 || 2000.00 || 4000.00';

      // evaluation
      expect(printer.formatTransactions(fakeTransactionHistory)).toEqual(expectedString)
    });
  });

  describe('#printStatement', function() {
    it('prints out the headers with the statement', function() {
      // arrange
      var headers = 'date || credit || debit || balance\n';
      var fakeTransactionHistory = [['11/08/1988', 2000, 2000], ['12/08/1988', 2000, 4000]];
      var expectedString = headers + '11/08/1988 || 2000.00 || 2000.00\n12/08/1988 || 2000.00 || 4000.00';

      // evaluation
      expect(printer.printStatement(fakeTransactionHistory)).toEqual(expectedString)
    });
  });
});
