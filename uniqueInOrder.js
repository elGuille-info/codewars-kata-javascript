/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//var uniqueInOrder=function(iterable){
function uniqueInOrder(iterable){
    //your code here - remember iterable can be a string or an array

}

function deepEqual(iterable, resOK ) {
    console.log(iterable + " = " + resOK);

    let res = uniqueInOrder(iterable);
    if (res != resOK) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Para probar
deepEqual('AAAABBBCCDAABBB', ['A','B','C','D','A','B']);
deepEqual('ABBCcAD', ['A', 'B', 'C', 'c', 'A', 'D']);
deepEqual([1,2,2,3,3], [1,2,3]);

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
*/