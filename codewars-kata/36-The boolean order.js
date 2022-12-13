/*
    # The boolean order (3 kyu)

In this Kata, you will be given boolean values and boolean operators. 
    Your task will be to return the number of arrangements that evaluate to True.

t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

For example, solve("tft","^&") = 2, as follows:

"((t ^ f) & t)" = True
"(t ^ (f & t))" = True
Notice that the order of the boolean values and operators does not change. What changes is the position of braces.

More examples in the test cases.

Good luck!

STRINGS, ALGORITHMS
*/

function solve(s, ops) {
    return 0;
};


/**
 * Indicar aquí la función a usar dentro de
 * @see prueba2Valores
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = solve;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function prueba2Valores(valor1, valor2, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(laFuncion.name.toString() + "(" + valor1 + ", " + valor2 + ") = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas

prueba2Valores(("tft", "^&"), 2);
prueba2Valores(("ttftff", "|&^&&"), 16);
prueba2Valores(("ttftfftf", "|&^&&||"), 339);
prueba2Valores(("ttftfftft", "|&^&&||^"), 851);
prueba2Valores(("ttftfftftf", "|&^&&||^&"), 2434);


/*
describe("Basic tests", function () {
    Test.assertEquals(solve("tft", "^&"), 2);
    Test.assertEquals(solve("ttftff", "|&^&&"), 16);
    Test.assertEquals(solve("ttftfftf", "|&^&&||"), 339);
    Test.assertEquals(solve("ttftfftft", "|&^&&||^"), 851);
    Test.assertEquals(solve("ttftfftftf", "|&^&&||^&"), 2434);
});  
*/
