var countRegNumber = require("../countRegNumber");
const assert = require('assert');

describe('The countRegNumber function', function(){
    it('should countRegNumber correctly', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
});
