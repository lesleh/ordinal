var chai = require("chai");
var en = require("../lib/en");

chai.should();

describe('English', function(){
  it('should return 1st for 1', function(){
    en(1).should.equal('1st');
  });
  
  it('should return 2nd for 2', function(){
    en(2).should.equal('2nd');
  });
  
  it('should return 3rd for 3', function(){
    en(3).should.equal('3rd');
  });
  
  it('should return 4th for 4', function(){
    en(4).should.equal('4th');
  });
  
  it('should return 11th for 11', function(){
    en(11).should.equal('11th');
  });
  
  it('should return 12th for 12', function(){
    en(12).should.equal('12th');
  });
  
  it('should return 21st for 21', function(){
    en(21).should.equal('21st');
  });
  
  it('should return 101st for 101', function(){
    en(101).should.equal('101st');
  });
  
  it('should return 111th for 111', function(){
    en(111).should.equal('111th');
  });
  
  it('should return 121st for 121', function(){
    en(121).should.equal('121st');
  });
  
  it('should return 1031st for 1031', function(){
    en(1031).should.equal('1031st');
  });

});