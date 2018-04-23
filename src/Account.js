function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

Account.prototype.withdraw = function (amount) {
  this.isSufficentFundsAvailable(amount);
  this.balance = this.balance - amount;
};

Account.prototype.isSufficentFundsAvailable = function (amount) {
  if ((this.balance - amount) < 0) {
    throw 'Error - insufficient funds available';
  };
};
