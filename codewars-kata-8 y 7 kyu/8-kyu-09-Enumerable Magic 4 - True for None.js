/*
    # Enumerable Magic #4 - True for None?

Create a method none? (JS none) that accepts an array and a block (JS: a function), 
    and returns true if the block (/function) returns true for none of the items in the array. 
    An empty list should return true.

FUNDAMENTALS
*/

/*
    No entiendo lo que hay que hacer... al menos a partir de los ejemplos dados...

    Create a method none? (JS none) that accepts an array and a block (JS: a function), 
        and returns true if the block (/function) returns true for none of the items in the array. 
        An empty list should return true.
    
    Crear un método ninguno? (JS ninguno) que acepta una matriz y un bloque (JS: una función), 
        y devuelve verdadero si el bloque (/función) devuelve verdadero para ninguno de los elementos de la matriz. 
        Una lista vacía debería devolver verdadero.

    Comentario de ezeuzo1:
    The description of the kata and the code doesn't match. 
    What the kata author is REALLY asking for is for a function (JS) to return false if the function that is passed in returns true for ANY of the array elements.
    
    In otherwords, if the passed in function true for any of the array elements, return false. Otherwise, return true.        
*/

/*
    Las soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/5596a4a69cf26516f30001a1/groups/559c4632579a116625000040
function none_1(arr, fun) {
    return !arr.some(fun);
}

//2- 
// https://www.codewars.com/kata/reviews/5596a4a69cf26516f30001a1/groups/55c7644670d943e665000029
const none_2 = (arr, fun) => !arr.some(fun);

//3- 
// https://www.codewars.com/kata/reviews/5596a4a69cf26516f30001a1/groups/559e08a941f30c62d000001a
function none_3(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i]) == true) {
            return false;
        }
    }

    return true;
}


function none(arr, fun) {
    // ...
    // La forma abrevida usando el método some()
    //return !arr.some(fun);

    // La forma larga, comprobando uno por uno
    //if (arr === []) return true;
    for (const n of arr) {
        if (fun(n) == true) {
            return false;
        }
    }
    return true;
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

function crearFunction(arr) {
    // Buscar el valor mayor del array
    let mayor = arr.sort()[arr.length - 1];
    let fun = "function (item) { return item > " + mayor + "}";
    //return "function (item) { return item > " + mayor + "}";
    return function (item) { return item > mayor };
}

function pruebas(arr) {
    const laFunc = crearFunction(arr);
    console.log("La función: " + laFunc)
    assertEquals(none(arr, crearFunction(arr)), true)
}

// Creando la función (aunque no hacía falta)
pruebas([1, 2, 3, 4, 5])
pruebas([])

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
