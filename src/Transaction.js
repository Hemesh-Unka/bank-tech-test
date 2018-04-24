function Transaction(date = new DateFormatter()) {
  this._history = [];
  this._date = date;
}

Transaction.prototype._add = function (date = this._date.now(), amount, balance) {
  this._history.push([date, amount, balance])
}

Transaction.prototype.history = function () {
  return this._history;
};
