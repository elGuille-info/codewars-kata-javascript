/*
    Las pruebas del kata en "Attemp"

zero
one
two
three
four
five
six
seven
eight
nine
ten
twenty
twenty one
thirty seven
forty six
fifty nine
sixty eight
seventy two
eighty three
ninety four
one hundred
one hundred one
one hundred and one
one hundred sixty nine
two hundred and ninety nine
seven hundred thirty six
two thousand
one thousand three hundred and thirty seven
twenty six thousand three hundred and fifty nine
thirty five thousand
ninety nine thousand nine hundred and ninety nine
six hundred sixty six thousand six hundred sixty six
seven hundred thousand
two hundred thousand three
two hundred thousand and three
two hundred three thousand
five hundred thousand three hundred
*/

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

    //const words = string.toString().replaceAll("-", " ").split(" ");
    // Para que funcione en el kata, usar esto:
    String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }
    string = string.replaceAllTxt("-", " ");
    const words = string.split(' ');

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
            // Para solucionar 'one hundred'
            result = current;
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

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = parseInt;

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
// comparaResultado('one', 1);
// comparaResultado('twenty', 20);
// comparaResultado('two hundred forty-six', 246);
// comparaResultado('seven hundred eighty-three thousand nine hundred and nineteen', 783919);
// // Esta fallaba en el kata
// comparaResultado('one hundred', 100);
// Esto falla en el kata
comparaResultado('five hundred thousand three hundred', 500300);
//expected 300 to equal 500300
