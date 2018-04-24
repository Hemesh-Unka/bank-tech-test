var DateFormatter = require('./DateFormatter');

function TransactionHistory() {
  this._history = [];
  this._date = new DateFormatter();
};

TransactionHistory.prototype._add = function (date = this._date.now(), amount, balance) {
  this._history.push([date, amount, balance])
};

TransactionHistory.prototype.history = function () {
  return this._history;
};

module.exports = TransactionHistory;
