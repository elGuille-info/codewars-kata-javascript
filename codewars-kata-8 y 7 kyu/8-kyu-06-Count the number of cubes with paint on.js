/*

Upon arriving at an interview, you are presented with a solid blue cube. 
    The cube is then dipped in red paint, coating the entire surface of the cube. 
    The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. 
    You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.


Examples:
countSquares(2) --> 26
countSquares(4) --> 98

PUZZLES
*/

/*
Just an explanation for those as perplexed as I was, 
    it isn't cutting the large cube into 8 smaller cubes then cutting the smaller cubes into even smaller cubes, 
    which was how I initially read the instructions since It's poorly worded.

What you're actually being asked to do is take the initial large cube then equally space the specified number of cuts along the outside edge. 
    ie, If it specified two cuts for each dimension, then if you looked at each face it would be divided into a 9 square grid pattern, and would fall apart into 27 little cubes.

I hope someone finds this helpful, because for what should be a quick 8 kyu kata the explanation is sorely lacking in clarity.

---
Ok ! I got it ! 
For the future lost guys after me : 
    You cut only once ! I thought it was 1 cut, then 1 cut, then 1 cut... 
    In fact, you have the same big cube, and the cut results in many small cubes, in only one operation ; 
    if cuts=1, then you cut in the middle of the cube, in three directions. 
    If cuts=4, then it's like you cut it 12 times (4*3) at the same time. 

Good luck ! :)

*/

/*
ellismckenzielee - codewars-python

def count_squares(cuts):
    '''Count the number of cubes with paint on kata. If a cube is cut in 3 dimensions multiple times
    return the number of cubes which have atleast one red face'''
    return (cuts+1)**(3)-(cuts-1)**3
*/

// 2 -> 26
// 4 -> 98
// 5 -> 152
// 16 -> 1538
// 23 -> 3176

// La presentada
var countSquares = function (cuts) {
    if (cuts == 0) return 1;
    return (cuts + 1) ** 3 - (cuts - 1) ** 3;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = countSquares;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor + " = " + resOK);

    let res = "";
    try {
        res = laFuncion(valor);
    }
    catch (e) {
        res = "Error";
        console.error(e);
    }

    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
comparaResultado(1, 8)
comparaResultado(2, 26)
comparaResultado(4, 98)
comparaResultado(5, 152)
comparaResultado(16, 1538)
comparaResultado(23, 3176)


/*
describe("Basic tests", () => {
    Test.assertSimilar(countSquares(5), 152)
    Test.assertSimilar(countSquares(16), 1538)
    Test.assertSimilar(countSquares(23), 3176)
})

*/
