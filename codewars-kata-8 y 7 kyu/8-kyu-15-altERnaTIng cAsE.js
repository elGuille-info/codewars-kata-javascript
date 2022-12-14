/*
    # altERnaTIng cAsE

altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase 
    (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) 
    such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.

FUNDAMENTALS
*/

/*
    Soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/56efe986900453758d00008e/groups/56f3d7802010832bb9000bb1
String.prototype.toAlternatingCase_1 = function () {
    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

//2- 
// https://www.codewars.com/kata/reviews/56efe986900453758d00008e/groups/57a02a3853ba336f6e000349
String.prototype.toAlternatingCase_2 = function () {
    new_str = "";
    for (var i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            new_str += this[i].toLowerCase();
        }
        else {
            new_str += this[i].toUpperCase();
        }
    }
    return new_str;
}

//3- 
// https://www.codewars.com/kata/reviews/56efe986900453758d00008e/groups/56f1e9e7a138a0436d001857
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase_3 = function () {
    return [...this].map(swapCase).join('');
};

// La presentada
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let res = ""
    for (let i = 0; i < this.length; i++) {
        let c = this[i]
        if (c.toUpperCase() == c) {
            c = c.toLocaleLowerCase()
        } else {
            c = c.toUpperCase()
        }
        res += c
    }
    return res
}

// Usando array con join
String.prototype.toAlternatingCase0 = function () {
    // Define your method here :)
    let res = []
    for (let i = 0; i < this.length; i++) {
        let c = this[i]
        if (c.toUpperCase() == c) {
            c = c.toLocaleLowerCase()
        } else {
            c = c.toUpperCase()
        }
        res.push(c)
    }
    return res.join('')
}


// String.prototype.toAlternatingCase = function () {
//     // Define your method here :)
// }


// Pruebas 
console.log("hello world".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
console.log("12345".toAlternatingCase());
console.log("Hello World".toAlternatingCase().toAlternatingCase())

/*
const { assert } = require('chai');

describe("String.prototype.toAlternatingCase", () => {
    it("should work for fixed tests (provided in the description)", () => {
        assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
        assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
        assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
        assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
        assert.strictEqual("12345".toAlternatingCase(), "12345");
        assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
        assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
        assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
    });
});
*/
