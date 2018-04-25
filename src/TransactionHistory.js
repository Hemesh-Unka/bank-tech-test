var DateFormatter = require('./DateFormatter');

function TransactionHistory(dateFormatter = new DateFormatter()) {
  this._history = [];
  this._date = dateFormatter;
};

TransactionHistory.prototype._add = function (date = this._date.now(), amount, balance) {
  this._history.push([date, amount, balance])
};

TransactionHistory.prototype.history = function () {
  return this._history;
};

module.exports = TransactionHistory;
