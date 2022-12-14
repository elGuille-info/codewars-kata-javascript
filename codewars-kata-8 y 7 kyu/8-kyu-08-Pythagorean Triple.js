/*
    # Pythagorean Triple

Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
    https://en.wikipedia.org/wiki/Pythagorean_triple

A Pythagorean Triple consists of arranging 3 integers, such that:

a^2 + b^2 = c^2

^2 = significa al cuadrado (o **2)

Examples
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 3^2 + 4^2 = 5^2

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 3^2 + 4^2 = 5^2

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 5^2 + 12^2 = 13^2

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a^2 + b^2 = c^2

Return Values
For Python: return True or False
For JavaScript: return true or false
Other languages: return 1 or 0 or refer to Sample Tests.

ALGEBRA, MATHEMATICS, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/62fe4d9c6793d90001161cf7/groups/62fe5d0b3de5a50001e777a2
function isPythagoreanTriple_1(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}

//2- 
// https://www.codewars.com/kata/reviews/62fe4d9c6793d90001161cf7/groups/62fe6cd43de5a50001e77c1c
function isPythagoreanTriple_2(nums) {
    const [a, b, c] = nums.sort((a, b) => a - b)

    return a ** 2 + b ** 2 === c ** 2
}

//3-
// https://www.codewars.com/kata/reviews/62fe4d9c6793d90001161cf7/groups/631050dabfd03d00012e6b2a
const isPythagoreanTriple_3 = (arr) => {

    const [a, b, c] = arr.sort((a, b) => a - b)
    const a2 = a * a;
    const b2 = b * b;
    const c2 = c * c;
    return a2 + b2 === c2;

};

// El orden de los números en el array no es importante, 
//  lo que importa es que con esos 3 números se forme una terna pitagórica (Pythagorean Triple)

function isPythagoreanTriple(integers) {
    // Good luck friends!
    //if (integers.length != 3) return null;
    const n1 = integers[0] ** 2;
    const n2 = integers[1] ** 2;
    const n3 = integers[2] ** 2;

    if (n1 + n2 == n3) return true;
    if (n2 + n3 == n1) return true;
    if (n1 + n3 == n2) return true;
    return false;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = isPythagoreanTriple;

/**
 * Comprueba los cálculos a realizar sobre un array que devuelven un valor.
 *
 * @param {*} arr El array a procesar.
 * @param {*} resOK La respuesta correcta.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 */
function testArrNum(arr, resOK, noMostrarLog) {
    if (!noMostrarLog) {
        console.log("[" + arr.toString() + "] = " + resOK);
    }

    // El resultado de la función
    var res = laFuncion(arr);

    if (resOK != res) {
        console.log("\tEl valor devuelto es '" + res + "' y debe ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
testArrNum([3, 4, 5], true)
// El orden no es importante: 3^2 + 4^2 = 5^2
testArrNum([5, 3, 4], true)
testArrNum([3, 5, 9], false)
testArrNum([100, 3, 999], false)

/*
const chai = require("chai");
const assert = chai.assert;

describe("Simple test cases", function () {
    it("Pass these", function () {
        assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
        assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
    });
});
*/
