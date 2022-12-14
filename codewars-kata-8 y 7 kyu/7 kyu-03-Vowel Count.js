/*
    # Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

STRINGS, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/54ff6303c502952f8d00023e
function getCount_1(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

//2-
// https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/551fc2ab2ff8529687000737
function getCount_2(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

//3-
// https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/587e7611cd516330a9002286
function getCount_3(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

// La presentada
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
