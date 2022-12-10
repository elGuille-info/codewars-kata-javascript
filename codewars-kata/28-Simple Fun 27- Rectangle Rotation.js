/*
    # Simple Fun #27: Rectangle Rotation (4 kyu)

Task
A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. 
Its center (the intersection point of its diagonals) coincides with the point (0, 0), 
but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example
For a = 6 and b = 4, the output should be 23

The following picture illustrates the example, and the 23 points are marked green.



Input/Output
[input] integer a

A positive even integer.

Constraints: 2 ≤ a ≤ 10000.

[input] integer b

A positive even integer.

Constraints: 2 ≤ b ≤ 10000.

[output] an integer

The number of inner points with integer coordinates.

PUZZLES
*/

function rectangleRotation(a, b) {
    //coding and coding..


}

function rectanglePoints(a, b) {
    // The center of the rectangle is at (0, 0).
    // The length of the sides of the rectangle are a and b.
    // The rectangle is rotated 45 degrees, so the x and y
    // coordinates of the vertices of the rectangle are
    // related by x = y * sqrt(2) and y = x * sqrt(2).

    // We can find the coordinates of the vertices of the
    // rectangle by setting x and y equal to a / 2 and b / 2
    // respectively, and then applying the transformation above.
    let x1 = (a / 2) * Math.sqrt(2);
    let y1 = (b / 2) * Math.sqrt(2);
    let x2 = -x1;
    let y2 = -y1;

    // The number of points inside the rectangle is equal to
    // the area of the rectangle, plus the number of points
    // on the sides of the rectangle. We can find the number
    // of points on the sides of the rectangle by taking the
    // sum of the lengths of the sides, and then dividing
    // by 2 to remove the points that were counted twice.
    // We need to add the points at the corners back in
    // to avoid undercounting.
    let area = a * b;
    let sideLength = (2 * (a + b) - 8 + 4) / 2;
    return area + sideLength;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see compararTextNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = rectanglePoints;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function compararTextNum(valor1, valor2, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor1 + " =? " + valor2 + " = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
compararTextNum(6, 4, 23);
compararTextNum(30, 2, 65);
compararTextNum(8, 6, 49);
compararTextNum(16, 20, 333);

/*
const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals( rectangleRotation(6,4),23)

Test.assertEquals( rectangleRotation(30,2),65)

Test.assertEquals( rectangleRotation(8,6),49)

Test.assertEquals( rectangleRotation(16,20),333)

})})
*/