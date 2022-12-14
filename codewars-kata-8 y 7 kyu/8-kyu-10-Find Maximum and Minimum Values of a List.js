/*
    # Find Maximum and Minimum Values of a List

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
    that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes
You may consider that there will not be any empty arrays/vectors.

FUNDAMENTALS
*/

/*
    Soluciones

    Explicación de (...list):
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

*/

// Usando los métodos de la clase Math para averiguar el menor y mayor elemento de un array.

//1- 
// https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/577b15a2d48e516872000426
const min_1 = (list) => Math.min(...list);
const max_1 = (list) => Math.max(...list);


// Clasificando los elementos de menor a mayor y viceversa y devolviendo el primer elemento.

//2- 
// https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/57871af6ba5c4b13eb00036a
var min_2 = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max_2 = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

// Clásico, si se desconocen las funciones propias de JS.

//5- 
// https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/57c6800b40e30255d40000d3
var min_5 = function(list){
    var min =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max_5 = function(list){
    var max =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}

// La presentada, aunque yo lo hubiera hecho como 5- porque desconocía los métodos min y max de la clase Math.

var min = function (list) {
    //return list[0];
    return Math.min(...list);
}

var max = function (list) {
    //return list[0];
    return Math.max(...list);
}

// /**
//  * Indicar aquí la función a usar dentro de
//  * @see testArrNum
//  *
//  * Poner arriba el método usado para las pruebas, aunque no es necesario.
//  * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
//  */
// let laFuncion = none;

// function assertEquals(res, resOK) {
//     //let res = laFuncion(valor1, valor2);
//     if (res == resOK) {
//         console.log("\tCorrecto");
//     } else {
//         console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
//     }
// }

/**
 * Comprueba los cálculos a realizar sobre un array que devuelven un valor.
 *
 * @param {*} fun La función que evalúa.
 * @param {*} resOK La respuesta correcta.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 */
function testFun(fun, resOK, noMostrarLog) {
    if (!noMostrarLog) {
        console.log(fun.toString() + " = " + resOK);
    }

    // El resultado de la función
    var res = fun;

    if (resOK != res) {
        console.log("\tEl valor devuelto es '" + res + "' y debe ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

function pruebas(arr) {
    const max = (list) =>  Math.max(...list);
    const min = (list) => Math.min(...list);

    //console.log("min: " + min(arr) + ", max = " + max(arr));
    console.log("[" + arr.toString() + "] --> min: " + min(arr) + ", max = " + max(arr));
}

// Pruebas
pruebas([-52, 56, 30, 29, -54, 0, -110])
pruebas([42, 54, 65, 87, 0])
pruebas([4, 6, 2, 1, 9, 63, -134, 566])
pruebas([5])

// testFun(min([-52, 56, 30, 29, -54, 0, -110]), -110);
// testFun(min([42, 54, 65, 87, 0]), 0);
// testFun(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
// testFun(max([5]), 5);

/*
const Test = require('@codewars/test-compat');

describe("Test", function () {
    it("Examples", function () {
        Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
        Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
        Test.assertEquals(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
        Test.assertEquals(max([5]), 5);
    });
});
*/
