function Printer() {
};

Printer.prototype.returnHeaders = function () {
  return 'date || credit || debit || balance\n';
};

Printer.prototype.formatTransactions = function (transactions) {
  var string = transactions.map( transaction => this.formatTransaction(transaction) );
  return string.join('\n');
};

Printer.prototype.formatTransaction = function (transaction) {
  return transaction.join(' || ');
};

Printer.prototype.printStatement = function (transactions) {
  return this.returnHeaders() + this.formatTransactions(transactions);
};
