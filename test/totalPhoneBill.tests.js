var totalPhoneBill = require("../totalPhoneBill");

const assert = require('assert');

describe('The totalPhoneBill function', function(){

    it('should totalPhoneBill correctly', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
});
