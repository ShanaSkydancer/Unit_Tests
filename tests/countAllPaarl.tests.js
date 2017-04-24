var countAllPaarl = require("../countAllPaarl");

const assert = require('assert')

describe('The countAllPaarl function', function(){

    it('should countAllPaarl regiNumbers correctly', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
});
