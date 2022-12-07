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
function snailNO(array) {
    // enjoy

    if (array == null || array.length == 0) {
        return [];
    }

    let resultado = [];

    let numSub = array.length;
    // Comprobar si son pares
    let pares = numSub % 2 == 0;

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
        for (let i = array[numSub - 2].length - 2; i > 0; i--) {
            resultado.push(array[i][0]);
        }
        // 4b- Añadir del segundo desde el 2º al penúltimo
        for (let i = 1; i <= array[1].length - 2; i++) {
            resultado.push(array[1][i]);
        }

        if (pares && numSub == 4) {
            // Si son pares y hay 4, del numSub-2 del penúltimo al 2º (1)
            for (let i = array[numSub - 2].length - 2; i > 0; i--) {
                resultado.push(array[numSub - 2][i]);
            }
        }
        else {
            // 4c- añadir desde el 3º subarray al penúltimo, los penúltimos
            for (let i = 2; i < numSub - 2; i++) {
                let j = array[i].length - 2;
                resultado.push(array[i][j]);
            }
            // 4d- del penúltimo subarray añadir desde el antepenúltimo al segundo
            for (let i = array[numSub - 2].length - 2; i > 0; i--) {
                resultado.push(array[numSub - 2][i]);
            }

            if (pares) {
                // del antepenúltimo (numSub-3) al numSub-4, los que estén en la posición 1
                for (let i = numSub - 3; i >= numSub - 4; i--) {
                    resultado.push(array[i][1]);
                }
                // del numSub-4, del 3º al antepenúltimo
                for (let i = 2; i <= array[numSub - 4].length - 3; i++) {
                    resultado.push(array[numSub - 4][i]);
                }
                // del numSub-3 del antepenúltimo al 3º (2)
                for (let i = array[numSub - 3].length - 3; i >= 2; i--) {
                    resultado.push(array[numSub - 3][i]);
                }
            }
            else {
                // 4e- Si son impares, añadir los del final que estarán en el subarray del centro: 5/2 = 2.5 (2)
                // del 2ª al antepenúltimo
                let m = Math.floor(numSub / 2);
                for (let i = 1; i <= array[m].length - 3; i++) {
                    resultado.push(array[m][i]);
                }
            }
        }
    }

    return resultado;
}

function snail2(array) {
	var rotate = function(array) {
		var a = [];
		for (var i=0; i<array.length; i++)
		for (var j=0; j<array[i].length; j++) {
			var k = array[i].length - 1 - j;
			a[k] = a[k] || [];
			a[k][i] = array[i][j];
		}
		return a;
	};

	var r = [];
	while(array.length > 0){
		r = r.concat(array.shift());
		array = rotate(array);
	}
	return r;
}

function snail0(array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = (result ? result.concat(array.shift()) : array.shift());
        // Steal the right items.
        for (var i = 0; i < array.length; i++)
            result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
}

function snail(array) {
    var result;

    while (array.length) {
        // Tomamos la primera fila
        result = (result ? result.concat(array.shift()) : array.shift());

        // Tomamos los elementos de la derecha
        for (var i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }

        // Tomamos la fila de abajo y la cambiamos de orden
        result = result.concat((array.pop() || []).reverse());

        // Tomamos los elementos de la izquierda
        for (var i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    }

    return result;
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
console.log("Con 3/4 subarrays");
pruebas([
    [1, 2, 3, 5],
    [4, 5, 6, 7],
    [7, 8, 9, 10]],
    [
        1, 2, 3, 5,
        7, 10,
        9, 8, 7,
        4, 5, 6]);
console.log("Con 4/4 subarrays");
pruebas([
    [ 1,  2,  3,  5],
    [ 4,  5,  6,  7],
    [ 7,  8,  9, 10],
    [11, 12, 13, 14]],
    [
        1, 2, 3, 5,     // 1- Añadir al principio todos los elementos del primer array
        7, 10, 14,      // 2- Añadir el último de cada sub array (salvo la primera)
        13, 12, 11,     // 3- Del último array, añadir todos desde el penúltimo hasta el primero
        7, 4,           // 4a- Si hay más de 3 añadir los primeros desde el penúltimo al segundo
        5, 6,           // 4b- Añadir del segundo desde el 2º al penúltimo
        9, 8            // Si son pares y hay 4, del numSub-2 del penúltimo al 2º (1)
    ]);

// Con 5 subarrays
// console.log("Con 5 subarrays");
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
        12, 13              // 4e- Si son impares añadir los del final que estarán en el subarray del centro: 5/2 = 2.5 (2)
                            // del 2ª al antepenúltimo
    ]);

// Con 6 subarrays
console.log("Con 6/6 subarrays");
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
        31, 32,             // si son pares del antepenúltimo (numSub-3) al numSub-4, los que estén en la posición 1
        33, 34,             // si son pares del numSub-4, del 2º al antepenúltimo
        35, 36              // Si son pares del numSub-3 del antepenúltimo al 3º (2)
    ]);

console.log("Con 7/7 subarrays");
pruebas([
    [ 1,  2,  3,  4,  5,  6,  7],
    [24, 25, 26, 27, 28, 29,  8],
    [23, 40, 41, 42, 43, 30,  9],
    [22, 39, 48, 49, 44, 31, 10],
    [21, 38, 47, 46, 45, 32, 11],
    [20, 37, 36, 35, 34, 33, 12],
    [19, 18, 17, 16, 15, 14, 13]
],
    [
        1, 2, 3, 4, 5, 6, 7,        // 1- Añadir al principio todos los elementos del primer array
        8, 9, 10, 11, 12, 13,       // 2- Añadir el último de cada sub array (salvo la primera)
        14, 15, 16, 17, 18, 19,     // 3- Del último array, añadir todos desde el penúltimo hasta el primero
        20, 21, 22, 23, 24,         // 4a- Si hay más de 3 añadir los primeros desde el penúltimo al segundo
        25, 26, 27, 28, 29,         // 4b- Añadir del segundo desde el 2º al penúltimo
        30, 31, 32, 33,             // 4c- añadir desde el 3º al penúltimo, los penúltimos
        34, 35, 36, 37,             // 4d- del penúltimo añadir desde el antepenúltimo al segundo
        38, 39, 40,             // 4e- Si son impares añadir los del final que estarán en el subarray del centro: 7/2 = 3.5 (3), del 2ª al antepenúltimo
        41, 42, 43,
        44, 45,
        46, 47,
        48, 49
    ]);


/*
[
    33, 659, 41, 54, 622, 140, 579,
    294, 815, 164, 125, 188, 574, 35,
    320, 776, 55, 903, 420, 191, 333,
    290, 640, 375, 320, 696, 314, 458,
    861, 351, 700, 334, 895, 36, 540,
    53, 560, 429, 498, 119, 50, 801,
    974, 791, 803, 884, 596, 893, 865]

*/
// pruebas([
//     [128, 207, 864, 333, 487, 475],
//     [582, 531, 188, 882, 891, 387],
//     [239, 958, 569, 332, 239, 207]
// ],[
//     128, 207, 864, 333, 487, 475,
//     387, 207
// ])

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