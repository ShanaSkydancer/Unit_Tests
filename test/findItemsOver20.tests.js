var findItemsOver20 = require("../findItemsOver20");

const assert = require('assert');

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var expectedResults = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

describe('The findItemsOver20 function', function(){
    it('should findItemsOver20 correctly', function(){
        assert.deepEqual(findItemsOver20(itemList), expectedResults);
    });
});
