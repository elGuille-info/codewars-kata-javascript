// Para probar la función Fibonacci
// console.log("fib(8) = " + fib(8)); // 21
// console.log("fib(9) = " + fib(9)); // 34
// console.log("fib(1) = " + fib(1)); // 1
// console.log("fib(-5) = " + fib(-5)); // 1
// console.log("fib(20) = " + fib(20)); // 6765
// console.log("fib(77) = " + fib(77)); // 5527939700884757
// return;

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

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
