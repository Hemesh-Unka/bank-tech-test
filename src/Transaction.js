function Transaction() {
  this.history = [];
}

Transaction.prototype.add = function (transaction) {
  this.history.push(transaction)
}

Transaction.prototype.getHistory = function () {
  return this.history
};
