/*
    # Snail Sot

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

ARRAYS, ALGORITHMS
*/

/*
    Si tienen 3 filas, el último está en la 2ª fila, ¿en el 2º elemento?
    Si tienen 4 filas, el último está en la 3ª fila, ¿en el 2º elemento?
*/


//snail = function(array) {
function snail(array) {
    // enjoy

    if (array == null || array.length == 0) {
        return [];
    }

    let resultado = [];

    // for(var i = 0; i < array.length; i++) {
    //     var arr1 = array[i];
    //     for(var j = 0; j < arr1.length; j++) {
    //         console.log("arr1[" + i + "][" + j + "] = " + arr1[j]);
    //     }
    // }

    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < array[i].length; j++) {
    //         console.log("  array[" + i + "][" + j + "] = " + array[i][j]);
    //     }
    // }

    // Para saber si hay sub-arrays en un array
    for (let i = 0; i < array.length; i++) {
        let k = array[i].length;
        if (k != undefined) {
            console.log("  array[" + i + "].length = " + k);
            for (let j = 0; j < k; j++) {
                console.log("    array[" + i + "][" + j + "] = " + array[i][j]);
            }
        }
        // En este caso, esto no se dará
        else {
          console.log("  array[" + i + "] = " + array[i]);
        }
    }

    // // Todos los valores
    // for (let i of array) {
    //   for (let j of i) {
    //     console.log(j) //Should log numbers from 1 to 10
    //   }
    // }

    // for (let i of array) {
    //     if (i.length != undefined) {
    //       console.log("i.length = " + i.length)
    //         for (let j of i) {
    //           console.log("  " + j)
    //         }
    //     }
    //     else {
    //       console.log(i);
    //     }
    // }

    return resultado;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 */
 let laFuncion = snail;

function pruebas(arr, resOK) {
    var res = laFuncion(arr);
    console.log("[" + arr.toString() + "] = [" + resOK + "] ?= ([" + res + "])");
    if ("[" + resOK + "]" != "[" + res + "]") {
        console.log("\tEl valor devuelto es [" + res + "] y debe ser [" + resOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
pruebas([[]], []);
pruebas([[1]], [1]);
pruebas([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]);
pruebas([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
pruebas([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
//pruebas();

/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(snail([[]]), []);
Test.assertDeepEquals(snail([[1]]), [1]);
Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
});
});
*/