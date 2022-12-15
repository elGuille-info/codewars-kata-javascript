/*
    # Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

STRINGS, REGULAR EXPRESSIONS, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1-
// https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/52fba700adcd10b18200097f
function disemvowel_1(str) {
    return str.replace(/[aeiou]/gi, '');
}

//4-
// https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/5b18b8f33e96bd0e940002a1
const vowels = 'aeiou';

function disemvowel_4(str) {
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}

//5-
// https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/537e1b30989c70e20c000616
function disemvowel_5(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(function (el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}

// La presentada
function disemvowel(str) {
    const vocales = "aeiou"
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i].toLowerCase()) == -1) {
            res += str[i]
        }
    }
    return res;
}

/*
const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
        assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
        assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
})
*/
