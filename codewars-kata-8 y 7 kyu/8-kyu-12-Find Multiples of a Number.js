/*
    # Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
    If limit is a multiple of integer, it should be included as well. 
    There will only ever be positive integers passed into the function, not consisting of 0. 
    The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

FUNDAMENTALS, ARRAYS
*/

/*
    Soluciones
*/

//1- 
// https://www.codewars.com/kata/reviews/591ad33de5e7871cac0009be/groups/591b1a94670c8905d3000687
function findMultiples_1(int, limit) {
    let result = []

    for (let i = int; i <= limit; i += int)
        result.push(i)

    return result
}

//2- 
// https://www.codewars.com/kata/reviews/591ad33de5e7871cac0009be/groups/5953c1c3d2416119050012e8
function findMultiples_2(int, limit) {
    return Array(Math.floor(limit / int)).fill(1).map((x, i) => int * (i + 1));
}

//3- 
// 


// La presentada
function findMultiples(integer, limit) {
    //your code here
    let res = [];
    for (let i = integer; i <= limit; i += integer) {
        res.push(i);
    }
    return res;
}

// segundo intento
function findMultiples2(integer, limit) {
    //your code here
    let res = [];
    for (let i = integer; i <= limit; i += integer) {
        res.push(integer + i - integer);
        // que obviamente se puede reducir a 
        //res.push(i);
    }
    return res;
}

// primer intento
function findMultiples1(integer, limit) {
    //your code here
    let res = [];
    let num = integer;
    for (let i = integer; i <= limit; i += integer) {
        res.push(num);
        num = integer + i;
    }
    return res;
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
    console.log(laFuncion.name.toString() + "(" + num1 + "," + num2 + ") --> [" + arrOK?.toString() + "]");

    let res = laFuncion(num1, num2);
    if (res?.toString() != arrOK?.toString()) {
        console.log("\tNo es correcto. El resultado calculado es [" + res?.toString() + "] debería ser [" + arrOK?.toString() + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
test2NumArray(5, 25, [5, 10, 15, 20, 25]);
test2NumArray(1, 2, [1, 2]);
test2NumArray(5, 7, [5]);
test2NumArray(4, 27, [4, 8, 12, 16, 20, 24]);
test2NumArray(11, 54, [11, 22, 33, 44]);
test2NumArray(2, 6, [2, 4, 6]);

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
