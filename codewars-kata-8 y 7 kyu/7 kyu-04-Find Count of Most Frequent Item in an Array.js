/*
    # Find Count of Most Frequent Item in an Array

Complete the function to find the count of the most frequent item of an array. 
    You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

DATA STRUCTURES, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/565855365c9ceebb90000053/groups/56586e919c628f276f000043
function mostFrequentItemCount_1(collection) {
    if (collection.length === 0) return 0;

    var count = Object.create(null);

    collection.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    return Math.max(...Object.values(count));
}

//2- 
// https://www.codewars.com/kata/reviews/565855365c9ceebb90000053/groups/565a0c9e896e26b83a000014
// const _ = require('lodash');
// const mostFrequentItemCount_2 = collection =>
//     collection.length
//         ? _(collection).countBy().values().max().valueOf()
//         : 0;

//3- 
// https://www.codewars.com/kata/reviews/565855365c9ceebb90000053/groups/594603d9fe5b4b7bad000a75
function mostFrequentItemCount_3(collection) {
    var count = 0,
        frequentCount = 0;
    //At the start of the process this FOR loop starts at index 0 (var i)

    for (var i = 0; i < collection.length; i++) {

        //This FOR loop also starts at index 0 (var j)
        for (var j = 0; j < collection.length; j++) {

            //Var i remains on index 0 as var j cycles through the entire array comparing each number in the array to that first index (var i).
            //if var i and var j are ever the same count gets incremented.

            if (collection[i] == collection[j]) {
                count++;
            }
            //IF after cycling through the array a new more frequent number is found, that count is stored in frequentCount.
            if (frequentCount < count) {
                frequentCount = count;
            }

        }
        //Count then gets reset. Process starts again
        count = 0;

    }
    //A final count gets returned from function
    return frequentCount;
}

//4- 
// https://www.codewars.com/kata/reviews/565855365c9ceebb90000053/groups/56a902119886294997000010
function mostFrequentItemCount_4(c) {
    return c.length ? Math.max(...c.map(x => c.filter(y => y == x).length)) : 0;
}

// La presentada
function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if (collection.length == 0) return 0;
    let arr = collection.sort((a, b) => { return a - b });
    let max = 1, total = 0;
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (num != arr[i]) {
            if (total > max) {
                max = total;
            }
            num = arr[i];
            total = 1;
        } else {
            total++;
        }
    }
    if (total > max) {
        max = total;
    }
    return max;
}

// const getMax = (a, b) => Math.max(a, b);
// const getMin = (a, b) => Math.min(a, b);

// // callback is invoked for each element in the array starting at index 0
// const arr = [1, 100, -1, 150, 30];
// console.log(arr.reduce(getMax));
// console.log(arr.reduce(getMin));


/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = mostFrequentItemCount;

function pruebas(arr, resOK) {
    console.log(laFuncion.name + "([" + arr + "]) = " + resOK)

    let res = laFuncion(arr)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

// Pruebas
pruebas([-7, -6, -2, 0, 0], 2)
pruebas([-13, -15, -2, -5, 1, 13, 4, 4], 2)
pruebas([9], 1);
pruebas([3, -1, -1], 2);
pruebas([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3], 5);


/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(mostFrequentItemCount([3, -1, -1]), 2);
        Test.assertEquals(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
    });
});
*/
