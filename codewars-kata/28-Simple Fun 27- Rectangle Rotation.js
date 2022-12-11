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

/*
    La solución de gtfo (https://velog.io/@gtfo/Simple-Fun-27-Rectangle-Rotation)
*/
function rectangleRotation_gtfo(a, b) {
    const c = Math.ceil(Math.sqrt(Math.pow(a / 2, 2) + Math.pow(b / 2, 2)));
    let counter = 0;
    for (i = -c; i < c; i++) {
        for (j = -c; j < c; j++) {
            if (check(i, j, a, -1) && check(i, j, b, +1)) {
                counter++;
            }
        }
    }
    function check(x, y, z, sign) {
        const one = sign * x - (z / 2) * Math.sqrt(2) < y;
        const two = sign * x + (z / 2) * Math.sqrt(2) > y;
        return one && two;
    }

    return counter;
}

/*
    De un código en python de: Patxi91
    https://github.com/Patxi91/CodeWars_Cloud/blob/master/4kyu-Simple%20Fun%20%2327%20Rectangle%20Rotation-Stathis.py

def rectangle_rotation(a, b):
    a = a / 2 ** 0.5
    b = b / 2 ** 0.5
    a = int(a) + 1
    b = int(b) + 1
    sum = 0
    sum = sum + a * b + (b - 1) * (a - 1)
    if sum % 2 == 0:
        sum = sum - 1
    return sum    
*/

// La presentada
function rectangleRotation(a, b) {
    let a1 = Math.floor(a / Math.sqrt(2)) + 1;
    let b1 = Math.floor(b / Math.sqrt(2)) + 1;
    let res = a1 * b1 + (b1 - 1) * (a1 - 1);
    if (res % 2 == 0) 
        res--;
    return res;
}

function rectangleRotation1(a, b) {
    let a2 = a / Math.sqrt(2);
    let b2 = b / Math.sqrt(2);
    let a3 = Math.floor(a2) + 1;
    let b3 = Math.floor(b2) + 1;
    let res = a3 * b3 + (b3 - 1) * (a3 - 1);
    if (res % 2 == 0) 
        res--;
    return res;
}

function rectangleRotation0(a, b) {
    //coding and coding..
    //console.log("a: " + a + " b: "+b)

    //let res = (b-1) * (a-1) + (b-2) * (a-2);
    let res = (a-1) * (b-1) + (a-2) * (b-2);

    return res;

}

function rectanglePoints(a, b) {
    const c = Math.ceil(Math.sqrt(Math.pow(a / 2, 2) + Math.pow(b / 2, 2)));
    let x1 = (a / 2) * Math.sqrt(2);
    let y1 = (b / 2) * Math.sqrt(2);
    let x2 = -x1;
    let y2 = -y1;

    let area = a * b;
    //console.log("\tarea = " + area);
    let sideLength = 0;
    // for (let x = Math.ceil(x1); x >= x2; x--) {
    //     for (let y = Math.ceil(y1); y >= y2; y--) {
    //         // Check if the point is on the sides of the rectangle.
    //         if (x * x + y * y == (x1 * x1 + y1 * y1)) {
    //             // Check if the point is not at a corner of the rectangle.
    //             if (x != x1 && x != x2 && y != y1 && y != y2) {
    //                 sideLength++;
    //             }
    //         }
    //     }
    // }
    //sideLength = 2 * (a + b) - 4;
    //sideLength = 2 * (a + b) - 8;
    //sideLength = (2 * (a + b) - 8) / 2;
    //sideLength = (2 * (a + b) - 8 + 4) / 2;
    //sideLength = (2 * (a + b) - 8 + 4 / 2) / 2;
    //sideLength = (2 * (a + b) - 8 + (4 / 2)) / 2;
    //sideLength   = (2.0 * (a + b) - 8) / 2.0 + 1;
    sideLength = 2 * c - 4;
    let res = (a-1) * (b-1) + (a-2) * (b-2);
    sideLength = res;
    return area * c - sideLength;
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