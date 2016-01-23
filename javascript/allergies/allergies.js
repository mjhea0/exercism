var Allergies = function(allergenIndex) {
  this.allergenIndex = allergenIndex;
  this.possibleAllergies = [
    'eggs', 'peanuts', 'shellfish', 'strawberries',
    'tomatoes', 'chocolate', 'pollen', 'cats'
  ];
};

Allergies.prototype.list = function() {

  var allergicTo = [];

  for (var i = 0; i < this.possibleAllergies.length; i++) {
    var allergy = this.possibleAllergies[i];
    if (this.allergenIndex & Math.pow(2,i)) {
      allergicTo.push(allergy);
    }
  }

  return allergicTo;

};

Allergies.prototype.allergicTo = function(food) {

    var isAllergic = false;
    var allergyList = this.list();

    for (var i = 0; i < allergyList.length; i++) {
      if (allergyList[i] === food) {
        isAllergic = true;
        break;
      }
    }

    return isAllergic;

};

module.exports = Allergies;