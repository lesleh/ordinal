var numberWithSuffix = function(num) {
	return num + suffix(num);
};

var suffix = function(num) {
  var tens = (num % 100 / 10).toFixed(0);
  var units = num % 10;
  
  if(tens == 1) {
    return 'th';
  }
  switch(units) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

module.exports = numberWithSuffix;
module.exports.suffix = suffix;
