var yearsAgo = require("../yearsAgo");

const assert = require('assert')

describe('The yearsAgo function', function(){
    it('should give yearsAgo correctly', function(){
        assert.equal(yearsAgo('1990'), 27);
    });
});
