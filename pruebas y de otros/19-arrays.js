/*
Pruebas de arrays multidimensionales
*/

function mostrar(array) {
    console.log("[" + array + "]:");
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
            console.log("  [" + array[i] + "] = " + array[i] + ", array[" + i + "].length = " + k);
            //console.log("  array[" + i + "].length = " + k);
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
}

let array51 = [1, 2,3,4,5];

let array52 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
let array31 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let array6 = [[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]];
mostrar(array6);
// mostrar(array51);
// mostrar(array52);
// mostrar(array31);
