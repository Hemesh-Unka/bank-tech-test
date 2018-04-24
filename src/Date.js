function DateFormatter(date = undefined) {
  this.date = date;
};

DateFormatter.prototype.now = function () {
  var date = this.date ? this.date : new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return [addZeroIfLessThanTen(day), addZeroIfLessThanTen(month), year].join('/');

};

function addZeroIfLessThanTen(number) {
  return (number < 10 ? "0" : "") + number;
};
