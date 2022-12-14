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

/*
    Soluciones
*/

//1- 
// https://www.codewars.com/kata/reviews/632d3b23bea9b500010e5349/groups/632e1e81e97d230001ab0b5e
const solution_1 = (start, finish, difference = finish - start) =>
    Math.floor(difference / 3) + difference % 3

//2- 
// https://www.codewars.com/kata/reviews/632d3b23bea9b500010e5349/groups/632e46ad0c918200016df26a
function solution_2(start, finish) {
    let stepsToClimb = finish - start

    let numBigJumps = Math.floor(stepsToClimb / 3)

    let numSmallJumps = stepsToClimb % 3

    return numBigJumps + numSmallJumps
}

//3-
// https://www.codewars.com/kata/reviews/632d3b23bea9b500010e5349/groups/6370b84141aa500001807872
function solution_3(start, finish) 
{
  let remainder = (finish - start) % 3;
  return ((finish - start) - remainder) / 3 + remainder;
}

// La presentada (basada en esta de Java: https://github.com/ParanoidUser/codewars-handbook/blob/main/kata/7-kyu/cats-and-shelves/main/Kata.java )
function solution(start, finish) {
    //Mew
    let distance = finish - start
    return Math.floor(distance / 3 + distance % 3)

}

function solution_mal(start, finish) {
    //Mew
    let total = 0
    for (let i = start; i <= finish; i++) {
        total++;
        let sig = i + 3
        if (sig >= finish) break;
    }
    return total;
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
    console.log(laFuncion.name + "(" + n1 + "," + n2 + ") = " + resOK)

    let res = laFuncion(n1, n2)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

// Pruebas
pruebas(1, 5, 2)
pruebas(3, 3, 0)
pruebas(2, 4, 2)
pruebas(400, 759, 121)


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
