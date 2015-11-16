function transform(oldFormat) {

  var output = {};

  Object.keys(oldFormat).forEach(function(scoreStr) {
    var score = parseInt(scoreStr);
    oldFormat[scoreStr].forEach(function(letter) {
      output[letter.toLowerCase()] = score;
    });
  });

  return output;

}

module.exports = transform;
