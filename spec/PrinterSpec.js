describe('Printer', function() {
  var printer;

  beforeEach(function() {
    // arrange
    printer = new Printer();
  });

  describe('#printHeaders', function() {
    it('returns the headers of the account', function () {

      // evaluation
      expect(printer.printHeaders()).toEqual('date || credit || debit || balance\n');
    });
  });

  describe('#printTransactions', function() {
    it('returns the transactions in the specified format', function() {
      // arrange
      var fakeTransactionHistory = [['11/08/1988', 2000, 2000], ['12/08/1988', 2000, 4000]];
      var expectedString = '11/08/1988 || 2000 || 2000\n12/08/1988 || 2000 || 4000';

      // evaluation
      expect(printer.printTransactions(fakeTransactionHistory)).toEqual(expectedString)
    });
  });

  describe('#printStatement', function() {
    it('prints out the headers with the statement', function() {
      // arrange
      var headers = 'date || credit || debit || balance\n';
      var fakeTransactionHistory = [['11/08/1988', 2000, 2000], ['12/08/1988', 2000, 4000]];
      var expectedString = headers + '11/08/1988 || 2000 || 2000\n12/08/1988 || 2000 || 4000';

      // evaluation
      expect(printer.printStatement(fakeTransactionHistory)).toEqual(expectedString)
    });
  });
});
