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

/*
    Soluciones
*/

//1- Unnamed, Meow, Quantumke, Kathure, JeffP6, jmcilhargey, Dimzdey, BuZZinga, Akash Chaudhary, user9150091 (+ 56)
// https://www.codewars.com/kata/reviews/551075dcaacf809d25000248/groups/5516e513a5808bc4a2000074
function dirReduc_1(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
}

//2- Balkoth, alili, lz-lee, Sacred6661, hajer62, Vlinder, Wissem-yah, njaja.midmark, dtcAlex, albertehc (+ 6)
// https://www.codewars.com/kata/reviews/551075dcaacf809d25000248/groups/5511603aaacf8071e400087f
function dirReduc_2(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

//3- xixa, flowOnWandering, jackwatk, cycy!, medhichemlemsi
// https://www.codewars.com/kata/reviews/551075dcaacf809d25000248/groups/581c48645cfa83c36100006c
function dirReduc_3(arr){
	var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
	return arr.reduce(function (a, b, i) {
  	opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
  	return a
  }, [])
}

//4- chrisd19, ched88, aaabbbaaa
// https://www.codewars.com/kata/reviews/551075dcaacf809d25000248/groups/56ad8fd35b0c3e8d3f000014
function dirReduc_4(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
          arr[i] === "EAST" && arr[i+1] === "WEST" ||
          arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
          arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
          arr.splice(i, 2);
          count++;
          i--;
      }
    }
    return count === 0 ? arr : dirReduc(arr);
}


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

    let j = 0;
    let desde = 0;
    let noHay = 0;
    while (res.length > 0) {
        desde = 0;
        while (desde < res.length) {
            j = res.indexOf(n, desde);
            if (j == -1 || j == res.length - 1) {
                noHay++;
                break;
            }
            if (res[j + 1] == s) {
                res = removeTwoAt(res, j);
                noHay = 0;
                desde = j;
            }
            else {
                desde = j + 1;
            }
        }
        desde = 0;
        while (desde < res.length) {
            j = res.indexOf(s, desde);
            if (j == -1 || j == res.length - 1) {
                noHay++;
                break;
            }
            if (res[j + 1] == n) {
                res = removeTwoAt(res, j);
                noHay = 0;
                desde = j;
            }
            else {
                desde = j + 1;
            }
        }
        desde = 0;
        while (desde < res.length) {
            j = res.indexOf(e, desde);
            if (j == -1 || j == res.length - 1) {
                noHay++;
                break;
            }
            if (res[j + 1] == w) {
                res = removeTwoAt(res, j);
                noHay = 0;
                desde = j;
            }
            else {
                desde = j + 1;
            }
        }
        desde = 0;
        while (desde < res.length) {
            j = res.indexOf(w, desde);
            if (j == -1 || j == res.length - 1) {
                noHay++;
                break;
            }
            if (res[j + 1] == e) {
                res = removeTwoAt(res, j);
                noHay = 0;
                desde = j;
            }
            else {
                desde = j + 1;
            }
        }

        if (noHay == 4 || res.length == 0) {
            break;
        }
        noHay = 0;
    }

    function removeTwoAt(res, j) {
        let res1 = [];
        for (let i = 0; i < res.length; i++) {
            if (i != j && i != (j+1)) {
                res1.push(res[i]);
            }
        }
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
pruebas(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"], [])
pruebas(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"]);
pruebas(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], ["WEST", "WEST"]);
pruebas(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"], ['EAST', 'NORTH']);
pruebas(["SOUTH","NORTH","WEST","EAST","SOUTH","NORTH","SOUTH","WEST","WEST","EAST","SOUTH","NORTH","EAST","WEST"], ['SOUTH', 'WEST'])
pruebas(["NORTH", "WEST", "SOUTH", "EAST"], ["NORTH", "WEST", "SOUTH", "EAST"]);
pruebas(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
pruebas(["NORTH", "SOUTH"], []);
pruebas(["EAST", "WEST", "EAST", "WEST"], []);
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