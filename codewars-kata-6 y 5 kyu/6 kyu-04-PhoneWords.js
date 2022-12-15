/*
    # PhoneWords
    https://www.codewars.com/kata/635b8fa500fba2bef9189473/train/javascript

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:
https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1024px-Telephone-keypad2.svg.png

1 -> separa letras con el mismo número
2 -> abc
3 -> def
4 -> ghi
5 -> jkl
6 -> mno
7 -> pqrs
8 -> tuv
9 -> wxyz
0 -> espacio

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.
Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "

STRINGS, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1- https://www.codewars.com/kata/reviews/6395d12b2b986a00014f0518/groups/6395eded50408f000102f3de
function phoneWords_1(stringOfNums) {
    const keys = [' ', , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g;
    let result = '';

    stringOfNums.match(regexp)?.map(nums => {
        const key = keys[nums[0]];
        const letter = nums.length - 1;
        result += key[letter];
    });

    return result;
}

//2- https://www.codewars.com/kata/reviews/6395d12b2b986a00014f0518/groups/6397d18f4d2777000112e4d7
function phoneWords_2(str) {
    const hash = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    let word = ''

    for (let i = 0; i < str.length; i++) {
        const c = str[i]

        if (c === '0') word += ' '
        else if (c !== '1') {
            let n = 1
            while (c === str[i + n]) n++
            n = Math.min(hash[c].length, n)
            word += hash[c][n - 1]
            i += n - 1
        }
    }

    return word
}

//3- https://www.codewars.com/kata/reviews/6395d12b2b986a00014f0518/groups/6397590192f00a000178f269
function phoneWords_3(stringOfNums) {
    let obj = {
        2: "a",
        22: "b",
        222: "c",
        3: "d",
        33: "e",
        333: "f",
        4: "g",
        44: "h",
        444: "i",
        5: "j",
        55: "k",
        555: "l",
        6: "m",
        66: "n",
        666: "o",
        7: "p",
        77: "q",
        777: "r",
        7777: "s",
        8: "t",
        88: "u",
        888: "v",
        9: "w",
        99: "x",
        999: "y",
        9999: "z",
        0: " ",
    };

    let separateLetters = stringOfNums.match(/([1-68])\1{0,2}|([79])\2{0,3}|0/g) || [];
    return separateLetters.map((e) => obj[e]).join("");
}

// La presentada
String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

function phoneWords(stringOfNums) {
    console.log(stringOfNums)

    let res = stringOfNums.replaceAllTxt('1', ' ').replaceAllTxt('222', 'c').replaceAllTxt('22', 'b').replaceAllTxt('2', 'a')
        .replaceAllTxt('333', 'f').replaceAllTxt('33', 'e').replaceAllTxt('3', 'd')
        .replaceAllTxt('444', 'i').replaceAllTxt('44', 'h').replaceAllTxt('4', 'g')
        .replaceAllTxt('555', 'l').replaceAllTxt('55', 'k').replaceAllTxt('5', 'j')
        .replaceAllTxt('666', 'o').replaceAllTxt('66', 'n').replaceAllTxt('6', 'm')
        .replaceAllTxt('7777', 's').replaceAllTxt('777', 'r').replaceAllTxt('77', 'q').replaceAllTxt('7', 'p')
        .replaceAllTxt('888', 'v').replaceAllTxt('88', 'u').replaceAllTxt('8', 't')
        .replaceAllTxt('9999', 'z').replaceAllTxt('999', 'y').replaceAllTxt('99', 'x').replaceAllTxt('9', 'w')
        .replaceAllTxt(' ', '').replaceAllTxt('0', ' ');
    return res
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
strictEqual(phoneWords("443355555566604466690277733099966688"), "hello how are you")
strictEqual(phoneWords("55282"), "kata")
strictEqual(phoneWords("44460208337777833777"), "im a tester")
strictEqual(phoneWords("22266631339277717777"), "codewars")
strictEqual(phoneWords("66885551555"), "null")
strictEqual(phoneWords("833998"), "text")
strictEqual(phoneWords("000"), "   ")
strictEqual(phoneWords("7999844666166"), "python")
strictEqual(phoneWords("55886444833"), "kumite")
strictEqual(phoneWords("271755533"), "apple")
strictEqual(phoneWords(""), "")
strictEqual(phoneWords("111"), "")


/*
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Sample Test Cases", function () {
    it("Basic Test Cases", function () {
        assert.strictEqual(phoneWords("443355555566604466690277733099966688"), "hello how are you")
        assert.strictEqual(phoneWords("55282"), "kata")
        assert.strictEqual(phoneWords("44460208337777833777"), "im a tester")
        assert.strictEqual(phoneWords("22266631339277717777"), "codewars")
        assert.strictEqual(phoneWords("66885551555"), "null")
        assert.strictEqual(phoneWords("833998"), "text")
        assert.strictEqual(phoneWords("000"), "   ")
        assert.strictEqual(phoneWords("7999844666166"), "python")
        assert.strictEqual(phoneWords("55886444833"), "kumite")
        assert.strictEqual(phoneWords("271755533"), "apple")
        assert.strictEqual(phoneWords(""), "")
        assert.strictEqual(phoneWords("111"), "")
    });
});
*/
