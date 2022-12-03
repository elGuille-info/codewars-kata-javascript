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

/*
  // Soluciones

  // 1- DivyanshBatham, -Downfall, milad_vafaeifard, pgetta, kokkatnivin, chiefLit, Okami92, Jchui, slpstn, Immaterial (+ 202)
  function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

  // 2- M-Ulyanov, azar1787, lucymonie, coffeebeans2836, diok22, johnnyblazeum, francisngo, MitraSamira, luisf11, TraddSpecter (+ 54)
  function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
  }

  // 3- chrisd19, electriclouds, dynakashima, helloitsjoe, ajwehunt, kmmdong, vlmatv13, eccnil, jacobcarey93, gmbh1 (+ 8)
  function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  }

  // 4- kgrace, tealjos, AnDeacracht, Twill1906, rparker24, veinard, tawatts3, camstreeter, Saspect-IO, hibow (+ 13)
  function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }

*/

/**
 * Devuelve true si el número indicado es un número entero.
 *
 * @param {*} res El número a comprobar
 * @returns true si el número es entero, en otro caso false.
 */
 function esEntero(res) {
  return Math.round(res) == res;

  // Existe un método para esto:
  //return Number.isInteger(res);
}

// La solución presentada
function findNextSquare0(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  // Si el parámetro no es un cuadrado perfecto, devolver -1
  if (!esEntero(Math.sqrt(sq))) return -1;

  // Buscar el siguiente entero que sea un cuadrado perfecto
  // Solo comprobar 1.000.000 números.
  for (let i = sq + 1, total = 1; total < 10000000; i++, total++) {
    // Si la raíz cuadrada del número comprobado es entero, este es el resultado.
    if (esEntero(Math.sqrt(i))) {
      // El número de veces comprobado
      console.log("\t" + total);
      return i;
    }
  }

  return -1;
}

// Versión larga
function findNextSquare1(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    // Si el parámetro no es un cuadrado perfecto, devolver -1
    let res = Math.sqrt(sq);
    // Si res no es un número entero, devolver -1
    if (!esEntero(res)) return -1;

    // Buscar el siguiente entero que sea un cuadrado perfecto
    // Solo comprobar 1.000.000 números.
    for (let i = sq + 1, total = 1; total < 10000000; i++, total++) {
        res = Math.sqrt(i);
        if (esEntero(res)) {
            // El número de veces comprobado
            console.log("\t" + total);
            return i;
        }
    }

    return -1;
}

// Usando Number.isInteger en vez de esEntero
function findNextSquare3(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  // Si el parámetro no es un cuadrado perfecto, devolver -1
  if (!Number.isInteger(Math.sqrt(sq))) return -1;

  // Buscar el siguiente entero que sea un cuadrado perfecto
  // Solo comprobar 1.000.000 números.
  for (let i = sq + 1, total = 1; total < 10000000; i++, total++) {
    // Si la raíz cuadrada del número comprobado es entero, este es el resultado.
    if (Number.isInteger(Math.sqrt(i))) {
      // El número de veces comprobado
      console.log("\t" + total);
      return i;
    }
  }

  return -1;
}

function findNextSquare(sq) {
  var root = Math.sqrt(sq);

  // Si la raíz cuadrada del número indicado es un entero,
  //  devolver el siguiente entero al cuadrado,
  // si no -1.

  // Estas tres formas hacen lo mismo.
  return root % 1 ? -1 : Math.pow(root + 1, 2);
  //return root % 1 == 0 ? Math.pow(root + 1, 2) : -1;

  //return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
}

function deepEqual(valor, resOK) {
    console.log(valor + " = " + resOK);

    // var root = Math.sqrt(valor);
    // console.log(root + " % 1 ==  " + (root % 1));
    // console.log(root + " % 1 ==  " + ((root % 1) == 0));
    // console.log(root + " % 1 === " + ((root % 1) === 0));

    let res = findNextSquare(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Para probar
// should return the next square for perfect squares
deepEqual(121, 144);
deepEqual(625, 676);
deepEqual(319225, 320356);
deepEqual(15241383936, 15241630849);

// should return -1 for numbers which aren't perfect squares
deepEqual(155, -1);
deepEqual(342786627, -1);


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