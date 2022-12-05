/*
    # Number of trailing zeros of N!

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

ALGORITHMS, LOGIC, MATHEMATICS
*/

function zeros (n) {
    // your code here
}


/**
 * Indicar aquí la función a usar dentro de
 * @see compararResultados
 */
 const laFuncion = zeros;

 /**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor El número a evaluar por la función.
  * @param {*} resOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
 function compararResultados(valor, resOK) {
     console.log(valor + " = " + resOK);

     let res = laFuncion(valor);
     if (res.toString() != resOK.toString()) {
         console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
     }
     else {
         console.log("\tCorrecto!");
     }
 }

// Pruebas
compararResultados(0, 0);
compararResultados(5, 1);
compararResultados(6, 1);
compararResultados(30, 7);
//  compararResultados();
//  compararResultados();
//  compararResultados();
//  compararResultados();
//  compararResultados();

/*
const Test = require('@codewars/test-compat');

describe("Sample Tests", function() {
  it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(5), 1, "Testing with n = 5")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
  });
});
*/