// // Greet test

"use stricy";

const assert = require('assert');

describe('The greet function', function(){

    it('should greet Charne correctly', function(){
        assert.equal(greet('Charne'), 'Hello, Charne');
    });
    it('should greet Sandro correctly', function(){
        assert.equal(greet('Sandro'), 'Hello, Sandro');
    });
});

