/*
    # Product of consecutive Fib numbers

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true),
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false),
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true],
productFib(800) # should return [34, 55, false],
-----
productFib(714) # should return {21, 34, 1},
productFib(800) # should return {34, 55, 0},
-----
productFib(714) # should return {21, 34, true},
productFib(800) # should return {34, 55, false},
Note:
You can see examples for your language in "Sample Tests".

ALGORITHMS, MATHEMATICS
*/

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

// function fib(num) {
//     //F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
//     // if (num == 0 || num == 1) {
//     //     return num;
//     // }
//     if (num <= 1) {
//         return num;
//     }
//     return fib(num - 1) + fib(num - 2);
// }

function productFib(prod) {
    // ...

    //F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
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
}

/**
 * Indicar aquí la función a usar dentro de strictEqual
 * @see compararResultados
 */
const laFuncion = productFib;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
  * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function compararResultados(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
compararResultados(4895, [55, 89, true]);
compararResultados(5895, [89, 144, false]);
compararResultados((74049690), [6765, 10946, true]);
compararResultados((84049690), [10946, 17711, false]);
compararResultados((193864606), [10946, 17711, true]);
compararResultados((447577), [610, 987, false]);
compararResultados((602070), [610, 987, true]);
compararResultados((714), [21, 34, true]);
compararResultados((800), [34, 55, false]);
//compararResultados();
//compararResultados();
//compararResultados();

/*
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(productFib(4895), [55, 89, true])
    assert.sameOrderedMembers(productFib(5895), [89, 144, false])
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
    assert.sameOrderedMembers(productFib(447577), [610, 987, false])
    assert.sameOrderedMembers(productFib(602070), [610, 987, true])
  });
});
*/
