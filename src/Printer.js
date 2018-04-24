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
  var transactionWithDecimalPlaces = transaction.map( value => addDecimalPlaces(value));
  return transactionWithDecimalPlaces.join(' || ');
};

Printer.prototype.printStatement = function (transactions) {
  return this.returnHeaders() + this.formatTransactions(transactions);
};

function addDecimalPlaces(value) {
  return isNaN(value) ? value : value.toFixed(2);
};
