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

/*
  Soluciones
*/

//1- 
// https://www.codewars.com/kata/reviews/5a60c2d3378bd79431001e86/groups/5a60d4fcc7505b5153003c27
function calc_1(a, b, operator) {
  var ch = {
    Add: String["fromCharCode"](43),
    Sub: String["fromCharCode"](45),
    Mul: String["fromCharCode"](42),
    Div: String["fromCharCode"](47),
    Mod: String["fromCharCode"](37),
    Dot: String["fromCharCode"](46)
  }
  switch (operator) {
    case ch["Add"]: return Array(a)["concat"](Array(b))["push"]();
    case ch["Sub"]: return (x = Array(b)["splice"](a)["length"]) ? Number(ch["Sub"]["concat"](x)) : Array(a)["splice"](b)["push"]();
    case ch["Mul"]: return " "["repeat"](a)["repeat"](b)["length"];
    case ch["Div"]: return b == 0 ? NaN : Number((x = String(" "["repeat"](String(a)["concat"]("00"))["split"](" "["repeat"](b))["slice"](1)["push"]())
    ["padStart"](3, 0)["split"]([]), x["splice"](Number(ch["Sub"]["concat"](2)), 0, ch["Dot"]), x["join"]([])));
    case ch["Mod"]: return b == 0 ? NaN : " "["repeat"](a)["split"](" "["repeat"](b))["reverse"]()[0]["length"];
  }
}

//4-
// https://www.codewars.com/kata/reviews/5a60c2d3378bd79431001e86/groups/60c65d5004a69100017452c3
function calc_4(a, b, operator) {

  // console['log'](`💪💪💪 Hi, Codewarriors ${String['fromCharCode'](33)['repeat'](10)} `);
  // console['log']('It seems the possibilities of String are much underestimated');

  const ops = String['fromCharCode'](43, 45, 42, 47, 37, 46);

  const isLesser = (a, b) => a === b ? false : '1'['repeat'](a)['slice'](b) === '';
  const isLsOrEq = (a, b) => '1'['repeat'](a)['slice'](b) === '';
  const opposite = (a) => Number(ops[1]['concat'](a));

  const add = (a, b) => '1'['repeat'](a)['concat']('1'['repeat'](b))['length'];
  const sub = (a, b) => isLesser(a, b) ? opposite('1'['repeat'](b)['slice'](a)['length'])
    : '1'['repeat'](a)['slice'](b)['length'];
  const mlt = (a, b) => '1'['repeat'](a)['repeat'](b)['length'];
  const div = (a, b, qu = 0) => (b === 0) ? NaN : isLsOrEq(b, a) ? div(sub(a, b), b, add(qu, 1)) : qu;
  const mod = (a, b) => (b === 0) ? NaN : isLsOrEq(b, a) ? mod(sub(a, b), b) : a;
  const dvd = (a, b) => {
    if (b === 0) return NaN;
    const whole = div(a, b);
    const fract = mod(a, b) === 0 ? '' : ops[5]['concat']('0'['concat'](div(mlt(mod(a, b), 100), b))['slice'](opposite(2)));
    return Number(''['concat'](whole, fract));
  }

  switch (operator) {
    case ops[0]: return add(a, b);
    case ops[1]: return sub(a, b);
    case ops[2]: return mlt(a, b);
    case ops[3]: return dvd(a, b);
    case ops[4]: return mod(a, b);
  }

  return NaN;
}

function calc_no(a, b, operator) {
  switch (operator) {
    case '+': return [a, b].reduce((n1, n2) => n1 + n2);
    case '-': return [a, b].reduce((n1, n2) => n1 - n2);
    case '*': return [a, b].reduce((n1, n2) => n1 * n2);
    case '/': return b == 0 ? NaN : [a, b].reduce((n1, n2) => n1 / n2);
    case '%': return b == 0 ? NaN : [a, b].reduce((n1, n2) => n1 % n2);
  }
  return NaN;

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
let laFuncion = calc_4;

function pruebas(a, b, operator, resOK) {
  console.log(laFuncion.name + "(" + a + ", " + b + ", \"" + operator + "\") = " + resOK)

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
