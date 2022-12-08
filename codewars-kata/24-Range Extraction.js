/*
    # Range Extraction (4 kyu)

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org

ALGORITHMS
*/

/*
De: https://stackoverflow.com/a/70138303/14338047
Pero no es correcto.

*/
function solution(list){
    let result=[]

    for(let i=0;i<list.length;i++){
        //write first value in range to result
        result.push(list[i].toString())
        //if this is the last entry, we are done 
        if(i === list.length - 1){
            break
        }
        //initialize variables
        let e1 = list[i]
        let e2 = list[i+1]
        let isRange = false
        //run thorugh array while we get consecutive numbers
        while(e2-e1===1 && i < list.length-1){
            //modify the OUTER LOOP index variable.
            //This means when we return to the beginning of hte for loop,
            // we will be at the beginning of the next range
            i++ 
            e1 = list[i]
            e2 = list[i+1]
            isRange = true
        }
        //if there were any consecutive numbers
        if(isRange){
            //rewrite the last entry in result as a range
            result[result.length-1]+="-" + list[i].toString()
        }
    }
    return result.toString()
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

function solution0(list){
    // TODO: complete solution 
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = solution;

/**
 * Comprueba los cálculos a realizar sobre un array que devuelven un valor numérico.
 *
 * @param {*} arr El array a procesar.
 * @param {*} resOK El valor correcto.
 */
function testArrNum(arr, resOK) {
    var res = laFuncion(arr);
    // Mostrar el array
    //console.log("[" + arr.toString() + "] = " + resOK + " ?= (" + res + ")");
    // No mostrar el array
    console.log("Del array indicado la respuesta correcta es = " + resOK + " ?= (" + res + ")");
    if (resOK != res) {
        console.log("\tEl valor devuelto es " + res + " y debe ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
testArrNum([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20], "-6,-3-1,3-5,7-11,14,15,17-20");



/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  });
});
*/