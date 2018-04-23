function Transaction() {
  this.history = [];
}

Transaction.prototype.add = function (date = Date.now(), amount, balance) {
  this.history.push([date, amount, balance])
}

Transaction.prototype.getHistory = function () {
  return this.history
};
