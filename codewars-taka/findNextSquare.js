/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// Versión larga
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    // Si el parámetro no es un cuadrado perfecto, devolver -1
    let res = Math.sqrt(sq);
    // Si res no es un número entero, devolver -1
    if (!esEntero(res)) return -1;

    // Buscar el siguiente entero que sea un cuadrado perfecto
    // Solo comprobar 1.000.000 números.
    for (let i = sq + 1, total = 0; total < 10000000; i++, total++) {
        res = Math.sqrt(i);
        if (esEntero(res)) {
            // El número de veces comprobado
            console.log("\t"+total);
            return i;
        }
    }

    return -1;
}

/**
 * Devuelve true si el número indicado es un número entero.
 *
 * @param {*} res El número a comprobar
 * @returns true si el número es entero, en otro caso false.
 */
function esEntero(res) {
    return Math.round(res) == res;
}

function deepEqual(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = findNextSquare(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Para probar
// should return the next square for perfect squares
deepEqual(121, 144); // Wrong output for 121
deepEqual(625, 676); // Wrong output for 625
deepEqual(319225, 320356); // Wrong output for 319225
deepEqual(15241383936, 15241630849); // Wrong output for 15241383936

// should return -1 for numbers which aren't perfect squares
deepEqual(155, -1); // Wrong output for 155
deepEqual(342786627, -1); // Wrong output for 342786627


/*
const Test = require('@codewars/test-compat');

describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });

  it("should return -1 for numbers which aren't perfect squares", function() {
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});
*/