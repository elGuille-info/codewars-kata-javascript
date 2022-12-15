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

/*
    Soluciones
*/

//1- 
// https://www.codewars.com/kata/reviews/55688b5dc33237baef00000e/groups/5c2c70e90bf7e200013f023a
function fibonacci_1(max) {
    if (max < 2) return 0;
    let [a, b] = [1, 0],
        sum = 0;
    while (b < max) {
        [a, b] = [b, a + b];
        if (b % 2 === 0 && b < max) sum += b;
    }
    return sum;
}

//2-
// https://www.codewars.com/kata/reviews/55688b5dc33237baef00000e/groups/61afe2659e66250001b5c054
function fibonacci_2(m) {
    let [a, b, n] = [0, 1, 0];
    while (b < m) [a, b, n] = [b, a + b, b & 1 ? n : n + b];
    return n;
}

//3-
// https://www.codewars.com/kata/reviews/55688b5dc33237baef00000e/groups/58250c2ec4d7f319980000e2
function fibonacci_3(max) {
    let res = [0, 1];
    for (let i = 1; (res[i - 1] + res[i]) < max; i++) {
        res.push(res[i - 1] + res[i]);
    }
    return res.filter(num => num % 2 === 0).reduce((a, b) => a + b);
}

//4-
// https://www.codewars.com/kata/reviews/55688b5dc33237baef00000e/groups/5a226a2041d6a06c5b00093b
function fibonacci_4(max) {
    let fib0 = 2, fib1 = 8
    let sum = 0
    while (fib0 < max) {
        sum += fib0
        let fib2 = fib1 * 4 + fib0
        fib0 = fib1
        fib1 = fib2
    }
    return sum
}

// La presentada
function fibonacci(max) {
    // Your code goes here
    let fibs = []
    fibs = fibArrayPares(max)
    if (fibs.length == 0) return 0;
    let res = fibs.reduce((a, b) => a + b)
    return res;
}

function fibArrayPares(n) {
    let fibs = []
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        if (c >= n) break;
        if (c % 2 == 0) {
            fibs.push(c)
        }
        a = b;
        b = c;
    }
    return fibs;
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
strictEqual(fibonacci(2147483647), 1485607536);
strictEqual(fibonacci(1000000000), 350704366);
strictEqual(fibonacci(100000000), 82790070);
strictEqual(fibonacci(1000000), 1089154);
strictEqual(fibonacci(1000), 798);
// strictEqual(fibonacci(100), 44);
// strictEqual(fibonacci(5), 2);
// strictEqual(fibonacci(8), 2);
// strictEqual(fibonacci(10), 10);
// strictEqual(fibonacci(1), 0);

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
