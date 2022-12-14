/*
    @ Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

STRINGS, FUNDAMENTALS
*/

function getCount(str) {
    //return 0;
    const vocales = "aeiou"
    let total = 0
    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i]) > -1) {
            total++
        }
    }
    return total
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = getCount;

function pruebas(str, resOK) {
    console.log(laFuncion.name + "(" + str + ") = " + resOK)

    let res = laFuncion(str)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

// Pruebas
pruebas("abracadabra", 5)


/*
const { assert } = require("chai");

describe("Vowels Count Tests", function () {
    it("should return 5 for 'abracadabra'", function () {
        assert.strictEqual(getCount("abracadabra"), 5);
    });
});
*/
