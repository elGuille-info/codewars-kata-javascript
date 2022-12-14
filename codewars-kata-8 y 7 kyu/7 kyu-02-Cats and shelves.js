/*
    # Cats and shelves

Description
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

Inspirers
inspirers

ALGORITHMS
*/

function solution(start, finish) {
    //Mew
}


/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = solution;

function pruebas(n1, n2, resOK) {
    console.log(laFuncion.name + "(" + n1 + "," + n2 +") = " + resOK)

    let res = laFuncion(n1, n2)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: '" + res + "' no es '" + resOK + "'")
    }
}

// Pruebas
pruebas(1,5,2)


/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test cases", function () {
    it("Test case in description", function () {
        assert.strictEqual(solution(1, 5), 2);
    });
});
*/
