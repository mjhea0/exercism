var Hamming = function(){};

Hamming.prototype.compute = function(strand1, strand2){
  var counter = 0;
  var strand1Length = strand1.length;
  if(strand1Length !== strand2.length){
    throw new Error ('DNA strands must be of equal length.');
  }
  for(var i = 0; i < strand1Length; i++){
    if(strand1.charAt(i) !== strand2.charAt(i)){
      counter++;
    }
  }
  return counter;
};

module.exports = Hamming;
