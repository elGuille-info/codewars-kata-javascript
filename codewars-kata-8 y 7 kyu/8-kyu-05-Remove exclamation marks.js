/*
    # Remove exclamation marks (8 kyu)

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

FUNDAMENTALS, STRINGS
*/

/*
    Soluciones
*/

//1- y 2-
// https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557
function removeExclamationMarks_1(s) {
    return s.replace(/!/gi, '');
}

//3-
// https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f95791e2cb69bda7000a66
function removeExclamationMarks_3(s) {
    return s.split('!').join('');
}

// La presentada
function removeExclamationMarks(s) {
    return s.split('!').join('');
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = removeExclamationMarks;

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
comparaResultado("Hello World!", "Hello World");

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    });
});
*/
