/*
    # Even Fibonacci Sum
    La suma par de Fibonacci
    https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. 
    Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

ALGORITHMS
*/

function fibonacci(max) {
    // Your code goes here
    console.log("fibonnacci("+ max + ")")
    let fibs = []
    for (let i = 2; i < max; i++) {
        let n = fib(i)
        if (n < max) {
            fibs.push(n)
        }
    }
    console.log(fibs)
    let suma = 0;
    for (let i = 0; i < fibs.length; i++) {
        if (fibs[i] % 2 == 0) {
            suma += fibs[i]
        }
    }
    return suma;
}

/**
 * Función de fibonacci optimizada.
 * De https://javascript.info/task/fibonacci-numbers
 * Usando https://en.wikipedia.org/wiki/Dynamic_programming
 *
 * @param {*} n El número a evaluar según la secuencia Fibonacci.
 * @returns El resultado. F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
 */
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function strictEqual(res, resOK) {
    //let res = laFuncion(valor1, valor2);

    if (res == resOK) {
        console.log("\tCorrecto");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}


// Pruebas
// strictEqual(fibonacci(2147483647), 1485607536);
// strictEqual(fibonacci(1000000000), 350704366);
// strictEqual(fibonacci(100000000), 82790070);
// strictEqual(fibonacci(1000000), 1089154);
strictEqual(fibonacci(1000), 798);
strictEqual(fibonacci(100), 44);
strictEqual(fibonacci(5), 2);
strictEqual(fibonacci(8), 2);
strictEqual(fibonacci(10), 10);
strictEqual(fibonacci(1), 0);

/*
const { assert } = require("chai");

describe("Even Fibonacci Sum", () => {
    it("example tests", () => {
        assert.strictEqual(fibonacci(2147483647), 1485607536);
        assert.strictEqual(fibonacci(1000000000), 350704366);
        assert.strictEqual(fibonacci(100000000), 82790070);
        assert.strictEqual(fibonacci(1000000), 1089154);
        assert.strictEqual(fibonacci(1000), 798);
        assert.strictEqual(fibonacci(100), 44);
        assert.strictEqual(fibonacci(5), 2);
        assert.strictEqual(fibonacci(8), 2);
        assert.strictEqual(fibonacci(10), 10);
        assert.strictEqual(fibonacci(1), 0);
    });
});
*/
