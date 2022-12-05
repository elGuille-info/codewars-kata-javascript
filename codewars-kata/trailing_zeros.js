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

/*
30! = 265252859812191100000000000000000 --> 7 trailing zeros (me da que son 17)
18! = 6402373705728000 --> 3 trailing zeros
*/

function zeros (n) {
    // your code here
    let n2 = fact(n);
    let s = String(n2)
    let res = Infinity;
    for (let i = s.length -1; i >= 0; i--) {
        if (s[i] != '0') {
            break;
        }
        res++;
    }

    return res;
}

/**
 * El factorial de un número, sin notación exponencial el valor mayor es 18.
 *
 * @param {*} number El número del que queremos el factorial.
 * @returns El factorial del número indicado. Hasta el 18 no muestra notación exponencial.
 */
function fact(number) {
    if (number == 0) return 1;
    if (number == 2) return 2;

    // Calcularlo multiplicando el número hasta el 2.
    for (let i = number - 1; i > 1; i--) {
        number *= i;
    }
    return number;
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
compararResultados(18, 3);
compararResultados(0, 0);
compararResultados(5, 1);
compararResultados(6, 1);
// Estos son muy grandes para evaluarlos con mi función fact.
compararResultados(30, 7);
compararResultados(647601557, 161900383);
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