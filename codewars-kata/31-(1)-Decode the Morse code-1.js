/*
    # Decode the Morse code (6 kyu)

    El kata número 30 en realidad es la parte 2. (https://www.codewars.com/kata/54b72c16cd7f5154e9000457/javascript)

Part of Series 1/3
This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one (https://www.codewars.com/kata/decode-the-morse-code-advanced).


In this kata you have to write a simple Morse code decoder. 
    While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". 
    For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
    The Morse code is case-insensitive, traditionally capital letters are used. 
    When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. 
    For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, 
    the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. 
    These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
C#: MorseCode.Get(".--") (returns string)
F#: MorseCode.get ".--" (returns string)
Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
Elm: MorseCodes.get : Dict String String
Haskell: morseCodes ! ".--" (Codes are in a Map String String)
Java: MorseCode.get(".--")
Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
Racket: morse-code (a hash table)
Rust: MORSE_CODE
Scala: morseCodes(".--")
Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. 
    In C#, tests will fail if the solution code throws an exception, please keep that in mind. 
    This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code, advanced (http://www.codewars.com/kata/decode-the-morse-code-advanced).

ALGORITHMS
*/

/*
    Soluciones
*/

//1- czyzykowski, dimochakarov, RJackson88, lukaluka, nickv2, idojs420, I__K__A, nini18, Array.length, dgregory (+ 258)
// https://www.codewars.com/kata/reviews/54be2a15518b8dcff90001f2/groups/54c8476b7ccdf528f30012a1
decodeMorse_1 = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

//2- hencethus, nrkroeker, karimation, Al-aiz A Hashim, N4roqt, aspervae, timurkaev, mstrilec, murzadaniyar@gmail.com
// https://www.codewars.com/kata/reviews/54be2a15518b8dcff90001f2/groups/57b13b068491f986e800019a
decodeMorse_2 = function (morseCode) {
    return morseCode
        .trim()
        .split(/  | /)
        .map((code) => MORSE_CODE[code] || ' ')
        .join('');
}

// De: https://stackoverflow.com/a/43726671/14338047
// Las letras estaban en minúsculas y se asignaban a 'ref'
const MORSE_CODE = {
    '···−−−···': 'SOS',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

// La presentada
//decodeMorse = function(morseCode){
function decodeMorse(morseCode) {
    // Your code here
    // You can use MORSE_CODE[morse]

    let palabras = morseCode.trimStart().trimEnd();
    let otrasPalabras = palabras.split('   ');
    let res = "";
    for (const palabra of otrasPalabras) {
        // Palabra tiene las letras separadas por comas
        let letras = palabra.split(' ');
        for (const letra of letras) {
            let word = MORSE_CODE[letra];
            res += word;
        }
        res += ' ';
    }

    return res.trimEnd();
}

// De: https://stackoverflow.com/a/43726671/14338047
function decodeMorse0(morseCode) {
    // Your code here
    // You can use MORSE_CODE[morse]

    let res = morseCode.split('   ')
        .map(a => a.split(' ').map(b => MORSE_CODE[b]).join('')
        ).join(' ');

    return res;
}

// var decoded = decodeMorse0(".-- --- .-. -..   .-- --- .-. -..");
// console.log(decoded);

/**
* Indicar aquí la función a usar dentro de
* @see testArrNum
*
* Poner arriba el método usado para las pruebas, aunque no es necesario.
* Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
*/
let laFuncion = decodeMorse;

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
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas

comparaResultado('···−−−···', 'SOS');
//comparaResultado('....', 'H');
comparaResultado('.... . -.--   .--- ..- -.. .', 'HEY JUDE');
// Leading and trailing spaces
comparaResultado('   .... . -.--   ', 'HEY');

/*
const { assert } = require('chai');

describe("Sample tests", function(){
  
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });
  
});
 
 
// describe("Your own tests", function(){
//   it("Your test case", () => {  
//     assert.strictEqual(decodeMorse(???), ???);
//   });
// });
*/