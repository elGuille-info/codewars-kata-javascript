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
    Soluciones
*/

//1- xantix, karimov_ads
// https://www.codewars.com/kata/reviews/5886e118206a6530bf00079a/groups/5e5e9d3d1cff4900017347df
function rectangleRotation_1(a, b) {

    /* If we mark the inner points based on (E)ven and (O)dd 
       Manhatten distance from the origin. We end up with 
       an odd and an even rectangle. For example with (6,4):
       
      4 3 2 1 0 1 2 3 4
      
      3         E
               / \
      2       E O E
             / / \ \
      1     E O E O E  
           / /   / /
      0   E O E O E
         / /   / /
      1 E O E O E
         \ \ / /
      2   E O E
           \ / 
      3     E
      
      4
    
      To get the whole number of points, we just need to:
      1. Find the dimension of the even rectangle (5 by 3)
      2. Find the dimensions of the odd rectangle (4 by 2)
      3. Multiply and add together (5*3) + (4*2) = 23
      
      To find the dimensions of the even rectangle we can count 
      the number of hops of length sqrt(2) that it takes to start
      at the origin and move North-East until we reach the edge 
      of the rectangle (half of a). Multiply by two, but subtract 
      one so we don't double count the origin. Repeat North-West.
      
      To find the dimensions of the odd rectangle we can start
      by walking one grid point East if we can. (we can do this
      since a and b are both >= 2). Doing so, takes us just a 
      little bit closer to the top right side of the 
      rectangle (by 1/sqrt(2)). From this point see how many
      North-East hops of length sqrt(2) it takes to reach the edge 
      of the rectangle (half of a). Mutliply by two. 
      Repeat South-East.
    */

    const ceil = Math.ceil;
    const sqrt2 = Math.sqrt(2);
    const invSqrt2 = 1 / sqrt2;
    const halfA = a / 2;
    const halfB = b / 2;

    const evenDimension1 = (ceil(halfA / sqrt2) * 2) - 1;
    const evenDimension2 = (ceil(halfB / sqrt2) * 2) - 1;

    const evenPoints = evenDimension1 * evenDimension2;

    const oddDimension1 = ceil((halfA - invSqrt2) / sqrt2) * 2;
    const oddDimension2 = ceil((halfB - invSqrt2) / sqrt2) * 2;

    const oddPoints = oddDimension1 * oddDimension2;

    return oddPoints + evenPoints;
}

//2- cave.on, alvar91, user2451771, 任自博, mon3emm, Denis_Narol
// https://www.codewars.com/kata/reviews/5886e118206a6530bf00079a/groups/5932d7f754491dc811000613
function rectangleRotation_2(a, b) {

    let h = a / Math.sqrt(2) | 0
        , v = b / Math.sqrt(2) | 0;

    return h * v + (h + 1) * (v + 1) - (h % 2 ^ v % 2);

}

//3- 0lexa
// https://www.codewars.com/kata/reviews/5886e118206a6530bf00079a/groups/5f5bef2869f1cd0001e11aeb
const rectangleRotation_3 = (a, b) =>
    (fn => (fn(a) * fn(b) + (fn(a) + fn(b)) / 2 ^ 0) * 2 + 1)
        (val => val / Math.SQRT2 ^ 0);


//4- Olegeant
// https://www.codewars.com/kata/reviews/5886e118206a6530bf00079a/groups/6265ee106a8fbd00017db016
const rectangleRotation_4 = (a, b) =>
    (F = (side, d) => ~~(side / 2 / 2 ** .5 + .5 + d) * 2 - d * 2)(a, 0) * F(b, 0) + F(a, .5) * F(b, .5);


// 5 - dfhwze, Sayari-Amir, fadedreams
// https://www.codewars.com/kata/reviews/5886e118206a6530bf00079a/groups/60b68803312b5300016f5cb3
function rectangleRotation_5(a, b) {
    let x = Math.floor(a / Math.sqrt(2));
    let y = Math.floor(b / Math.sqrt(2));
    let r = (x + 1) * (y + 1) + x * y;
    return r + r % 2 - 1;
}

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

// La presentada
function rectangleRotation(a, b) {
    let a1 = Math.floor(a / Math.sqrt(2)) + 1;
    let b1 = Math.floor(b / Math.sqrt(2)) + 1;
    let res = a1 * b1 + (b1 - 1) * (a1 - 1);
    if (res % 2 == 0)
        res--;
    return res;
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