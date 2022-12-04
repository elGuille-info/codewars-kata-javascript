/*
    # Are they the "same"?

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
with the same multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.

*/

/**
 * Indicar aquí la función a usar dentro de strictEqual
 * @see compararArrays
 */
const laFuncion = comp;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El valor a comprobar.
 * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function compararArrays(valor1, valor2, resOK) {
    console.log("[" + valor1?.toString() + "] =? [" + valor2?.toString() + "] = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Ya funciona
function comp(array1, array2){
    //your code here

    // Si cualquiera de los arrays es nulo, devolver falso
    if (array1 == null || array2 == null) {
        return false;
    }
    // Se ve que se acepta que los dos arrays tengan cero elementos
    // if ((array1.length + array2.length) == 0 || array1.length != array2.length) {
    // Si la longitud de los arrays no tienen el mismo tamaño, devolver falso
    if (array1.length != array2.length) {
        return false;
    }

    // Buscar la raíz cuadrada de array2 en array1
    for (let n of array2) {
        const sqrtN = Math.sqrt(n);

        if (array1.indexOf(sqrtN) == -1) {
            return false;
        }
    }

    // Ordenar los elementos para que estén en la misma posición
    array1 = array1.sort();
    array2 = array2.sort();

    let desde = -1;
    let num = -1;
    for (let n of array1) {
        const pow2 = Math.pow(n, 2);
        if (num == -1) {
            num = n;
        }
        else if (num != n) {
            num = n;
            desde = 0;
        }
        if (desde == -1) {
            desde = 0;
        }
        let j = array2.indexOf(pow2, desde);
        if (j == -1) {
            return false;
        }
        else {
            if (n != num) {
                num = n;
                desde = 0;
            }
            else {
                desde = j + 1;
            }
        }
    }

    return true;
}


// Pruebas
compararArrays([8, 5, 4, 7, 5, 6, 9, 8, 4, 0, 4, 3, 6, 7, 6, 9, 10, 3, 6, 8, 8, 10, 0, 1], [9, 16, 25, 36, 49, 0, 36, 16, 9, 64, 49, 100, 16, 64, 81, 36, 81, 25, 1, 0, 36, 100, 64, 64], true);
compararArrays([1, 10, 9, 4, 9, 9, 9, 1, 8, 0], [64, 81, 100, 1, 81, 1, 81, 81, 1, 16], false);
compararArrays([4, 6, 10, 3, 4, 4, 6, 2, 10, 8, 5, 4, 5, 8, 5, 6, 0, 0, 9, 1, 8, 8], [100, 64, 1, 4, 64, 16, 36, 0, 16, 1, 16, 81, 64, 25, 9, 25, 64, 25, 100, 36, 16, 36], false);
compararArrays([1, 8, 6, 2, 9, 9, 4, 5, 2, 4, 3, 0, 7, 2, 4, 0, 0, 6, 8, 1, 2, 9, 4, 6], [16, 4, 4, 1, 49, 81, 1, 64, 16, 25, 1, 4, 4, 36, 36, 0, 16, 9, 64, 81, 36, 81, 16, 0], false);
compararArrays([2, 2, 3], [4, 9, 9], false);
compararArrays([], [], true);
compararArrays([], null, false);
compararArrays([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361], true);
compararArrays([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19], true);
compararArrays([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361], false);
compararArrays([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361], false);

/*
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    assert.isTrue(comp(a1, a2));
  });
});
*/
