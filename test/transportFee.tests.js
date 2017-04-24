var transportFee = require("../transportFee");

const assert = require('assert')

describe('The transportFee function', function(){
    it('should transportFee correctly', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
});
