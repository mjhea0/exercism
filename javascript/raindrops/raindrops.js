function Raindrops() {

  this.primeFactors = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
  };

}

Raindrops.prototype.convert = function(num) {

  var val = "";

  if (!this.isDivisible(num)) {
    return num.toString();
  } else {

    for(var primeFactor in this.primeFactors) {
      if (num % primeFactor === 0) {
        val += this.primeFactors[primeFactor];
      }
    }
    return val;
  }

};

Raindrops.prototype.isDivisible = function(num) {
  for(var primeFactor in this.primeFactors) {
    if (num % primeFactor === 0) {
      return true;
    }
  }
  return false;
};

module.exports = Raindrops;
