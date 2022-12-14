/*
    # Multiply

This code does not execute properly. Try to figure out why.

DEBUGGING, FUNDAMENTALS
*/

/*
    Soluciones

    Prácticamente todas son al estilo de la presentada
*/

//3- 
// https://www.codewars.com/kata/reviews/5197d3d7d2822fb53000001e/groups/51d3308830cfd325d400016f
function multiply_3(a, b) {
    if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
        return 0;
    }
    return a * b;
}

//6- 
// https://www.codewars.com/kata/reviews/5197d3d7d2822fb53000001e/groups/57dd58e6f6df9bee51000bd9
function multiply_6(a, b) {
    if (undefined == a || undefined == b
        || isNaN(a) || isNaN(b))
        throw new Error('Both arguments should be numbers')
    return a * b
}


function multiply_mal(a, b) {
    a * b
}

// La presentada
function multiply(a, b) {
    return a * b
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = multiply;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function prueba2Valores(valor1, valor2, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(laFuncion.name.toString() + "(" + valor1 + ", " + valor2 + ") = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
prueba2Valores(1, 1, 1)
prueba2Valores(2, 1, 2)
prueba2Valores(2, 2, 4)
prueba2Valores(3, 5, 15)

/*
const assert = require("chai").assert;

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1, 1), 1);
        assert.strictEqual(multiply(2, 1), 2);
        assert.strictEqual(multiply(2, 2), 4);
        assert.strictEqual(multiply(3, 5), 15);
    });
});
*/
