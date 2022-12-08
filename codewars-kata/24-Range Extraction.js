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
function rangos_nova() {
function solution_no(list){
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
console.log(solution_no([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// Output: "-6,-3-1,3-5,7-11,14-15,17-20"
}

/*
De: https://codepen.io/TheEnd/pen/gzwRQj
*/
function solutionClever(arr) {
    const arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length; i++) {
        let j = i;
        while (arrCopy[j] - arrCopy[j + 1] === -1) {
            j++;
        }
        if (j - i > 1) {
            arrCopy.splice(i, j - i + 1, arrCopy[i] + "-" + arrCopy[j]);
        }
    }
    return arrCopy.join(",");
}

/**
 * Poner los números indicados en rango, teniendo en cuenta que un rango debe abarcar al menos 3 valores.
 * Por ejemplo: 1,2,3,5,6,8,9,10,11 será: 1-3,5,6,8-11 --> 1,2,3: 1-3 and 5,6: 5,6 and 8,9,10,11: 8-11
 * [-6,
 * -3, -2, -1, 0, 1,
 * 3, 4, 5,
 * 7, 8, 9, 10, 11,
 * 14, 15,
 * 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20"
 *
 * @param {*} list List of integers in increasing order.
 * @returns A correctly formatted string in the range format.
 */
function solution(list) {
/*
[1,2,3,5,6,8,9,10,11], "1-3,5,6,8-11"
*/
    // TODO: complete solution
    let res = [];

    let num1 = list[0];
    for (let i = 0; i < list.length - 1; i++) {
        let num2 = list[i];
        // // Comprobar si el numero anterior está asignado
        // if (num1 == NaN) {
        //     // Asignar el primero
        //     num1 = num2;
        //     //res.push(num2);
        //     //continue;
        // }
        // Si no son consecutivos, añadir el número anterior
        let num3 = list[i + 1];
        let num4 = num3 - num2;
        if (list[i + 1] - num2 != 1) {
            if (num2 - num1 > 2) {
                res.push(num1 + "-" + num2);
                // Asignar el último a comprobar
                num1 = num3;
                continue;
            }
            res.push(num1);
            //num1 = num2;
            num1 = num3;
            //continue;
        }
        //num1 = num2;
    }

    return res.join(",");
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
    //console.log("Del array indicado la respuesta correcta es = " + resOK + " ?= (" + res + ")");
    console.log("[" + arr.toString() + "]");
    if (resOK != res) {
        console.log("\tEl valor devuelto es " + res + " y debe ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
// testArrNum([
//     -6,
//     -3, -2, -1, 0, 1,
//     3, 4, 5,
//     7, 8, 9, 10, 11,
//     14, 15,
//     17, 18, 19, 20], "-6,-3-1,3-5,7-11,14,15,17-20");
// testArrNum([-5,-4,0,5,6,7,9,10], "-5,-4,0,5-7,9,10");
testArrNum([1,2,3,5,6,8,9,10,11], "1-3,5,6,8-11");

/*
Ejemplos de: https://www.sololearn.com/discuss/677451/challenge-range-extraction
(no hay solución, salvo en los enlaces para Python)

Example:
Input: [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
Output "-6,-3-1,3-5,7-11,14,15,17-20"

Example 2:
Input: [-5,-4,0,5,6,7,9,10]
output: "-5,-4,0,5-7,9,10"

Example 3:
Input: [1,2,3,5,6,8,9,10,11]
Output: "1-3,5,6,8-11"

Note: a range spans at least 3 numbers. e.g. 1,2,3: 1-3 and 5,6: 5,6 and 8,9,10,11: 8-11
*/

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