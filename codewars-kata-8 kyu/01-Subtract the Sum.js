/*
    # Subtract the Sum (8 kyu)

Subtract the sum
NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

Complete the function which get an input number n such that n >= 10 and n < 10000, then:

1- Sum all the digits of n.
2- Subtract the sum from n, and it is your new n.
3- If the new n is in the list below return the associated fruit, otherwise return back to task 1.

Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.

There is no preloaded code to help you. This is not about coding skills; think before you code

1-kiwi
2-pear
3-kiwi
4-banana
5-melon
6-banana
7-melon
8-pineapple
9-apple
10-pineapple
11-cucumber
12-pineapple
13-cucumber
14-orange
15-grape
16-orange
17-grape
18-apple
19-grape
20-cherry
21-pear
22-cherry
23-pear
24-kiwi
25-banana
26-kiwi
27-apple
28-melon
29-banana
30-melon
31-pineapple
32-melon
33-pineapple
34-cucumber
35-orange
36-apple
37-orange
38-grape
39-orange
40-grape
41-cherry
42-pear
43-cherry
44-pear
45-apple
46-pear
47-kiwi
48-banana
49-kiwi
50-banana
51-melon
52-pineapple
53-melon
54-apple
55-cucumber
56-pineapple
57-cucumber
58-orange
59-cucumber
60-orange
61-grape
62-cherry
63-apple
64-cherry
65-pear
66-cherry
67-pear
68-kiwi
69-pear
70-kiwi
71-banana
72-apple
73-banana
74-melon
75-pineapple
76-melon
77-pineapple
78-cucumber
79-pineapple
80-cucumber
81-apple
82-grape
83-orange
84-grape
85-cherry
86-grape
87-cherry
88-pear
89-cherry
90-apple
91-kiwi
92-banana
93-kiwi
94-banana
95-melon
96-banana
97-melon
98-pineapple
99-apple
100-pineapple

PUZZLES, STRINGS, NUMBER THEORY, MATHEMATICS
*/
// Las frutas del 1 al 100 ambos inclusive, el 0 es una cadena vacía.
const fruits = ["",
    "kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple",
    "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry",
    "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon",
    "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape", "orange",
    "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana", "kiwi",
    "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber", "orange", "cucumber",
    "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear",
    "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple",
    "cucumber", "apple", "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry",
    "apple", "kiwi", "banana", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple",
    "pineapple"];

/*
n = 10
sum = 1+0 = 1
n = 10 - 1 = 9 (apple)

n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)

sum = 2+9+7 = 18
n = 297-18 = 279  (not in the list), etc.
...
n = 99
*/

// La presentada
function SubtractSum(n) {
    //return // fruit name like "apple"
    let n1 = n;
    let cifras; // = n.split('');
    let sum; // = 0;
    while (true) {
        cifras = String(n).split('');
        sum = 0;
        for (let i = 0; i < cifras.length; i++) {
            sum += Number(cifras[i]);
        }
        n = n - sum;
        if (n <= 100) {
            break;
        }
    }
    return fruits[n];
}


/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = SubtractSum;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor + " = " + resOK);

    let res = "";
    try {
        res = laFuncion(valor);
    }
    catch (e) {
        res = "Error";
        console.error(e);
    }

    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
//comparaResultado(10, "apple");
comparaResultado(325, "apple");

/*

n = 10
sum = 1+0 = 1
n = 10 - 1 = 9 (apple)

n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)

sum = 2+9+7 = 18
n = 297-18 = 279  (not in the list), etc.

sum = 2+7+9 = 18
n = 279 -18 = 261

sum = 2+6+1= 9
n = 261 - 9 = 252

sum = 2+5+2= 9
n = 252-9 = 243

sum = 2+4+3 =9
n = 243-9 = 234

n = 234 - 9 = 225 -9 = 216 -9 = 207-9= 198
sum = 1+9+8 = 18
n = 198-18 = 180 -9= 171 - 9= 162 -9= 153 -9 = 144-9= 135-9= 126-9= 117-9= 108-9 = 99
n = 99

const Test = require('@codewars/test-compat');

describe("Solution", function () {
    it("Basic Test", function () {
        Test.assertEquals(SubtractSum(10), "apple");
    });
});
*/
