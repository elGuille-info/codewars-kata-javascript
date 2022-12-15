/*
    # Who likes it?
    https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

STRINGS, FUNDAMENTALS
*/

/*
    Soluciones
*/

//1- https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/5266a1f09e13cf095f000444
function likes_1(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

//2- https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/564ab2ff633fa181490000b7
function likes_2(names) {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)]
}

//3- https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/5410adce20fd468f2e000ced
function likes_3(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}

//4- https://www.codewars.com/kata/reviews/5266876c8f4bf2da9b000365/groups/52769ffa4ca29af9130000cc
function likes_4(names) {
    if (names.length === 0) return "no one likes this";
    if (names.length === 1) return names[0] + " likes this";
    if (names.length === 2) return names[0] + " and " + names[1] + " like this";
    if (names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}


// La presentada
function likes(names) {
    // TODO
    console.log("[" + names + "]");
    if (names.length == 0) {
        return 'no one likes this'
    }
    if (names.length == 1) {
        return names[0] + " likes this"
    }
    if (names.length >= 4) {
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
    if (names.length == 2) {
        return names[0] + " and " + names[1] + " like this"
    }
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"
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
strictEqual(likes([]), 'no one likes this');
strictEqual(likes(['Peter']), 'Peter likes this');
strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('example tests', function () {
    it('should return correct text', function () {
        assert.strictEqual(likes([]), 'no one likes this');
        assert.strictEqual(likes(['Peter']), 'Peter likes this');
        assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
*/
