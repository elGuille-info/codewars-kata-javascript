/*
    # parseInt() reloaded (4 kyu)

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them

*/

// Probar si pasa los tests
function parseInt(string) {
    // TODO: it's your task now

    // Crea un diccionario con los números escritos como texto y su valor numérico correspondiente
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
    };

    // Divide la cadena en palabras y recorre cada palabra (entre espacios)
    // Cambiamos el "dash" por un espacio y después dividimos en palabras separadas por espacios
    const words = string.replaceAll("-", " ").split(" ");
    let result = 0;
    let current = 0;
    let last = 0;
    for (const word of words) {
        // Si la palabra es "and", simplemente la ignoramos
        if (word === "and") continue;

        // Si la palabra está en el diccionario de números, actualizamos el valor actual
        if (word in numbers) {
            if (last == 0) {
                last = current;
                current = numbers[word];
                result += current;
            }
            else {
                current += numbers[word];
                result = last + current;
            }
        } else if (word === "hundred") {
            // Si la palabra es "hundred", multiplicamos el valor actual por 100
            current *= 100;
        } else if (word === "thousand") {
            // Si la palabra es "thousand", multiplicamos el valor actual por 1000 y lo agregamos al resultado, y luego reseteamos el valor actual
            result *= 1000;
            current = result;
            last = 0;
        } else if (word === "million") {
            // Si la palabra es "million", multiplicamos el valor actual por 1000000 y lo agregamos al resultado, y luego reseteamos el valor actual
            //result += current * 1000000;
            result *= 1000000;
            current = result;
            last = 0;
        }
    }
    return result;
}

function convertToNumber(text) {
    // Crea un diccionario con los números escritos como texto y su valor numérico correspondiente
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
    };

    // Divide la cadena en palabras y recorre cada palabra

    const words = text.replaceAll("-", " ").split(" ");
    let result = 0;
    let current = 0;
    let last = 0;
    for (const word of words) {
        // Si la palabra es "and", simplemente la ignoramos
        if (word === "and") continue;

        // Si la palabra está en el diccionario de números, actualizamos el valor actual
        if (word in numbers) {
            if (last == 0) {
                last = current;
                current = numbers[word];
                result += current;
            }
            else {
                current += numbers[word];
                //result = current;
                result = last + current;
            }
            //result += numbers[word];
        } else if (word === "hundred") {
            // Si la palabra es "hundred", multiplicamos el valor actual por 100
            current *= 100;
            //result += current * 100;
        } else if (word === "thousand") {
            // Si la palabra es "thousand", multiplicamos el valor actual por 1000 y lo agregamos al resultado, y luego reseteamos el valor actual
            //result += current * 1000;
            result *= 1000;
            current = result;
            last = 0;
        } else if (word === "million") {
            // Si la palabra es "million", multiplicamos el valor actual por 1000000 y lo agregamos al resultado, y luego reseteamos el valor actual
            //result += current * 1000000;
            result *= 1000000;
            last = 0;
        }
    }
    return result;
}


/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = convertToNumber;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK) {
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
comparaResultado('one', 1);
comparaResultado('twenty', 20);
comparaResultado('two hundred forty-six', 246);
comparaResultado('seven hundred eighty-three thousand nine hundred and nineteen', 783919);

/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(parseInt('one'), 1);
Test.assertEquals(parseInt('twenty'), 20);
Test.assertEquals(parseInt('two hundred forty-six'), 246);
  });
});
*/
