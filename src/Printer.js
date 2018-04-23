function Printer() {
};

Printer.prototype.printHeaders = function () {
  return 'date || credit || debit || balance\n';
};

Printer.prototype.printTransactions = function (transactions) {
  var string = transactions.map( transaction => this.editTransaction(transaction) );
  return string.join('\n');
};

Printer.prototype.editTransaction = function(transaction) {
  return transaction.join(' || ');
};

Printer.prototype.printStatement = function (transactions) {
  return this.printHeaders() + this.printTransactions(transactions);
};
