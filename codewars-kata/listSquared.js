/*
    # Integers: Recreation One

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.
The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".

comparar2(1, 250, [[1, 1], [42, 2500], [246, 84100]]);
comparar2(42, 250, [[42, 2500], [246, 84100]]);


Note
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace:
you can use dynamically allocated character strings.

FUNDAMENTALS, ALGORITHMS

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
The sum of the squared divisors is 2500 which is 50 * 50, a square!
*/

/*
// En Python
def list_squared(m, n):
    result = []
    for num in range(m, n + 1):
        divisors = set()
        for i in range(1, int(math.sqrt(num)+1)):
            if num % i == 0:
                divisors.add(i**2)
                divisors.add(int(num/i)**2)
        total = sum(divisors)
        sr = math.sqrt(total)
        if sr - math.floor(sr) == 0:
            result.append([num, total])
    return result

function listSquared(m, n) {
    // your code
    let result = [];
    for (let num = m; num <= n; num++) {
      let divisors = [];
      for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
          //divisors.push(i**2);
          divisors.push(i*i);
          //divisors.push(Math.pow(i, 2));
          divisors.push((num/i)**2);
          //divisors.push(Math.pow(num/i), 2);
        }
        let total = divisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let sr = Math.sqrt(total);
        if (sr - Math.floor(sr) == 0) {
          result.push([num, total]);
        }
      }
    }
    return result;
}

// Esta no funciona
function listSquared_py(m, n) {
  // your code
  let result = [];
  for (let num = m; num <= n; num++) {
    let divisors = [];
    for (let i = 1; i < Math.sqrt(num); i++) {
      if (num % i == 0) {
        //divisors.push(i**2);
        divisors.push(i*i);
        //divisors.push(Math.pow(i, 2));
        divisors.push((num/i)**2);
        //divisors.push(Math.pow(num/i), 2);
      }
      // total = sum(divisors)
      let total = divisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      if (Number.isInteger(Math.sqrt(total))) {
        result.push([num, total]);
      }
    }
  }
  return result;
}

*/

/*
De https://github.com/seonatic/Integers-Recreation-One/blob/master/solution.js

//Solution:

function listSquared (m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors (n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) { //n % i is the opposite of n % i ==0
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}
*/

// La presentada, una fusión (modificada) de https://github.com/seonatic/Integers-Recreation-One/blob/master/solution.js
function listSquared (m, n) {
  // your code
  var resultado = [];
  for (let num = m; num <= n; num++) {
    let divisors = [];
    for (let i = 1; i <= num / 2; i++) {
      if (num % i == 0) {
        divisors.push(i);
      }
    }
    divisors.push(num);

    let total = divisors.reduce((a, b) => a + b * b, 0);
    if (Number.isInteger(Math.sqrt(total))) {
      resultado.push([num, total]);
    }
  }

  return resultado;
}


/**
 * Indicar aquí la función a usar dentro de
 * @see comparar2
 */
 const laFuncion = listSquared_py;

 /**
   * Para comprobar si el resultado de la función es válido.
   *
   * @param {*} valor1 El valor del primer valor a comprobar.
   * @param {*} valor2 El valor del segundo valor a comprobar
   * @param {*} resOK El resultado que debe dar.
   * @see laFuncion Para asignar la función a usar.
   */
function comparar2(valor1, valor2, resOK) {
  console.log(valor1?.toString() + " =? " + valor2?.toString() + " = " + resOK);

  let res = laFuncion(valor1, valor2);
  if (res.toString() != resOK.toString()) {
    console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
  }
  else {
    console.log("\tCorrecto!");
  }
}

// Pruebas
comparar2(1, 250, [[1, 1], [42, 2500], [246, 84100]]);
comparar2(42, 250, [[42, 2500], [246, 84100]]);
comparar2(250, 500, [[287, 84100]]);
//comparar2();
//comparar2();

/*
const {assert,config} = require('chai')
config.truncateThreshold = 0

describe('Testing...', function(){
  it("Basic tests",function() {
    assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(42, 250), [[42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(250, 500), [[287, 84100]])
  })
})
*/