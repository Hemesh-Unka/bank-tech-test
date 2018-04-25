var TransactionHistory = require('./TransactionHistory');

function Account(transactionHistory = new TransactionHistory()) {
  this.balance = 0;
  this.transactionHistory = transactionHistory;
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactionHistory._add(undefined, amount, this.getBalance());
};

Account.prototype.withdraw = function (amount) {
  this.isSufficentFundsAvailable(amount);
  this.balance -= amount;
  this.transactionHistory._add(undefined, -amount, this.getBalance());
};

Account.prototype.isSufficentFundsAvailable = function (amount) {
  if ((this.getBalance() - amount) < 0) {
    throw 'Error - insufficient funds available';
  };
};

Account.prototype.getBalance = function () {
  return this.balance;
};

module.exports = Account;
