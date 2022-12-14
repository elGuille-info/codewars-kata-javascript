/*
    # Return to Sanity

This function should return an object, but it's not doing what's intended. What's wrong?

DEBUGGING
*/

// la original
function mystery_mal() {
    var results =
        { sanity: 'Hello' };
    return 
    results;
}


// La presentada
function mystery() {
    var results =
        { sanity: 'Hello' };
    return results;
}

console.log(mystery());

/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertDeepEquals(mystery(), { sanity: 'Hello' }, 'Mystery has not returned to sanity');
    });
});
*/
