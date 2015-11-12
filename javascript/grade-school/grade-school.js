var School = function() {
  this.masterRoster = {};
};

School.prototype.roster = function() {
  return this.masterRoster;
};

School.prototype.add = function(name, grade) {
  if (this.masterRoster.hasOwnProperty(grade)) {
    this.masterRoster[grade].push(name);
    this.masterRoster[grade] = this.masterRoster[grade].sort();
  } else {
    this.masterRoster[grade] = [name];
  }
};

School.prototype.grade = function(grade) {
  if (this.masterRoster.hasOwnProperty(grade)) {
    return this.masterRoster[grade];
  }
  return [];
};


module.exports = School;
