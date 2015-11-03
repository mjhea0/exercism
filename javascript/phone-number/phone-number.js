var Phone = function(number) {
  this.dirtyNumber = number;
};

Phone.prototype.cleanNumber = function() {
  return this.dirtyNumber.replace(/[^0-9]/g, '');
};

Phone.prototype.hasExtraOne = function() {
  var num = this.cleanNumber();
  return (num.length == 11 && num[0] === '1');
};

Phone.prototype.number = function() {
  var num = this.cleanNumber();
  if (num.length === 10) {
    return num;
  } else if (this.hasExtraOne()) {
    return num.slice(1);
  } else {
    return '0000000000';
  }
};

Phone.prototype.areaCode = function() {
  return this.number().substr(0, 3);
};

Phone.prototype.toString = function() {
  return '(' + this.areaCode() + ') ' + this.number().substr(3, 3) +
         '-' + this. number().substr(6, 4);
};

module.exports = Phone;
