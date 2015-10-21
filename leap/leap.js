var isLeapYear = function(year) {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }
    if (year % 4 === 0) {
      return true;
    }
};

module.exports = isLeapYear;

/*
Years that are divisible by 100 are not leap years, unless they are also divisible by 400, in which case they are leap years.
*/
