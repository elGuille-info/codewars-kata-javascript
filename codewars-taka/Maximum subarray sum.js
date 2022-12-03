/*
    Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function (arr) {

  // Si no hay elementos, devolver cero
  if (arr.length == 0) return 0;

  // Si todos son negativos devolver 0
  // La suma de todos los elementos del array
  let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if (total < 0) return 0;
  let mayor = total;

  // let mayor = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   //total = arr.reduce((accumulator, currentValue, i) => accumulator + currentValue, 0);
  //   total = arr.reduce((accumulator, i) => accumulator + arr[i], 0);
  //   if (total < 0) return 0;
  //   if (total > mayor) {
  //     mayor = total;
  //     console.log("  mayor = " + mayor);
  //   }
  // }

  let i = 0;
  do {
    for (let j= i + 1; j < arr.length; j++) {
      total = arr[i] + arr[j];
      // si se encuentra un número mayor de cero, seguir por este valor
      if (total > mayor) {
        mayor = total;
        //console.log("  mayor = " + mayor);
      }
      else {
        i++;
      }
    }
  } while (i < arr.length - 1);

  // Buscar el mayor de los números en resultado
  return mayor;
}

function strictEqual(valor, resOK) {
  console.log(valor + " = " + resOK);

  let res = maxSequence(valor);
  if (res.toString() != resOK.toString()) {
    console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
  }
}

// Pruebas
//strictEqual([], 0);
//strictEqual([-2, -3, -1], 0);
strictEqual([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);
strictEqual([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43], 155);

// Estas fallan
strictEqual([9,-6,-19,-16,1,-35,49,-31,-45,30,9,23,-38,-19,28,-32,32,-36,27,16,-36,-19,5,6,-12,22,-9,-20], 62);
strictEqual([9,-47,0,-22,11], 11);
strictEqual([-13,-49,-20,-21,-15,35,-6,8,45,-23,-10,33,-41,-11,11,-9,7,-27,-27,13,-38,7,-44,49,20,-10,13,9,-8,46,23,20,-14,-42,3,19,26,42,-40,40,12,19,-2,-13,10,-46,-40,-44,-47,-46,-15,-20,-10,-44,1,-14,-21,9,39,-9,46,2,17,-23], 227);

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