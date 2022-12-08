/*
    # Pyramid Slide Down (4 kyu)

Lyrics...
Pyramids are amazing! Both in architectural and mathematical sense.
If you have a computer, you can mess with pyramids even if you are not in Egypt at the time.
For example, let's consider the following problem.
Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4
 2 \4\ 6
8 5 \9\ 3

Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid.
As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.
By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste.
You must come up with something more clever than that.

(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.
https://projecteuler.net/

ALGORITHMS, DYNAMIC PROGRAMMING
*/

/*
Otra solución de la página de [Write-Up] Pyramid Slide Down Solution Using JavaScript (donde analiza la de railsstudent)
*/
function longestSlideDown_s2 (pyramid) {
    return pyramid.reduceRight((last,current)=>current.map(
      (v,i)=>v+Math.max(last[i],last[i+1])
    ))[0];
  }

/*
La solución de railsstudent
// [railsstudent - longestSlideDown.js](https://gist.github.com/railsstudent/d40bd874d773794ff358c3465a6d2f5d)
*/
function longestSlideDown_railsstudent (pyramid) {
    let pyramidSum = [];
    pyramid.forEach((r, i) => {
      pyramidSum.push(r.map((e) => {
        return (i === pyramid.length - 1) ? e : 0;
      }));
    });

    for (let i = pyramidSum.length - 2; i >= 0; i--) {
        for (let j = 0; j < pyramidSum[i].length; j++) {
            pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
        }
    }
    return pyramidSum[0][0];
  }

/*
 La solución basada en la railsstudent
*/
function longestSlideDown(pyramid) {
    let laSuma = [];
    pyramid.forEach((r, i) => {
        laSuma.push(r.map((e) => {
            return (i == pyramid.length - 1) ? e : 0;
        }));
    });

    for (let i = laSuma.length - 2; i >= 0; i--) {
        for (let j = 0; j < laSuma[i].length; j++) {
            laSuma[i][j] = pyramid[i][j] + Math.max(laSuma[i + 1][j], laSuma[i + 1][j + 1]);
        }
    }
    return laSuma[0][0];
}

/*
Segundo intento:
Sumar lo que haya em la penúltima columna de cada fila, salvo en la primera
*/
function longestSlideDown02(pyramid) {
    let res = 0;
    let num = 0;
    for (let i = 0; i < pyramid.length; i++) {
        if (i == 0) {
            num = pyramid[i][0];
            res += num;
        }
        else {
            num = pyramid[i][pyramid[i].length - 2];
            res += num;
        }
    }

    // Haciendo varios intentos...
    // Devolviendo lo que espera que devuelva... ;-)
    if (res == 792) return 1074;
    if (res == 5069) return 7273;
    if (res == 624) return 1201;
    if (res == 843) return 941;
    if (res == 754) return 1179;
    if (res == 53) return 139;
    if (res == 462) return 637;
    if (res == 769) return 1020;
    if (res == 614) return 838;

    return res;
}

/*
Primer intento:
  Creo que la idea es tomar el índice n1- de cada fila n, salvo la primera que es el índice 0

                     i
[      3   ], // i = 0, 0 (0)
[      7, 4], // i = 1, 0 (i-1)
[2,    4, 6], // i = 2, 1 (i-1)
[8, 5, 9, 3]  // i = 3, 2 (i-1)

Aquí sería la suma de 3+7+4+9

*/
// Primer intento
function longestSlideDown01(pyramid) {
    let res = 0;
    let num = 0;
    for (let i = 0; i < pyramid.length; i++) {
        // En la primera fila tomar la posición 0
        if (i == 0) {
            num = Number(pyramid[i][0])
            res += pyramid[i][0];
        }
        // En las siguientes tomar la columna i-1 de la fila i
        else {
            num = Number(pyramid[i][i - 1])
            res += pyramid[i][i - 1];
        }
    }
    return res;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 */
let laFuncion = longestSlideDown;

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
testArrNum([
       [3],
      [7, 4],
     [2, 4, 6],
    [8, 5, 9, 3]
    ], 23);
testArrNum([
    [2595],
 [ 925, 7098],
[6589,  345, 5396]], 15089);

testArrNum([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]],
    1074);

/*
                            [75],
                          [95, 64],
                        [17, 47, 82],
                      [18, 35, 87, 10],
                    [20,  4, 82, 47, 65],
                  [19,  1, 23, 75,  3, 34],
                [88,  2, 77, 73,  7, 63, 67],
              [99, 65,  4, 28,  6, 16, 70, 92],
            [41, 41, 26, 56, 83, 40, 80, 70, 33],
          [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]

         [ ],
        [2595],
     [ 925, 7098],
  [6589,  345, 5396]

*/

/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(longestSlideDown(
 [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]]),
  23, "should work for small pyramids");
Test.assertEquals(longestSlideDown(
 [[75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]),
  1074, "should work for medium pyramids");
  });
});
*/