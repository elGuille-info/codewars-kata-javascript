
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

/**
 * Devuelve un array con los números Fibonacci pares (even) hasta el número indicado (no inclusive)
 * es decir, los números Fibonacci menores del número indicado.
 * @param {*} n 
 * @returns 
 */
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
