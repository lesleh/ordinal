var chai = require("chai");
var en = require("../lib/en");

chai.should();

var expected = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  11: 'th',
  12: 'th',
  21: 'st',
  101: 'st',
  111: 'th',
  121: 'st',
  1031: 'st'
};

describe('English', function(){
  for(var key in expected) {
    it('should return ' + key + expected[key] + ' for ' + key, function(){
      en(key).should.equal(key + expected[key]);
    });
  }
  
  for(var key in expected) {
    it('suffix should return ' + expected[key] + ' for ' + key, function(){
      en.suffix(key).should.equal(expected[key]);
    });
  }
});