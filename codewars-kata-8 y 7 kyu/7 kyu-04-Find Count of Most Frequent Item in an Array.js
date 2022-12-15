/*
    # Find Count of Most Frequent Item in an Array

Complete the function to find the count of the most frequent item of an array. 
    You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

DATA STRUCTURES, FUNDAMENTALS
*/

function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if (collection.length == 0) return 0;


}

const getMax = (a, b) => Math.max(a, b);
const getMin = (a, b) => Math.min(a, b);

// callback is invoked for each element in the array starting at index 0
const arr = [1, 100, -1, 150, 30];
console.log(arr.reduce(getMax));
console.log(arr.reduce(getMin));


/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = mostFrequentItemCount;

function pruebas(arr, resOK) {
    console.log(laFuncion.name + "([" + arr + "]) = " + resOK)

    let res = laFuncion(arr)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

// Pruebas
pruebas([3, -1, -1], 2);
pruebas([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3], 5);


/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(mostFrequentItemCount([3, -1, -1]), 2);
        Test.assertEquals(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
    });
});
*/
