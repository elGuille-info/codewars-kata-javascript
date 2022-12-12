/*
    # Decode the Morse code, advanced (4 kyu)

Part of Series 2/3
This kata is part of a series on the Morse code. 
    Make sure you solve the previous part before you try this one. 
    After you solve this kata, you may move to the next one (https://www.codewars.com/kata/decode-the-morse-code-for-real).


In this kata you have to write a Morse code decoder for wired electrical telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. 
    The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. 
    And in fact different operators would transmit at different speed. 
    An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, 
    and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. 
    After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. 
    Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. 
    Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).


Eg:
  morseCodes(".--") //to access the morse translation of ".--"
All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

After you master this kata, you may try to Decode the Morse code, for real.

ALGORITHMS
*/

/*
    El código presentado

String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
    // Quitar los 0 de elante y detrás
    bits = bits.replace(/(^0+|0+$)/g, ''); //.split('');

    // Buscar la frecuencia ('time unit')
    const freq = detectBitRate(bits);

    let dot = "1".repeat(freq);
    let dash = "111".repeat(freq);
    let ceros = "0"; //.repeat(freq);
    let espacios = "000".repeat(freq);
    let entrePalabra = "000000".repeat(freq);

    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
    let enMorse = bits.replaceAllTxt(dash, '-').replaceAllTxt(dot, '.').replaceAllTxt(entrePalabra, '   ').replaceAllTxt(espacios, ' ').replaceAllTxt(ceros, ''); 
    return enMorse;
  
}

function detectBitRate(bits) {
    let start = 0, end = bits.length - 1;
    while (start < bits.length && bits.charAt(start) == '0') start++;
    while (end >= 0 && bits.charAt(end) == '0') end--;

    if (bits.length <= 1) {
        return 1;
    }

    let minOnesLength = Number.MAX_VALUE;
    let minZerosLength = Number.MAX_VALUE;

    for (let i = start; i <= end; i++) {
        if (i > 0 && bits.charAt(i) == '1' && bits.charAt(i - 1) == '0') {
            let count = 0;
            while (i <= end && bits.charAt(i) == '1') {
                count++;
                i++;
            }

            if (count < minOnesLength) {
                minOnesLength = count;
            }
        }
    }

    for (let i = start; i <= end; i++) {
        if (i > 0 && bits.charAt(i) == '0' && bits.charAt(i - 1) == '1') {
            let count = 0;
            while (i <= end && bits.charAt(i) == '0') {
                count++;
                i++;
            }

            if (count < minZerosLength) {
                minZerosLength = count;
            }
        }
    }

    if (minOnesLength == Number.MAX_VALUE && minZerosLength == Number.MAX_VALUE) {
        return bits.length;
    }

    return Math.min(minOnesLength, minZerosLength);

}

var decodeMorse = function(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    //return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
    //let palabras = morseCode.trimStart().trimEnd();
    let palabras = morseCode.replace(/(^ +| +$)/g, '');
    let otrasPalabras = palabras.split('   ');
    let res = "";
    for (const palabra of otrasPalabras) {
        // Palabra tiene las letras separadas por comas
        let letras = palabra.split(' ');
        for (const letra of letras) {
            let word = MORSE_CODE[letra];
            // if (letra == '') {
            //     word = ' ';
            // }
            res += word;
        }
        res += ' ';
    }

    //return res.trimEnd();
    return res.replace(/(^ +| +$)/g, '');
 }    
*/

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

String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

// Espero que sea válida

// var decodeBits = function (bits) {
function decodeBits(bits) {
    // Quitar los 0 de elante y detrás
    bits = bits.replace(/(^0+|0+$)/g, ''); //.split('');

    // Buscar la frecuencia ('time unit')
    const freq = detectBitRate(bits);

    let dot = "1".repeat(freq);
    let dash = "111".repeat(freq);
    let ceros = "0"; //.repeat(freq);
    let espacios = "000".repeat(freq);
    let entrePalabra = "000000".repeat(freq);

    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
    let enMorse = bits.replaceAllTxt(dash, '-').replaceAllTxt(dot, '.').replaceAllTxt(entrePalabra, '   ').replaceAllTxt(espacios, ' ').replaceAllTxt(ceros, ''); 
    return enMorse;
}



/*
    Adaptado del código para Java de: https://gist.github.com/bashmohandes/b9b9c2f2c9441c6f4260b5da853c0b5f
*/
function detectBitRate(bits) {
    let start = 0, end = bits.length - 1;
    while (start < bits.length && bits.charAt(start) == '0') start++;
    while (end >= 0 && bits.charAt(end) == '0') end--;

    if (bits.length <= 1) {
        return 1;
    }

    let minOnesLength = Number.MAX_VALUE;
    let minZerosLength = Number.MAX_VALUE;

    for (let i = start; i <= end; i++) {
        if (i > 0 && bits.charAt(i) == '1' && bits.charAt(i - 1) == '0') {
            let count = 0;
            while (i <= end && bits.charAt(i) == '1') {
                count++;
                i++;
            }

            if (count < minOnesLength) {
                minOnesLength = count;
            }
        }
    }

    for (let i = start; i <= end; i++) {
        if (i > 0 && bits.charAt(i) == '0' && bits.charAt(i - 1) == '1') {
            let count = 0;
            while (i <= end && bits.charAt(i) == '0') {
                count++;
                i++;
            }

            if (count < minZerosLength) {
                minZerosLength = count;
            }
        }
    }

    if (minOnesLength == Number.MAX_VALUE && minZerosLength == Number.MAX_VALUE) {
        return bits.length;
    }

    return Math.min(minOnesLength, minZerosLength);

}

// var decodeMorse = function (morseCode) {
function decodeMorse(morseCode) {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    //return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
    //let palabras = morseCode.trimStart().trimEnd();
    let palabras = morseCode.replace(/(^ +| +$)/g, '');
    let otrasPalabras = palabras.split('   ');
    let res = "";
    for (const palabra of otrasPalabras) {
        // Palabra tiene las letras separadas por comas
        let letras = palabra.split(' ');
        for (const letra of letras) {
            let word = MORSE_CODE[letra];
            // if (letra == '') {
            //     word = ' ';
            // }
            res += word;
        }
        res += ' ';
    }

    //return res.trimEnd();
    return res.replace(/(^ +| +$)/g, '');
}

function decodeMorseBits(bits) {
    return decodeMorse(decodeBits(bits));
}

/**
* Indicar aquí la función a usar dentro de
* @see testArrNum
*
* Poner arriba el método usado para las pruebas, aunque no es necesario.
* Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
*/
let laFuncion = decodeMorseBits;

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
// '.... . -.--', 'HEY'
comparaResultado('11001100110011000000110000001111110011001111110011111100000000000000', 'HEY');
comparaResultado('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011', 'HEY JUDE');

/*
describe("Example from description", function(){
    Test.assertEquals(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')), 'HEY JUDE')
    })
*/