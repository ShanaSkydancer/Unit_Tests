var isWeekday = require("../isWeekday");

const assert = require('assert');

describe('The isWeekday function', function(){
    it('should check isWeekday correctly', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should check isWeekday correctly', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});
