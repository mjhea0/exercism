SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYearsInSeconds = seconds / 31557600;
  this.orbitualPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
};

SpaceAge.prototype.orbitualPeriodsToYears = function(planet) {
  var years = this.earthYearsInSeconds / this.orbitualPeriods[planet];
  return parseFloat(years.toFixed(2));
};

SpaceAge.prototype.onMercury = function() {
  return this.orbitualPeriodsToYears('mercury');
};

SpaceAge.prototype.onVenus = function() {
  return this.orbitualPeriodsToYears('venus');
};

SpaceAge.prototype.onEarth = function() {
  return this.orbitualPeriodsToYears('earth');
};

SpaceAge.prototype.onMars = function() {
  return this.orbitualPeriodsToYears('mars');
};

SpaceAge.prototype.onJupiter = function() {
  return this.orbitualPeriodsToYears('jupiter');
};

SpaceAge.prototype.onSaturn = function() {
  return this.orbitualPeriodsToYears('saturn');
};

SpaceAge.prototype.onUranus = function() {
  return this.orbitualPeriodsToYears('uranus');
};

SpaceAge.prototype.onNeptune = function() {
  return this.orbitualPeriodsToYears('neptune');
};

module.exports = SpaceAge;
