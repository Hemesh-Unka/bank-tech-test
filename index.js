var Account = require('./src/Account');
var Printer = require('./src/Printer');

var account = new Account();
account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

var printer = new Printer();
console.log(printer.printStatement(account.transactionHistory.history()));
