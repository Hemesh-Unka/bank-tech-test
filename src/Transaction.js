function Transaction(date = new DateFormatter()) {
  this.history = [];
  this.date = date;
}

Transaction.prototype.add = function (date = this.date.now(), amount, balance) {
  this.history.push([date, amount, balance])
}

Transaction.prototype.getHistory = function () {
  return this.history
};
