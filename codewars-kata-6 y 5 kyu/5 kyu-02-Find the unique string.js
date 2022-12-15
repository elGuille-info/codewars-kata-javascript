/*
    # Find the unique string
    https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

There is an array of strings. 
    All strings contains similar letters except one. 
    Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

Find the unique number
    https://www.codewars.com/kata/585d7d5adb20cf33cb000235
Find the unique string (this kata)
    https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
Find The Unique (--> retirado)
    https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5

FUNDAMENTALS, ALGORITHMS, ARRAYS, STRINGS
*/

//String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

function findUniq(arr) {
    // do magic
    console.log(arr)

    let copia = [];
    for (let i = 0; i < arr.length; i++) {
        //copia.push(arr[i].replaceAllTxt(' ', ''));
        copia.push(arr[i]);
    }
    copia.sort( (a, b) => a.toLowerCase() === b.toLowerCase() ? 0 : a.toLowerCase() < b.toLowerCase() ? -1 : 1 );
    let res = "";
    let una = copia[0];
    let esUna = false;
    for (let i = 1; i < copia.length; i++) {
        esUna = true;
        for (const c of una) {
            if (c == ' ') continue;

            if (copia[i].toLowerCase().indexOf(c.toLowerCase()) > -1) {
                esUna = false;
                una = copia[i];
                break;
            }
        }
        if (esUna == false) {
            //una = copia[i];
            res = una;
            //break;
        }
    }
    return res;
}

function strictEqual(res, resOK) {
    //let res = laFuncion(valor1, valor2);

    if (res == resOK) {
        console.log("\tLa respuesta es correcta: '" + res + "'");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}

//Pruebas
strictEqual(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
strictEqual(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
strictEqual(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
strictEqual(findUniq(['    ', 'a', ' ']), 'a');

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('findUniq', () => {
    it('should handle sample cases', () => {
        assert.strictEqual(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
        assert.strictEqual(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
        assert.strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
        assert.strictEqual(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
        assert.strictEqual(findUniq(['    ', 'a', ' ']), 'a');
    });
});
*/
