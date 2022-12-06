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

    let numSub = array.length;
    // 1- Añadir al principio todos los elementos del primer array
    for (let j = 0; j < array[0].length; j++) {
        resultado.push(array[0][j]);
    }

    // 2- Añadir el último de cada sub array (salvo la primera)
    for (let i = 1; i < array.length; i++) {
        let n = array[i].length - 1;
        resultado.push(array[i][n]);
    }

    // 3- Del último array, añadir todos desde el penúltimo hasta el primero
    for (let i = array[numSub - 1].length - 2; i >= 0; i--) {
        resultado.push(array[numSub - 1][i]);
    }

    // 4- Añadir los intermedios...
    //      Si hay 3 nada más que hacer
    if (numSub == 3) {
        // 5- Añadir los del final que estarán en el 2º empezando por el final
        let j = numSub - 2; // = 1
        for (let i = 0; i < array[j].length - 1; i++) {
            resultado.push(array[j][i]);
        }
    }
    if (numSub > 3) {
        // 4a- Si hay más de 3 añadir los primeros desde el penúltimo al segundo array
        for (let i = array[numSub - 1].length - 2; i > 0; i--) {
            resultado.push(array[numSub - 1][0]);
        }
        // 4b- Añadir del segundo desde el 2º al penúltimo
        for (let i = 1; i < array[1].length - 2; i++) {
            resultado.push(array[1][i]);
        }
        // 4c- añadir desde el 3º subarray al penúltimo, los penúltimos
        for (let i = 3; i < numSub - 1; i++) {
            let j = array[i].length - 2;
            resultado.push(array[i][j]);
        }
        // 4d- del penúltimo subarray añadir desde el antepenúltimo al segundo
        for (let i = array[numSub - 2].length - 2 ; i > 0; i--) {
            resultado.push(array[numSub - 2][i]);
        }

        // Comprobar si son pares
        let pares = numSub % 2 == 0;
        if (pares) {
            // del penúltimo-1 (numSub-3) al numSub-4, los que estén en la posición 1
            for (let i = numSub-3; i <= numSub-4; i--) {
                resultado.push(array[i][1]);
            }
            // del numSub-4, del 2º al antepenúltimo
            for (let i = 1; i < array[numSub-4].length -3; i++) {
                resultado.push(array[numSub-4][i]);
            }
            // del numSub-3 del antepenúltimo al 3º (2)
            for (let i = array[numSub-3].length -3; i < 3; i++) {
                resultado.push(array[numSub-3][i]);
            }
        }
        else {
            // 4e- Añadir los del final que estarán en el subarray del centro: 5/2 = 2.5 (2)
            // del 2ª al antepenúltimo
            let m = Math.ceil(numSub / 2);
            for (let i = 1; i < array[m].length - 3; i++) {
                resultado.push(array[m][i]);
            }
        }
    }

    // // 5- Añadir los del final que estarán en el 2º empezando por el final
    // let x = numSub - 2;
    // for (let i = 0; i < array[x].length - 1; i++) {
    //     resultado.push(array[x][i]);
    // }

    // // Ahora depende de los subarrays que haya
    // // Si son 3: Añadir del array[1] del primero al penúltimo.
    // if (numSub == 3) {
    //     for (let i = 0; i < array[1].length - 1; i++) {
    //         resultado.push(array[1][i]);
    //     }
    // }
    // else {
    //     // Si hay más de 3 sub arrays
    //     let x = numSub - 2;
    //     for (let i = 0; i < array[x].length - 1; i++) {
    //         resultado.push(array[x][i]);
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
// pruebas([[]], []);
// pruebas([[1]], [1]);
//pruebas([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// Con 5 subarrays
pruebas([
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]],
    [
        1,  2,  3,  4, 5,   // 1- Añadir al principio todos los elementos del primer array
        10, 15, 20, 25,     // 2- Añadir el último de cada sub array (salvo la primera)
        24, 23, 22, 21,     // 3- Del último array, añadir todos desde el penúltimo hasta el primero
        16, 11, 6,          // 4a- Si hay más de 3 añadir los primeros desde el penúltimo al segundo
        7, 8, 9,            // 4b- Añadir del segundo desde el 2º al penúltimo
        14, 19,             // 4c- añadir desde el 3º al penúltimo, los penúltimos
        18, 17,             // 4d- del penúltimo añadir desde el antepenúltimo al segundo
        12, 13              // 4e- Si son impares Añadir los del final que estarán en el subarray del centro: 5/2 = 2.5 (2)
                            // del 2ª al antepenúltimo
    ]);

// Con 6 subarrays
pruebas([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]],
    [
        1, 2, 3, 4, 5, 6,   // 1- Añadir al principio todos los elementos del primer array
        7, 8, 9, 10, 11,    // 2- Añadir el último de cada sub array (salvo la primera)
        12, 13, 14, 15, 16, // 3- Del último array, añadir todos desde el penúltimo hasta el primero
        17, 18, 19, 20,     // 4a- Si hay más de 3 añadir los primeros desde el penúltimo al segundo
        21, 22, 23, 24,     // 4b- Añadir del segundo desde el 2º al penúltimo
        25, 26, 27,         // 4c- añadir desde el 3º al penúltimo, los penúltimos
        28, 29, 30,         // 4d- del penúltimo añadir desde el antepenúltimo al segundo
        31, 32,             // si son pares (>3) del penúltimo-1 (numSub-3) al numSub-4, los que estén en la posición 1
        33, 34,             // si son pares (>3) del numSub-4, del 2º al antepenúltimo
        35, 36              // Si son pares (>3) del numSub-3 del antepenúltimo al 3º (2)
    ]);
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