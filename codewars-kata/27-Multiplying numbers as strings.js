/*
    # Multiplying numbers as strings (4 kyu)

This is the first part. You can solve the second part here (https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript) 
when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

STRINGS, BIG INTEGERS, ALGORITHMS
*/

function multiply(a, b)
{
}

function multiplyStr(a, b) {
    let mul = [];
    let c = [];
    let temp = [];
    let la, lb;
    let k = 0, x = 0;
    let r = 0;
    let sum = 0;

    la = a.length - 1;
    lb = b.length - 1;
    for (let i = lb; i >= 0; i--) {
        r = 0;
        for (let j = la; j >= 0; j--) {
            let num1 = Number(b[i]);
            let num2 = Number(a[j]);
            temp[k++] = (num1 * num2 + r) % 10;
            r = Math.floor((num1 * num2 + r) / 10);
        }
        temp[k++] = r;
        x++;
        for (let y = 0; y < x; y++) {
            temp[k++] = 0;
        }
    }

    k = 0;
    r = 0;
    for (let i = 0; i < la + lb + 2; i++) {
        sum = 0;
        y = 0;
        for (let j = 1; j <= lb + 1; j++) {
            if (i <= la + j) {
                sum = sum + temp[y + i];
            }
            y += j + la + 1;
        }
        c[k++] = (sum + r) % 10;
        r = (sum + r) / 10;
    }
    c[k] = r;

    r = 0;
    for (let i = k - 1; i >= 0; i--) {
        mul[r++] = Math.floor(c[i]);
    }
    
    return mul.join('');
}

/**
 * Indicar aquí la función a usar dentro de
 * @see compararTextNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = multiplyStr;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function compararTextNum(valor1, valor2, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor1 + " =? " + valor2 + " = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
compararTextNum("2", "3", "6");
compararTextNum("30", "69", "2070");
compararTextNum("11", "85", "935");
compararTextNum("2" ,"0", "0");
compararTextNum("0", "30", "0");
compararTextNum("0000001", "3", "3");
compararTextNum("1009", "03", "3027");
compararTextNum("98765", "56894", "5619135910");
compararTextNum("1020303004875647366210", "2774537626200857473632627613", "2830869077153280552556547081187254342445169156730");
compararTextNum("58608473622772837728372827", "7586374672263726736374", "444625839871840560024489175424316205566214109298");
compararTextNum("9007199254740991", "9007199254740991", "81129638414606663681390495662081");

/*
const {assert} = require("chai");

describe('Some simple multiplications', function() {
  it('simple', function() {
    assert.strictEqual(multiply("2", "3"), "6");
    assert.strictEqual(multiply("30", "69"), "2070");
    assert.strictEqual(multiply("11", "85"), "935");
  });
});

describe('Some corner case', function() {
  it('corner cases', function() {
    assert.strictEqual(multiply("2" ,"0"), "0");
    assert.strictEqual(multiply("0", "30"), "0");
    assert.strictEqual(multiply("0000001", "3"), "3");
    assert.strictEqual(multiply("1009", "03"), "3027");
  });
});

describe('Some big multiplications', function() {
  it('big boys', function() {
    assert.strictEqual(multiply("98765", "56894"), "5619135910");
    assert.strictEqual(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
    assert.strictEqual(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
    assert.strictEqual(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
  });
});
*/