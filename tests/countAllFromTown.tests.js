var countAllFromTown = require("../countAllFromTown");

const assert = require('assert')

describe('The countAllFromTown function', function(){

    it('should countAllFromTown regiNumbers correctly', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
});
