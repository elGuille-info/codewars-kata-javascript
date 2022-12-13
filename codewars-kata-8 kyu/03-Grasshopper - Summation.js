/*
    # Grasshopper - Summation

Summation
Write a program that finds the summation of every number from 1 to num. 
    The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

FUNDAMENTALS, MATHEMATICS
*/

var summation = function (num) {
    // Code here

    let res = 0;
    for(let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = summation;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor + " = " + resOK);

    let res = "";
    try {
        res = laFuncion(valor);
    }
    catch (e) {
        res = "Error";
        console.error(e);
    }

    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
comparaResultado((1), 1);
comparaResultado((2), 3);
comparaResultado((8), 36);


/*
const assert = require('chai').assert;

describe('summation', function () {
    it('should return the correct total', function () {
        assert.strictEqual(summation(1), 1);
        assert.strictEqual(summation(2), 3);
        assert.strictEqual(summation(8), 36);
    })
})
*/
