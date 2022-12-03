/*
    Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
    // Si no hay elementos, devolver cero.
    if (arr.length == 0) return 0;
    // Si todos son negativos devolver 0
    let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (total < 0) return 0;

    //

    return -1;
}

function strictEqual(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = maxSequence(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Pruebas
strictEqual([], 0);
strictEqual([-2, -3, -1], 0);
strictEqual([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);

/*
const { assert } = require ('chai');

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});
*/