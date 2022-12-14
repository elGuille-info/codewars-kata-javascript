/*
    # Enumerable Magic #4 - True for None?

Create a method none? (JS none) that accepts an array and a block (JS: a function), 
    and returns true if the block (/function) returns true for none of the items in the array. 
    An empty list should return true.

FUNDAMENTALS
*/

function none(arr, fun) {
    // ...
}

// /**
//  * Indicar aquí la función a usar dentro de
//  * @see testArrNum
//  *
//  * Poner arriba el método usado para las pruebas, aunque no es necesario.
//  * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
//  */
// let laFuncion = none;

function assertEquals(res, resOK) {
    //let res = laFuncion(valor1, valor2);
    if (res == resOK) {
        console.log("\tCorrecto");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}



assertEquals(none([1, 2, 3, 4, 5], function (item) { return item > 5 }), true)
assertEquals(none([1, 2, 3, 4, 5], function (item) { return item > 4 }), false)


/*
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(none([1, 2, 3, 4, 5], function (item) { return item > 5 }), true)
        Test.assertEquals(none([1, 2, 3, 4, 5], function (item) { return item > 4 }), false)

    });
});
*/
