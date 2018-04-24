describe('DateFormatter', function() {
  var date;

  beforeEach(function() {
    // arrange
    dateFormatter = new DateFormatter();
  });

  describe('#now', function() {
    it('returns the current date in the required format', function() {

      // evaluation
      expect(dateFormatter.now(1524496475302)).toEqual('24/04/2018');
    });
  });
});
