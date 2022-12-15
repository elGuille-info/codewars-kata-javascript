
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
