var regCheck = require("../regCheck");
const assert = require('assert');

describe('The regCheck function', function(){
    it('should regCheck with locations correctly', function(){
        assert.equal(regCheck('DV 23 LP GP'), false);
    });
});
