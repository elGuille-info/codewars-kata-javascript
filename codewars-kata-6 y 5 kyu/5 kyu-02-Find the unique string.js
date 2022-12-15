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

/*
    Soluciones
*/

//1- https://www.codewars.com/kata/reviews/585d8cdc211697ee7a0038e4/groups/586408758129984e9b000a48
function findUniq_1(arr) {
    let [a, b, c] = arr.slice(0, 3)

    if (!similar(a, b) && !similar(a, c)) return a
    for (d of arr) if (!similar(a, d)) return d
}

function similar(x, y) {
    x = new Set(x.toLowerCase())
    y = new Set(y.toLowerCase())

    if (x.size !== y.size) return false
    for (z of x) if (!y.has(z)) return false

    return true
}


// Find the unique string ( 5 kyu )
// 2018. 1. 19. 10:54
// https://takeuu.tistory.com/239
function findUniq(arr) {
    let newArr = arr.map(a => { return [...new Set(a.toLowerCase())].sort().join('') });
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) return arr[i]
    }
}

// Presentada la de takeuu

//String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

function findUniq0(arr) {
    // do magic
    console.log(arr)

    let copia = [];
    for (let i = 0; i < arr.length; i++) {
        //copia.push(arr[i].replaceAllTxt(' ', ''));
        copia.push(arr[i]);
    }
    copia.sort((a, b) => a.toLowerCase() === b.toLowerCase() ? 0 : a.toLowerCase() < b.toLowerCase() ? -1 : 1);
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
