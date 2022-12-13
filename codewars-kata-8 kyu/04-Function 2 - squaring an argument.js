/*
    # Function 2 - squaring an argument

Now you have to write a function that takes an argument and returns the square of it.

FUNDAMENTALS
*/

// Write the "square"-function here

// La presentada
function square(n) {
    return n*n;
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