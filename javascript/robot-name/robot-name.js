// global

var allNames = {};

// constructor

var Robot = function (){
  this.name = this.makeName();
};

// methods

Robot.prototype.makeName = function () {
  // get random name
  var name = getRandomName();
  // check to see if name exists
  if (allNames[name]) {
    return this.makeName();
  }
  // set name into allNames object (to indicate that it is used)
  allNames[name] = true;
  // return name
  return name;
};

Robot.prototype.reset = function () {
  this.name = this.makeName();
};

Robot.prototype.name = function () {
  return this.name;
};

module.exports = Robot;

// helpers

function getRandomLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function getRandomName() {
  var name = getRandomLetter().toUpperCase();
  name += getRandomLetter().toUpperCase();
  name += (Math.random() + '').substr(2, 3);
  return name;
}

