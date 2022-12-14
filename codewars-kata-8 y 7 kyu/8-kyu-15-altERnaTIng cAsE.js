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

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
}


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
