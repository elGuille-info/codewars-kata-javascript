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
    Soluciones

//1- Unnamed, NeXz22, Doris_Fan, qimingzizhennan, Ocelotl_Fer, Decimo, Seantan, reti, user69279, Lowest (+ 16)
// https://www.codewars.com/kata/reviews/5583630cbe42d10d2c000116/groups/55844a867aac208da600004b
function factorial(n) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}

//2- user2346098
// https://www.codewars.com/kata/reviews/5583630cbe42d10d2c000116/groups/59dce9ee0ead8a2623000336
//No la pongo porque realmente no es una función

//3- Abbe, pompeu2004
//https://www.codewars.com/kata/reviews/5583630cbe42d10d2c000116/groups/55893467ed9cedfbec00009f
function BigInt(n) {
  this.digits = Array.isArray(n) ? n : n.toString().split('').reverse().map(Number);
  
  this.mulInt = function(n) {
    var digits = this.digits;
    var result = [];
    var carry = 0;
    for(var i = 0; i < digits.length; i++) {
      var prod = carry + n * digits[i];
      var d = prod % 10;
      carry = (prod - d) / 10;
      result.push(d);
    }
    if (carry > 0)
      result.push.apply(result, carry.toString().split('').reverse().map(Number));
    return new BigInt(result);
  }
  
  this.toString = function() {
    return this.digits.reverse().join('');
  }
}

function factorial(n) {
  var result = new BigInt(1);
  for(var i = 1; i <= n; i++)
    result = result.mulInt(i);
  return result.toString();
}

//4- Es casi como el 2

//5- jegan145
// https://www.codewars.com/kata/reviews/5583630cbe42d10d2c000116/groups/586c57b74ad5dea87a0014fd
function factorial(n){
  let result = '1'
  while (n > 1) 
    result = multiply(result, n--)
  return result
}

function multiply(str, x) {  
  const resultDigits = []
  let carry = 0
  
  str.split('').reverse().forEach(char => {
    let intermediate = Number(char) * x + carry
    resultDigits.unshift(intermediate % 10)
    carry = Math.floor(intermediate / 10)    
  })
  if (carry > 0) 
    resultDigits.unshift(carry)
  
  return resultDigits.join('')
}

*/

function factorial0(number) {
    if (number == 0) return '1';
    if (number == 2) return '2';

    let res = number.toString();
    // Calcularlo multiplicando el número hasta el 2.
    for (let i = number - 1; i > 1; i--) {
        // Esta función se puede usar de las dos formas.
        res = multiply(res, i);
        //res = multiply(res, i.toString());
    }
    return res;
}

function multiply(str, x) {
    const resultDigits = []
    let carry = 0

    str.split('').reverse().forEach(char => {
        let intermediate = Number(char) * x + carry
        resultDigits.unshift(intermediate % 10)
        carry = Math.floor(intermediate / 10)
    })
    if (carry > 0)
        resultDigits.unshift(carry)

    return resultDigits.join('')
}


// La presentada
function factorial(number) {
    if (number == 0) return '1';
    if (number == 2) return '2';

    let res = number.toString();
    // Calcularlo multiplicando el número hasta el 2.
    for (let i = number - 1; i > 1; i--) {
        res = multiplyStrings(res, i.toString());
    }
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

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = factorial;

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