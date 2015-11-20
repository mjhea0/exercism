var Grains = function() {};

Grains.prototype.square = function(num) {
  if (num === 1) {
      return (1).toString();
  } else {
    return (Math.pow(2, num - 1)).toString();
  }
};

Grains.prototype.total = function() {
  var total = 0;
  for (var i = 1; i <= 64; i++) {
    total += this.square(i);
  }
  return (total).toString();
};


module.exports = Grains;

