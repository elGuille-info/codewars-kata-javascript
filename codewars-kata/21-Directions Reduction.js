/*
    # Directions Reduction (5 kyu)

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another.
The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort.
Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place!
So the task is to give to the man a simplified version of the plan.
A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]

Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite
but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler.
The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
"NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such.
Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

FUNDAMENTALS
*/

function dirReduc(arr){
    // ...
    const n = "NORTH";
    const s = "SOUTH";
    const e = "EAST";
    const w = "WEST";

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }

    for (let i = 0; i < res.length; i++) {
        if (i == res.length -1) {
            break;
        }
        if ((res[i] == n && res[i+1] == s) || (res[i] == s && res[i+1] == n)) {
            res = removeTwoAt(res, i);
        }
        if ((res[i] == e && res[i+1] == w) || (res[i] == w && res[i+1] == e)) {
            res = removeTwoAt(res, i);
        }
    }

    // let hay = false;
    // let j = 0;
    // while (res.length > 0) {
    //     hay = false;
    //     j = res.indexOf(n);
    //     if (j > -1) {
    //         if (j < res.length) {
    //             if ( res[j + 1] == s ) {
    //                 res = removeTwoAt(res, j);
    //                 hay = true;
    //             }
    //         }
    //     }
    //     j = res.indexOf(s);
    //     if (j > -1) {
    //         if (j < res.length) {
    //             if ( res[j + 1] == n ) {
    //                 res = removeTwoAt(res, j);
    //                 hay = true;
    //             }
    //         }
    //     }
    //     j = res.indexOf(e);
    //     if (j > -1) {
    //         if (j < res.length) {
    //             if ( res[j + 1] == w ) {
    //                 res = removeTwoAt(res, j);
    //                 hay = true;
    //             }
    //         }
    //     }
    //     j = res.indexOf(w);
    //     if (j > -1) {
    //         if (j < res.length) {
    //             if ( res[j + 1] == e ) {
    //                 res = removeTwoAt(res, j);
    //                 hay = true;
    //             }
    //         }
    //     }

    //     if (hay == false) {
    //         break;
    //     }
    //}

    function removeTwoAt(res, j) {
        let res1 = [];
        for (let i = 0; i < res.length; i++) {
            if (i != j && i != (j+1)) {
                res1.push(res[i]);
            }
        }
        // if (j > 0) {
        //     //for (let i = j-1; i < j; i++) {
        //     for (let i = 0; i < j; i++) {
        //         res1.push(res[i]);
        //     }
        // }
        // for (let i = j + 1; i < res.length; i++) {
        //     res1.push(res[i]);
        // }
        return res1;
    }

    return res;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 */
 let laFuncion = dirReduc;

 function pruebas(arr, resOK) {
    var res = laFuncion(arr);
    console.log("[" + arr.toString() + "] = [" + resOK + "] ?= ([" + res + "])");
    if ("[" + resOK + "]" != "[" + res + "]") {
        console.log("\tEl valor devuelto es [" + res + "] y debe ser [" + resOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
pruebas(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"], ['EAST', 'NORTH']);
pruebas(["SOUTH","NORTH","WEST","EAST","SOUTH","NORTH","SOUTH","WEST","WEST","EAST","SOUTH","NORTH","EAST","WEST"], ['SOUTH', 'WEST'])
// pruebas(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]);
// pruebas(["NORTH", "WEST", "SOUTH", "EAST"], ["NORTH", "WEST", "SOUTH", "EAST"]);
// pruebas(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
// pruebas(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], ["WEST", "WEST"]);
// pruebas(["NORTH", "SOUTH"], []);
// pruebas(["EAST", "WEST", "EAST", "WEST"], []);
//pruebas();

/*
const chai = require('chai');
chai.config.truncateThreshold = 0;
const deeepEqual = chai.assert.deepEqual;

function doTest (input, expected) {
	const log = `for ${JSON.stringify(input)}\n`;
	const actual = dirReduc(input);
	deeepEqual(actual, expected, log);
}

describe("Tests", () => {
	it("test", () => {
		doTest(
			["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
			["WEST"]
		);
		doTest(
			["NORTH", "WEST", "SOUTH", "EAST"],
			["NORTH", "WEST", "SOUTH", "EAST"]
		);
		doTest(
			["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
			[]
		);
	});
});
*/