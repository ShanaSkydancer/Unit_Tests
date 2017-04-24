var fromWhere = require("../fromWhere");

const assert = require('assert');

describe('The fromWhere function', function(){

    it('should fromWhere Cape Town correctly', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should fromWhere from Bellville correctly', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should fromWhere Paarl correctly', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should fromWhere other correctly', function(){
        assert.equal(fromWhere('CP'), 'Some other place!');
    });
});
