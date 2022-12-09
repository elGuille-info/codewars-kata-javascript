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


// La presentada, una modificación de rangeString (ver 06-solution.js en la carpeta) OpenAI - ChatGPT
function solution(list) {
    // Creamos una variable para almacenar el resultado
    let result = "";

    // Creamos una variable para almacenar el último número que hemos visto
    let lastNumber = list[0];

    // Creamos una variable para almacenar el primer número de la secuencia actual
    let start = list[0];

    // Iteramos a través de cada número en el array
    for (let i = 1; i < list.length; i++) {
        let number = list[i];

        // Si el número actual es uno más que el último número que hemos visto, entonces este número forma parte de la secuencia actual
        if (number === lastNumber + 1) {
            // Actualizamos el último número que hemos visto
            lastNumber = number;
        } else {
            // Si el número actual no es uno más que el último número que hemos visto, entonces la secuencia actual ha terminado
            // y necesitamos agregarla al resultado

            // Si la secuencia actual tiene más de dos elementos, entonces la mostramos en el formato "start-lastNumber"
            if (lastNumber - start > 1) {
                result += `${start}-${lastNumber},`;
            } else {
                // Si la secuencia actual tiene solo dos elementos, entonces la mostramos en el formato "start,lastNumber"
                if (start != lastNumber) {
                    result += `${start},${lastNumber},`;
                }
                else {
                    result += `${start},`;
                }
            }

            // Actualizamos el primer número de la secuencia actual y el último número que hemos visto
            start = number;
            lastNumber = number;
        }
    }

    // Después de iterar a través de todos los números, aún tenemos la última secuencia que no hemos agregado al resultado
    // así que lo agregamos ahora

    // Si la secuencia actual tiene más de dos elementos, entonces la mostramos en el formato "start-lastNumber"
    if (lastNumber - start > 1) {
        result += `${start}-${lastNumber}`;
    } else {
        // Si la secuencia actual tiene solo dos elementos, entonces la mostramos en el formato "start,lastNumber"
        if (start != lastNumber) {
            result += `${start},${lastNumber}`;
        }
        else {
            result += `${start}`;
        }
    }

    // Devolvemos el resultado
    return result;
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
testArrNum([
    -6,
    -3, -2, -1, 0, 1,
    3, 4, 5,
    7, 8, 9, 10, 11,
    14, 15,
    17, 18, 19, 20], "-6,-3-1,3-5,7-11,14,15,17-20");
testArrNum([-5,-4,0,5,6,7,9,10], "-5,-4,0,5-7,9,10");
testArrNum([1,2,3,5,6,8,9,10,11], "1-3,5,6,8-11");
testArrNum([1,2,3,5,6,8,9,10,11,15], "1-3,5,6,8-11,15");

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