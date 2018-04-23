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
      var fakeTransactionHistory = [[1524496475302, 2000, 2000], [1524496475303, 2000, 4000]];
      var expectedString = '1524496475302 || 2000 || 2000\n1524496475303 || 2000 || 4000';

      // evaluation
      expect(printer.printTransactions(fakeTransactionHistory)).toEqual(expectedString)
    });
  });

  describe('#printStatement', function() {
    it('prints out the headers with the statement', function() {
      // arrange
      var headers = 'date || credit || debit || balance\n';
      var fakeTransactionHistory = [[1524496475302, 2000, 2000], [1524496475303, 2000, 4000]];
      var expectedString = headers + '1524496475302 || 2000 || 2000\n1524496475303 || 2000 || 4000';

      // evaluation
      expect(printer.printStatement(fakeTransactionHistory)).toEqual(expectedString)
    });
  });
});
