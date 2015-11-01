var words = function(phrase) {
  var words = phrase.replace(/\s+/, ' ').split(' ');
  words = words.filter(function(word){return word;});
  return words.reduce(function(counts, word) {
    if (counts.hasOwnProperty(word) && word.length !== 0) {
      counts[word]++;
    } else {
     counts[word] = 1;
    }
    return counts;
  }, {});
};

module.exports = words;
