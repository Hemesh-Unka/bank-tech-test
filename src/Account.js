function Account(transaction = new Transaction()) {
  this._balance = 0;
  this._transaction = transaction;
}

Account.prototype.deposit = function (amount) {
  this._balance += amount;
  this._transaction.add(undefined, amount, this.balance());
};

Account.prototype.withdraw = function (amount) {
  this.isSufficentFundsAvailable(amount);
  this._balance -= amount;
  this._transaction.add(undefined, -amount, this.balance());
}

Account.prototype.isSufficentFundsAvailable = function (amount) {
  if ((this.balance() - amount) < 0) {
    throw 'Error - insufficient funds available';
  };
};

Account.prototype.balance = function () {
  return this._balance;
};
