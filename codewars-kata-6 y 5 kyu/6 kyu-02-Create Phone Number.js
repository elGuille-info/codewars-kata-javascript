/*
    # Create Phone Number
    https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

ARRAYS, STRINGS, REGULAR EXPRESSIONS, ALGORITHMS
*/

/*
    Soluciones
    https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript
*/

//1- https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/539ceeedb9de00c4da000a4e
function createPhoneNumber_1(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

//2- https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/52604f129a002281d900124b
function createPhoneNumber_2(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
}

//3- Es cachonda
// https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/5cb4479ef180cc0001e0849d


//4- https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/525f76849a0022f9fb000138
function createPhoneNumber_4(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


// La presentada
function createPhoneNumber(numbers) {
    console.log(numbers)
    let res = "(" + numbers.slice(0, 3).join('') + ") " + numbers.slice(3, 6).join('') + "-" + numbers.slice(6, numbers.length).join('')
    return res;
}

function createPhoneNumber1(numbers) {
    console.log(numbers)
    let res = "("
    for (let i = 0; i < 3; i++) {
        res += numbers[i]
    }
    res += ") "
    for (let i = 3; i < 6; i++) {
        res += numbers[i]
    }
    res += "-"
    res += numbers.slice(6, numbers.length).join('')
    return res;
}


function strictEqual(res, resOK) {
    //let res = laFuncion(valor1, valor2);

    if (res == resOK) {
        console.log("\tCorrecto");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}

//Pruebas
strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Create Phone Number", () => {
    it("Fixed tests", () => {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});
*/
