function DateFormatter(date = undefined) {
  this.date = date;
};

DateFormatter.prototype.now = function () {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var output = [addZeroIfLessThanTen(day), addZeroIfLessThanTen(month), year];

  return output.join('/')
};

function addZeroIfLessThanTen(number) {
  return (number < 10 ? "0" : "") + number;
};
