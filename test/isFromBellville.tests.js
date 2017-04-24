var isFromBellville = require("../isFromBellville");

const assert = require('assert');

describe('The isFromBellville function', function(){
    it('should give the bellvilleRegistration correctly', function(){
        assert.equal(isFromBellville('CY56708'), true);
    });
});
