/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

/*
La primera solución no es muy "clever" ni nada parecido, pero...

    //1- jdemion, Fantom1991, moniquedesalvo, ChungGor, LucasVilela, Devel00per, Dhvani Kakadiya, badr33quest, kpulkit29, milosbunijevac (+ 891)
    function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length-1);
    }

    //2- jimmy-ringo, patrickdoane, sibo wang, PiligrimAndrei, Travis Merrit
    let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

    //3- zhaoyi
    function alphabetPosition(text) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return text.toLowerCase().split('')
            .filter(letter => {
                let index = alphabet.indexOf(letter);
                return index > -1;
            })
            .map(letter => alphabet.indexOf(letter) + 1)
            .join(' ')
    }

*/

// Otra forma sin concatenar el resultado.
function alphabetPosition(text) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let res = [];

    for (let i = 0; i < text.length; i++) {
        const c = text[i]
        let n = alfabeto.indexOf(c.toLowerCase());
        if (n > -1) {
            res.push(n+1);
        }
    }

    return res.join(' ');
}

// La enviada
function alphabetPosition0(text) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let res = "";

    for (let i = 0; i < text.length; i++) {
        const c = text[i]
        let n = alfabeto.indexOf(c.toLowerCase());
        if (n > -1) {
            res += (n+1) + " ";
        }
    }
    return res.trimEnd();
}

function strictEqual(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = alphabetPosition(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Pruebas
strictEqual("The sunset sets at twelve o' clock.", "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
strictEqual("The narwhal bacons at midnight.", "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
        Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
    });
});
*/