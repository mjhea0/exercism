var DnaTranscriber = function(){
  this.translationsRNA = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  this.translationsDNA = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
    U: 'A'
  };
};

DnaTranscriber.prototype.toRna = function(sequence) {
  var sequenceArray = sequence.split('');
  var outputArray = [];
  for (var i = 0; i < sequenceArray.length; i++) {
    outputArray.push(this.translationsRNA[sequenceArray[i]]);
  }
  return outputArray.join('');
};

DnaTranscriber.prototype.toDna = function(sequence) {
  var sequenceArray = sequence.split('');
  var outputArray = [];
  for (var i = 0; i < sequenceArray.length; i++) {
    outputArray.push(this.translationsDNA[sequenceArray[i]]);
  }
  return outputArray.join('');
};

module.exports = DnaTranscriber;
