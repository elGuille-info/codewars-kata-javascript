/*
    # How many lightsabers do you own?

Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

FUNDAMENTALS
*/

// Las presentada (cuando tenga conexión)
function howManyLightsabersDoYouOwn(name) {
    if (name == "Zach") return 18
    return 0
}

// con parámetro opcional
function howManyLightsabersDoYouOwn2(name = '') {
    if (name == "Zach") return 18
    return 0
}


// Pruebas
console.log(howManyLightsabersDoYouOwn())
console.log(howManyLightsabersDoYouOwn("Adam"))
console.log(howManyLightsabersDoYouOwn("Zach"))

/*
const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(howManyLightsabersDoYouOwn(), 0)
        assert.strictEqual(howManyLightsabersDoYouOwn("Adam"), 0)
        assert.strictEqual(howManyLightsabersDoYouOwn("Zach"), 18)
    })
})
*/
