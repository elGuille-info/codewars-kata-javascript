/*
    # Rot13 (5 kyu)

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERS, FUNDAMENTALS

*/

function rot13(message){
    //your code here

    let res = [];

    for (let i = 0; i < message.length; i++) {
        const c = message[i].charCodeAt()
        // A = 65...Z= 90; a = 97...z=122
        if (c > 64 && c < 91) {
            let c13 = c + 13;
            if (c13 > 90) {
                c13 = c13 - 90 + 64;
            }
            res.push(String.fromCharCode(c13));
        }
        else if (c > 96 && c < 123) {
            let c13 = c + 13;
            if (c13 > 122) {
                c13 = c13 - 122 + 96;
            }
            res.push(String.fromCharCode(c13));
        }
        else {
            res.push(message[i]);
        }
    }

    return res.toString().replaceAll(",", "");

}

/*
T -> G
e -> r
s -> f
t -> g

G -> T
                  AbcdefghijklmnopqrstuvwxyZ
                  6    77            8     9
                  5    12            4     0
const alfabeto = "abcdefghijklmnopqrstuvwxyz";

*/

/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 */
 let laFuncion = rot13;

function pruebas(texto, resOK) {
    var res = laFuncion(texto);
    console.log(texto + " = " + resOK + " ?= (" + res + ")");
    if (resOK != res) {
        console.log("\tEl valor devuelto es '" + res + "' y debe ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
pruebas("test", "grfg");
pruebas("Test", "Grfg");
pruebas("Te1st?", "Gr1fg?");

/*
const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Sample tests", function() {
    for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
  });
});
*/