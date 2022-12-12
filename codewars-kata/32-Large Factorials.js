/*
    # Large Factorials (4 kyu)

In mathematics, the factorial of integer n is written as n!. 
    It is equal to the product of n and every integer preceding it. 
    For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. 
    For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). 
    For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.

ALGORITHMS, BIG INTEGERS
*/

/*
// De: https://gist.github.com/e-mihaylin/9f54f545bff70e6f8244f4e07dd35310
const factorial = n => {
    if (!n) return '1'
    let i, next, carret;
    const result = n.toString().split``.reverse().map(Number);

    while (--n) {
        i = carret = 0;
        while ((next = result[i++]) !== undefined || carret) {
            carret += n * (next || 0);
            result[i - 1] = carret % 10;
            carret = parseInt(carret / 10);
        }
    }

    return result.reverse().join``;
}
//https://www.codewars.com/kata/large-factorials/javascript
*/

function factorial_mihaylin(n) {
    if (!n) return '1'
    let i, next, carret;
    const result = n.toString().split``.reverse().map(Number);

    while (--n) {
        i = carret = 0;
        while ((next = result[i++]) !== undefined || carret) {
            carret += n * (next || 0);
            result[i - 1] = carret % 10;
            carret = parseInt(carret / 10);
        }
    }

    return result.reverse().join``;
}

function factorial_for(number) {
    if (number == 0) return '1';
    if (number == 2) return '2';

    let res = number.toString();
    // Calcularlo multiplicando el número hasta el 2.
    for (let i = number - 1; i > 1; i--)
    {
        //number *= i;
        res = multiplyStrings(res, i.toString());
    }
    //return number;
    return res;

}

function multiplyStrings(a, b) {
    // Primero, calculamos el tamaño de cada número
    let sizeA = a.length;
    let sizeB = b.length;

    // Inicializamos un arreglo para almacenar el resultado
    let result = new Array(sizeA + sizeB);
    for (let i = 0; i < sizeA + sizeB; i++) {
        result[i] = 0;
    }

    // Realizamos la multiplicación de enteros largos
    for (let i = 0; i < sizeA; i++) {
        for (let j = 0; j < sizeB; j++) {
            result[i + j + 1] += parseInt(a[i], 10) * parseInt(b[j], 10);
        }
    }

    // Llevamos a cabo la reducción de acarreo
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }

    // Convertimos el resultado a una cadena y eliminamos cualquier cero delante
    result = result.join('').replace(/^0+/, '');
    if (result == "") result = "0";

    return result;
}

function factorial(n) {
    // Add some code
    let res = fact(n);
    return res.toString();
}

function fact(n) {
    if (n > 18) {
        return factorialStr(n);
    }
    return (n != 1) ? n * fact(n - 1) : 1;
}

function factorialStr(n) {
    return multiplyStrings(n, factorialStr(n - 1));
}

function factorial0(n) {
    // Add some code

    //return (n != 1) ? n * factorial(n - 1) : 1;
    return multiplyStrings(n, factorial(n - 1));
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = factorial_for;

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

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
comparaResultado(18, '6402373705728000');
comparaResultado(23, '25852016738884976640000');
comparaResultado(100, '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000');
comparaResultado(1, '1');
comparaResultado(5, '120');
comparaResultado(9, '362880');
comparaResultado(15, '1307674368000');


/*
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(factorial(1), '1', '1!');
        Test.assertEquals(factorial(5), '120', '5!');
        Test.assertEquals(factorial(9), '362880', '9!');
        Test.assertEquals(factorial(15), '1307674368000', '15!');
    });
});
*/