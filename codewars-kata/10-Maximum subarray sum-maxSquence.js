/*
    # Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/*
  // el código de otros:

  //1- itsPG, AlexanderDerGrosse, classic016, Fantom1991, user9878128, CHUENWEI, 14bce128@nirmauni.ac.in, dubdjon, AwsIdris, medokin (+ 125)
  var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

  //2- hiasen, rscarlisle, Instigator, zhaihaoran, perception30, AhmedElhalaby, qwetexac, ccnklc, igof, PsychO_o, technomage (+ 17)
  var maxSequence = function(arr){
      var currentSum = 0;
      return arr.reduce(function(maxSum, number){
          currentSum = Math.max(currentSum+number, 0);
          return Math.max(currentSum, maxSum);
      }, 0);
  }

  //3- avaver, pitchblaknight, architechnium, medhichemlemsi
  var maxSequence = function(arr){
    var max = 0;
    var cur = 0;
    arr.forEach(function(i){
      cur = Math.max(0, cur + i);
      max = Math.max(max, cur);
    });
    return max;
  }

  //4- ooflorent, barbibubbi, GetRecked
  function maxSequence(arr) {
    var max = 0

    for (var i = 0; i < arr.length; i++) {
      for (var sum = 0, j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum > max) max = sum
      }
    }

    return max
  }

  //6- Rativel, VladimirMamaevsky
  const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

*/

// La enviada
var maxSequence = function (arr) {

    // Si no hay elementos, devolver cero
    if (arr.length == 0) return 0;

    // Si todos son negativos devolver 0
    const mayoresCero = arr.filter(item => item >= 0);
    if (mayoresCero.length == 0) return 0;

    // La suma de todos los elementos del array
    let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let mayor = total;

    // Acumular los totales del actual y los siguientes
    let resultados = [];

    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length -1) {
        total = arr[i]
      }
      else {
        total = arr[i];
        if (total > mayor) {
          mayor = total;
        }
        for (let j = i + 1; j < arr.length; j++) {
          total += arr[j]
          if (total > mayor) {
            mayor = total;
          }
        }
      }
      resultados.push(total);
      if (total > mayor) {
        mayor = total;
      }
    }

    if (mostrarParciales)
      console.log("  --> " + resultados.toString())

    return mayor;
  }

  function strictEqual(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = maxSequence(valor);
    if (res.toString() != resOK.toString()) {
      console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
  }

  let mostrarParciales = false;

  // Pruebas
  strictEqual([], 0);
  strictEqual([-2, -3, -1], 0);
  strictEqual([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);
  strictEqual([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43], 155);
  strictEqual([9,-6,-19,-16,1,-35,49,-31,-45,30,9,23,-38,-19,28,-32,32,-36,27,16,-36,-19,5,6,-12,22,-9,-20], 62);
  strictEqual([9,-47,0,-22,11], 11);
  strictEqual([-13,-49,-20,-21,-15,35,-6,8,45,-23,-10,33,-41,-11,11,-9,7,-27,-27,13,-38,7,-44,49,20,-10,13,9,-8,46,23,20,-14,-42,3,19,26,42,-40,40,12,19,-2,-13,10,-46,-40,-44,-47,-46,-15,-20,-10,-44,1,-14,-21,9,39,-9,46,2,17,-23], 227);
  strictEqual([10,-38,-41,-42,45,-38,-7,36], 45)

  strictEqual([-2, 1, 2, -2, -2, 7], 7);

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