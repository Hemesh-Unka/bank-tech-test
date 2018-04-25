describe('Account', function() {
  var Account = require('../src/Account');
  var account;

  beforeEach(function() {
    // arrange
    account = new Account();
    // transactionHistory = jasmine.createSpyObj('transaction')

    // act
    account.deposit(1000)
  })

  describe('#deposit', function() {
    it("should be able to deposit a sum of money and update the balance", function () {
      // evaluation
      expect(account.getBalance()).toEqual(1000);
    });
  });

  describe('#withdraw', function() {
    it("should be able to withdraw a sum of money and update the balance", function () {
      // act
      account.withdraw(500);

      // assert
      expect(account.getBalance()).toEqual(500);
    });

    it("should throw and error if insuffecent funds are available", function() {
      // act
      var action = function() {
        account.withdraw(2000);
      };

      // assert
      expect(action).toThrow("Error - insufficient funds available")
    });
  });
});
