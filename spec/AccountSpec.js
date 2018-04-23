describe('Account', function() {
  var account;

  beforeEach(function() {
    // arrange
    account = new Account();

    // act
    account.deposit(1000)
  })

  describe('#deposit', function() {
    it("should be able to deposit a sum of money and update the balance", function () {
      // evaluation
      expect(account.balance).toEqual(1000);
    });
  });

  describe('#withdraw', function() {
    it("should be able to withdraw a sum of money and update the balance", function () {
      // act
      account.withdraw(500);

      // assert
      expect(account.balance).toEqual(500);
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
