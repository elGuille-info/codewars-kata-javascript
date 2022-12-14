/*
    # Invert values

Given a set of numbers, return the additive inverse of each. 
    Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

LISTS, FUNDAMENTALS, ARRAYS
*/

/*
    Soluciones
*/


//1- 
// https://www.codewars.com/kata/reviews/589ad4a76778bc40c8001737/groups/5ce4cebf319aec000145bb09
const invert_1 = array => array.map(num => -num);


// Esta debería ser la solución si se desconoce la funcion map.

//2- 
// https://www.codewars.com/kata/reviews/589ad4a76778bc40c8001737/groups/589b041a229057aba50016bc
function invert_2(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(-array[i]);
    }
    return newArr;
}

// array.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// La presentada
function invert(array) {
    return array.map(x => -x);
}

/**
 * Indicar aquí la función a usar dentro de
 * @see compararArrays
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = invert;

/**
  * Para comparar dos arrays, el primero evaluado por la función (LaFuncion).
  *
  * @param {*} arr El valor del primer array.
  * @param {*} arrOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function compararArrays(arr, arrOK) {
    console.log("[" + arr?.toString() + "] --> [" + arrOK?.toString() + "]");

    let res = laFuncion(arr);
    if (res.toString() != arrOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es [" + res + "] debería ser [" + arrOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
compararArrays([1, 2, 3, 4, 5], [-1, -2, -3, -4, -5]);
compararArrays([1, -2, 3, -4, 5], [-1, 2, -3, 4, -5]);
compararArrays([], []);
compararArrays([0], [-0]);
compararArrays([1], [-1]);


/*
const Test = require('@codewars/test-compat');

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
    it("Basic Tests", () => {
        assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
        assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
        assert.deepEqual(invert([]), []);
        assert.deepEqual(invert([0]), [-0]);
    });
});
*/
