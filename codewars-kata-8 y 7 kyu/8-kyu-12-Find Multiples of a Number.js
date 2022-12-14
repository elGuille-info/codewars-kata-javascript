/*
    # Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
    If limit is a multiple of integer, it should be included as well. 
    There will only ever be positive integers passed into the function, not consisting of 0. 
    The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

FUNDAMENTALS, ARRAYS
*/

function findMultiples(integer, limit) {
    //your code here
}

/**
 * Indicar aquí la función a usar dentro de
 * @see test2NumArray
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = findMultiples;

/**
  * Para comparar un array con el resultado devuelto por laFuncion con los dos parámetros.
  *
  * @param {*} num1 El valor del primer valor.
  * @param {*} num2 El valor del segundo valor.
  * @param {*} arrOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function test2NumArray(num1, num2, arrOK) {
    console.log(laFuncion.toString() + "(" + num1 + ", " + num2 + ") --> [" + arrOK?.toString() + "]");

    let res = laFuncion(num1, num2);
    if (res.toString() != arrOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es [" + res + "] debería ser [" + arrOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/*
const { assert } = require('chai');
it("Basic Tests", () => {
    assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
    assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
    assert.sameOrderedMembers(findMultiples(5, 7), [5])
    assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
});
*/
