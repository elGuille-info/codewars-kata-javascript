
String.prototype.trimAll = function trimStartEnd() { return this.replace(/(^ +| +$)/g, ''); }

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

function decodeMorse(morseCode) {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    //let palabras = morseCode.trimStart().trimEnd();
    //let palabras = morseCode.replace(/(^ +| +$)/g, '');
    let palabras = morseCode.trimAll();
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

    //return res.trimEnd();
    //return res.replace(/(^ +| +$)/g, '');
    return res.trimAll();
}
