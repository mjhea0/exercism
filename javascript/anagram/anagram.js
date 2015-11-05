module.exports = function Anagram(word) {

  var sortedWord = sorted(word.toLowerCase());

  function matches(words) {
    if (typeof words === 'string') {
      words = words.split(' ');
    }
    return words.filter(isAnagram);
  }

  function isAnagram(comparisonWord) {
    comparisonWord = comparisonWord.toLowerCase();
    return word !== comparisonWord && sortedWord == sorted(comparisonWord);
  }

  function sorted(word) {
    return word.split('').sort().join('');
  }

  return {
    matches: matches
  };

};
