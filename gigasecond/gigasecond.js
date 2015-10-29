var Gigasecond = function (inputDate) {
  this.gigaSeconds = 1e12;
  this.inputDate = inputDate;
};

Gigasecond.prototype.date = function() {
  return new Date(new Date(Number(this.inputDate) + this.gigaSeconds).toDateString());
};

module.exports = Gigasecond;

