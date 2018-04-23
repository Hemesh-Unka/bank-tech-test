function Account(transaction = new Transaction()) {
  this.balance = 0;
  this.transaction = transaction;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transaction.add(undefined, amount, this.balance);
};

Account.prototype.withdraw = function (amount) {
  this.isSufficentFundsAvailable(amount);
  this.balance -= amount;
  this.transaction.add(undefined, -amount, this.balance);
};

Account.prototype.isSufficentFundsAvailable = function (amount) {
  if ((this.balance - amount) < 0) {
    throw 'Error - insufficient funds available';
  };
};
