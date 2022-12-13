/*
    # Quarter of the year 

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

FUNDAMENTALS, MATHEMATICS
*/

/*
    Las respuestas
*/
//1- 
// https://www.codewars.com/kata/reviews/5ce9c4fc8300dc0001fc4b65/groups/5cebe2d10310c2000102fdbd
const quarterOf_1 = m => Math.ceil(m / 3);

//2- 
// https://www.codewars.com/kata/reviews/5ce9c4fc8300dc0001fc4b65/groups/5cee481aa535d5000112b7e4
const quarterOf_2 = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }

}

//3- 
// https://www.codewars.com/kata/reviews/5ce9c4fc8300dc0001fc4b65/groups/5cfee15f2ad46500011aa7a8
const quarterOf_3 = (month) => {
    // Your code here
    return Math.ceil(month / 3);
}

// La presentada
const quarterOf = (month) => {
    // Your code here
    let q = Math.ceil(month / 3);
    return q;

}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = quarterOf;

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

comparaResultado((3), 1)
comparaResultado((8), 3)
comparaResultado((11), 4)


/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(quarterOf(3), 1)
        assert.strictEqual(quarterOf(8), 3)
        assert.strictEqual(quarterOf(11), 4)
    });
});
*/
