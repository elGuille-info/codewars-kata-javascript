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
    //console.log("a: " + a + " b: "+b)

    let res = (b-1) * (a-1) + (b-2) * (a-2);
    return res;
}

function rectanglePoints(a, b) {
    let x1 = (a / 2) * Math.sqrt(2);
    let y1 = (b / 2) * Math.sqrt(2);
    let x2 = -x1;
    let y2 = -y1;

    let area = a * b;
    let sideLength = 0;
    for (let x = Math.ceil(x1); x >= x2; x--) {
        for (let y = Math.ceil(y1); y >= y2; y--) {
            // Check if the point is on the sides of the rectangle.
            if (x * x + y * y == (x1 * x1 + y1 * y1)) {
                // Check if the point is not at a corner of the rectangle.
                if (x != x1 && x != x2 && y != y1 && y != y2) {
                    sideLength++;
                }
            }
        }
    }
    //return area + sideLength;
    return area + sideLength - 1;
}


/**
 * Indicar aquí la función a usar dentro de
 * @see prueba2Valores
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = rectangleRotation;

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
prueba2Valores(6, 4, 23);
prueba2Valores(30, 2, 65);
prueba2Valores(8, 6, 49);
prueba2Valores(16, 20, 333);

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