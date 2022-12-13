/*
    # Function 2 - squaring an argument

Now you have to write a function that takes an argument and returns the square of it.

FUNDAMENTALS
*/

/*
    Soluciones
*/

//1- y 2-
// https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/560d966bae9b412c50000098
const square_1 = (n) => n * n;

//3-
// https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/56d804e911262de92e000b64
function square_3(x) {
    return x ** 2;
}

// Write the "square"-function here

// La presentada
function square(n) {
    return n * n;
}


function square0(n) {
    return Math.pow(n, 2)
}

console.log(square(3))

/*
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(square(3), 9);
    });
});
*/