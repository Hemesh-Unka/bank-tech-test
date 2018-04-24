describe('DateFormatter', function() {
  var date;

  describe('#now', function() {
    it('returns the current date in the required format', function() {
      // arrange
      dateFormatter = new DateFormatter(new Date('December 17, 1995 03:24:00'));

      // evaluation
      expect(dateFormatter.now()).toEqual('17/12/1995');
    });

    it('adds zeros in front of the day and month if required', function() {
      // arrange
      dateFormatter = new DateFormatter(new Date('April 07, 1995 03:24:00'));

      // evaluation
      expect(dateFormatter.now()).toEqual('07/04/1995');
    });
  });
});
