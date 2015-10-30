//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (input.slice(-1) === '?' && input != input.toUpperCase()) {
    return 'Sure.';
  }
  if (input === input.toUpperCase() && input.toLowerCase() !== input) {
    return 'Whoa, chill out!';
  }

  if (input.trim().length === 0) {
    return 'Fine. Be that way!';
  }

  if (/^[0-9?]*$/.test(input)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }

};

module.exports = Bob;
