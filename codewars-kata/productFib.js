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

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

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

/*
productFib(714) # should return [21, 34, true],
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false],
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

/*
    // Las soluciones

    //1- joeycozza, ethanhan2013, zuka123456, Snehal Dwivedi, deyw, Trey64, ウィリアム, Bande, hebamohamed, othmanovich (+ 395)
    // https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/555eaedf3c904cb4c400004c
    function productFib(prod){
        var n = 0;
        var nPlus = 1;
        while(n*nPlus < prod) {
            nPlus = n + nPlus;
            n = nPlus - n;
        }
        return [n, nPlus, n*nPlus===prod];
    }

    //2- andrzejmobileweb, gkucmierz, kamiknx, flynntsc, arseniokl, Gaziz1989, hugodcrq, zacktoth, goose9192, danmcatee (+ 97)
    // https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/57fbdc44be6b1d5f0f00008c
    function productFib(prod){
        let [a, b] = [0, 1];
        while(a * b < prod) [a, b] = [b, a + b];
        return [a, b, a * b === prod];
    }

    //3- Abbe, DjAlbator, b2369373, felipessantos87
    // https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/55519faa3d5202a9b5000007
    function productFib(prod){
        var a = 1
        var b = 1;
        while (a*b < prod) {
            var next = a+b;
            a = b;
            b = next;
        }
        return [a, b, a*b===prod];
    }
*/

// Comprobado en el kata
function productFib(prod) {
    // ...

    let number = 1;
    while (true) {
        let fib1 = fib(number);
        let fib2 = fib(number + 1);
        let fibProd = fib1 * fib2;
        if (fibProd == prod) {
            return [fib1, fib2, true];
        }
        if (fibProd > prod) {
            return [fib1, fib2, false];
        }
        number++;
    }

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
