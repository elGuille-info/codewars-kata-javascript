/*
    # Mad Mathematician's Calculator (Basic Version)
    https://www.codewars.com/kata/5a60b017fd56cb469e000279/train/javascript

Mad Mathematician's Calculator (Basic Version)

Derived from Mad Mathematician's Calculator (Hardcode Version) (Previously named Mad Mathematician's Calculator)
    https://www.codewars.com/kata/mad-mathematicians-calculator-hardcore-version

Task
You have to write a calc(a,b,operator) function to receive 2 numbers and 1 operator respectively, assuming a, b, and operator. 
    calc function will calculate a result from a and b as indicated by operator and return as a number.

Coding Limitation:

The data listed below are not allowed in your code:

Operators
Mathematical operators: +, -, *, /, %
Bitwise operators: <<, >>, ^, ~, !, |, &
Other operators: <, >, .
Note: arrow function is allowed

The modules/functions below are also disabled:

Bypassing functions: require(), eval(), function constructor

Time functions: setTimeout(), setInterval()

Modules: fs, vm

Input:
a, b as integer from 0 to 5000
operator as string of basic mathematical operator as follow:
"+" addition
"-" substraction
"*" multiplication
"/" division
"%" modulus

Output:
return a number with maximum 2 decimal places (rounded down), or NaN if a/0 or a%0

Example:
calc(1, 2, "+") === 3 //should return true
calc(0, 0, "-") === 0 //should return true
calc(6, 7, "*") === 42 //should return true
calc(5, 4, "%") === 1 //should return true
isNaN(calc(9, 0, "/")) === true //should return true

|||| |---|---:| ||Next: Mad Mathematician's Calculator (Hardcode Version)|
    https://www.codewars.com/kata/mad-mathematicians-calculator-hardcore-version

PUZZLES, RESTRICTED
*/

function calc(a, b, operator) {

}

function calc_base(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case '%': return a % b;
  }
  return NaN;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = calc;

function pruebas(a, b, operator, resOK) {
    console.log(laFuncion.name + "(" + a + ", " + b + "," + operator + ") = " + resOK)

    let res = laFuncion(a, b, operator)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

// Pruebas
pruebas(0, 12, "+", 12)
pruebas(21, 12, "+", 33)
pruebas(54, 20, "-", 34)
pruebas(20, 54, "-", -34)
pruebas(4, 5, "*", 20)
pruebas(5, 0, "*", 0)

pruebas(10, 5, "/", 2);
pruebas(1, 2, "/", 0.5);
pruebas(5, 3, "/", 1.66);
pruebas(5, 0, "/", NaN);

pruebas(10, 5, "%", 0);
pruebas(1, 2, "%", 1);
pruebas(5, 3, "%", 2);
pruebas(5, 0, "%", NaN);

/*
describe("Basic test cases", function () {
  it("Addition", function () {
    Test.assertDeepEquals(calc(0, 12, "+"), 12);
    Test.assertDeepEquals(calc(21, 12, "+"), 33);
  });
  it("Subtraction", function () {
    Test.assertDeepEquals(calc(54, 20, "-"), 34);
    Test.assertDeepEquals(calc(20, 54, "-"), -34);
  });
  it("Multiplication", function () {
    Test.assertDeepEquals(calc(4, 5, "*"), 20);
    Test.assertDeepEquals(calc(5, 0, "*"), 0);
  });
  it("Division", function () {
    Test.assertDeepEquals(calc(10, 5, "/"), 2);
    Test.assertDeepEquals(calc(1, 2, "/"), 0.5);
    Test.assertDeepEquals(calc(5, 3, "/"), 1.66);
    Test.assertDeepEquals(calc(5, 0, "/"), NaN);
  });
  it("Modulus", function () {
    Test.assertDeepEquals(calc(10, 5, "%"), 0);
    Test.assertDeepEquals(calc(1, 2, "%"), 1);
    Test.assertDeepEquals(calc(5, 3, "%"), 2);
    Test.assertDeepEquals(calc(5, 0, "%"), NaN);
  });
});
*/
