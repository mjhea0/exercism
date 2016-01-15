toRoman = function(num) {

  var arabicToRoman = [
    {arabic: 1000, roman: 'M'},
    {arabic: 900, roman: 'CM'},
    {arabic: 500, roman: 'D'},
    {arabic: 400, roman: 'CD'},
    {arabic: 100, roman: 'C'},
    {arabic: 90, roman: 'XC'},
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'},
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'}
  ];

  // loop (for) through the array of objects (arabicToRoman)
    // while num >= arabicToRoman[i].arabic
      // add arabicToRoman[i].roman to a string
      // num = num - arabicToRoman[i].arabic

};

module.exports = toRoman;