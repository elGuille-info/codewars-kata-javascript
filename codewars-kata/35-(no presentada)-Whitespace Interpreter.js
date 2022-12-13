/*
    # Whitespace Interpreter (2 kyu)

Whitespace
Whitespace is an esoteric programming language that uses only three characters:

[space] or " " (ASCII 32)
[tab] or "\t" (ASCII 9)
[line-feed] or "\n" (ASCII 10)
All other characters may be used for comments. The interpreter ignores them.

Whitespace is an imperative, stack-based programming language, including features such as subroutines.

Each command in whitespace begins with an Instruction Modification Parameter (IMP).

IMPs
[space]: Stack Manipulation
[tab][space]: Arithmetic
[tab][tab]: Heap Access
[tab][line-feed]: Input/Output
[line-feed]: Flow Control

There are two types of data a command may be passed: numbers and labels.

Parsing Numbers
Numbers begin with a [sign] symbol. The sign symbol is either [tab] -> negative, or [space] -> positive.

Numbers end with a [terminal] symbol: [line-feed].

Between the sign symbol and the terminal symbol are binary digits [space] -> binary-0, or [tab] -> binary-1.

A number expression [sign][terminal] will be treated as zero.

The expression of just [terminal] should throw an error. (The Haskell implementation is inconsistent about this.)

Parsing Labels
Labels begin with any number of [tab] and [space] characters.

Labels end with a terminal symbol: [line-feed].

Unlike with numbers, the expression of just [terminal] is valid.

Labels must be unique.

A label may be declared either before or after a command that refers to it.

Input/Output
As stated earlier, there commands may read data from input or write to output.

Parsing Input
Whitespace will accept input either characters or integers. Due to the lack of an input stream mechanism, the input will be passed as a string to the interpreter function.

Reading a character involves simply taking a character from the input stream.

Reading an integer involves parsing a decimal or hexadecimal number (prefixed by 0x) from the current position of the input stream, up to and terminated by a line-feed character. Octal numbers (prefixed by 0) and binary numbers (prefixed by 0b) may optionally be supported.

The original implementation being in Haskell has stricter requirements for parsing an integer.

The Javascript and Coffeescript implementations will accept any number that can be parsed by the parseInt function as a single parameter.

The Python implementations will accept any number that can be parsed by the int function as a single parameter.

The Java implementations will use an InputStream instance for input. For InputStream use readLine if the program requests a number and read if the program expects a character.

An error should be thrown if the input ends before parsing is complete. (This is a non-issue for the Haskell implementation, as it expects user input)

Writing Output
For a number, append the output string with the number's string value.

For a character, simply append the output string with the character.

The Java implementations will support an optional OutputStream for output. 
  If an OutputStream is provided, it should be flushed before and after code execution and filled as code is executed. 
  The output string should be returned in any case.

Commands
Notation: n specifies the parameter, [number] or [label].

Errors should be thrown for invalid numbers, labels, and heap addresses, or if there are not enough items on the stack to complete an operation (unless otherwise specified). 
  In addition, an error should be thrown for unclean termination.

IMP [space] - Stack Manipulation
[space] (number): Push n onto the stack.
[tab][space] (number): Duplicate the nth value from the top of the stack and push onto the stack.
[tab][line-feed] (number): Discard the top n values below the top of the stack from the stack. (For n<**0** or **n**>=stack.length, remove everything but the top value.)
[line-feed][space]: Duplicate the top value on the stack.
[line-feed][tab]: Swap the top two value on the stack.
[line-feed][line-feed]: Discard the top value on the stack.
IMP [tab][space] - Arithmetic
[space][space]: Pop a and b, then push b+a.
[space][tab]: Pop a and b, then push b-a.
[space][line-feed]: Pop a and b, then push b*a.
[tab][space]: Pop a and b, then push b/a*. If a is zero, throw an error.
*Note that the result is defined as the floor of the quotient.
[tab][tab]: Pop a and b, then push b%a*. If a is zero, throw an error.
*Note that the result is defined as the remainder after division and sign (+/-) of the divisor (a).
IMP [tab][tab] - Heap Access
[space]: Pop a and b, then store a at heap address b.
[tab]: Pop a and then push the value at heap address a onto the stack.
IMP [tab][line-feed] - Input/Output
[space][space]: Pop a value off the stack and output it as a character.
[space][tab]: Pop a value off the stack and output it as a number.
[tab][space]: Read a character from input, a, Pop a value off the stack, b, then store the ASCII value of a at heap address b.
[tab][tab]: Read a number from input, a, Pop a value off the stack, b, then store a at heap address b.
IMP [line-feed] - Flow Control
[space][space] (label): Mark a location in the program with label n.
[space][tab] (label): Call a subroutine with the location specified by label n.
[space][line-feed] (label): Jump unconditionally to the position specified by label n.
[tab][space] (label): Pop a value off the stack and jump to the label specified by n if the value is zero.
[tab][tab] (label): Pop a value off the stack and jump to the label specified by n if the value is less than zero.
[tab][line-feed]: Exit a subroutine and return control to the location from which the subroutine was called.
[line-feed][line-feed]: Exit the program.
Notes
Division and modulo
Whitespace expects floored division and modulo

In Javascript and Coffeescript, the modulus operator is implemented differently than it was in the original Whitespace interpreter. Whitespace was influenced by having been originally implemented in Haskell. Javascript and Coffeescript also lack integer division operations. You need to pay a little extra attention in regard to the implementation of integer division and the modulus operator (See: floored division in the Wikipedia article "Modulo operation"
Java defines methods for floor division and modulo in Math class. The methods differ from the traditional / and % operators.
There is no difference between Whitespace and Python in regard to the standard implementation of integer division and modulo operations.

ESOTERIC LANGUAGES, INTERPRETERS, ALGORITHMS
*/

/*
https://web.archive.org/web/20150618184706/http://compsoc.dur.ac.uk/whitespace/tutorial.php

https://vii5ard.github.io/whitespace/

https://github.com/hostilefork/whitespacers

https://github.com/hostilefork/whitespacers/tree/master/examples

*/

/*
loop321 = bleach(
    ''.join([
        'ss', 'sttn',          # PUSH 3
        'nss', 'stssssttn'     # MARK "C"
        'sns',                 # DUPLICATE
        'tnst',                # OUTPUTN
        'ss', 'stn',           # PUSH 1
        'tsst',                # SUB
        'sns',                 # DUPL
        'nts', 'stssststn',    # IFZERO "E"
        'nsn', 'stssssttn',    # GOTO "C"
        'nss', 'stssststn',    # MARK "E"
        'snn',                 # DISCARD
        'nnn'
    ])
)
Test.assert_equals(whitespace(loop321),'321')
loop3210 = bleach(
    ''.join([
        'ss', 'sttn',          # PUSH 3
        'nss', 'stssssttn'     # MARK "C"
        'sns',                 # DUPLICATE
        'tnst',                # OUTPUTN
        'ss', 'stn',           # PUSH 1
        'tsst',                # SUB
        'sns',                 # DUPL
        'ntt', 'stssststn',    # IFNEG "E"
        'nsn', 'stssssttn',    # GOTO "C"
        'nss', 'stssststn',    # MARK "E"
        'snn',                 # DISCARD
        'nnn'
    ])
)
Test.assert_equals(whitespace(loop3210),'3210')
*/

// to help with debugging
function unbleach(n) {
    if (n) return n.replace(/ /g, 's').replace(/\t/g, 't').replace(/\n/g, 'n');
}
// solution
function whitespace(code, input) {
    var output = '', stack = [], heap = {};
    // ...
    return output;
};

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = whitespace;

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
        console.log(unbleach(valor) + " = " + resOK);

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
function prueba1() {
    console.log("Prueba 1");
    var output1 = "   \t\n\t\n \t\n\n\n";
    var output2 = "   \t \n\t\n \t\n\n\n";
    var output3 = "   \t\t\n\t\n \t\n\n\n";
    var output0 = "    \n\t\n \t\n\n\n";

    comparaResultado(output1, "1");
    comparaResultado(output2, "2");
    comparaResultado(output3, "3");
    comparaResultado(output0, "0");
}


function prueba2() {
    console.log("Prueba 2");
    var outputNegative1 = "  \t\t\n\t\n \t\n\n\n";
    var outputNegative2 = "  \t\t \n\t\n \t\n\n\n";
    var outputNegative3 = "  \t\t\t\n\t\n \t\n\n\n";

    comparaResultado(outputNegative1, "-1");
    comparaResultado(outputNegative2, "-2");
    comparaResultado(outputNegative3, "-3");

}

function prueba3() {
    console.log("Prueba 3");
    comparaResultado("", "Error");
}

function prueba4() {
    console.log("Prueba 4");
    var outputA = "   \t     \t\n\t\n  \n\n\n";
    var outputB = "   \t    \t \n\t\n  \n\n\n";
    var outputC = "   \t    \t\t\n\t\n  \n\n\n";

    comparaResultado(outputA, "A");
    comparaResultado(outputB, "B");
    comparaResultado(outputC, "C");

}

function prueba5() {
    console.log("Prueba 5");
    var outputA = "blahhhh   \targgggghhh     \t\n\t\n  \n\n\n";
    var outputB = " I heart \t  cats  \t \n\t\n  \n\n\n";
    var outputC = "   \t  welcome  \t\t\n\t\n to the\nnew\nworld\n";

    comparaResultado(outputA, "A");
    comparaResultado((outputB), "B");
    comparaResultado((outputC), "C");

}

function prueba6() {
    console.log("Prueba 6");

    var pushTwice = "   \t\t\n   \t\t\n\t\n \t\t\n \t\n\n\n";
    var duplicate = "   \t\t\n \n \t\n \t\t\n \t\n\n\n";
    var duplicateN1 = "   \t\n   \t \n   \t\t\n \t  \t \n\t\n \t\n\n\n";
    var duplicateN2 = "   \t\n   \t \n   \t\t\n \t  \t\n\t\n \t\n\n\n";
    var duplicateN3 = "   \t\n   \t \n   \t\t\n \t   \n\t\n \t\n\n\n";
    var swap = "   \t\t\n   \t \n \n\t\t\n \t\t\n \t\n\n\n";
    var discard = "   \t\t\n   \t \n \n\t \n\n\t\n \t\n\n\n";
    var slide = "   \t\t\n   \t \n   \t\n   \t  \n   \t\t \n   \t \t\n   \t\t\t\n \n\t \t\n \t\t\n\t\n \t\t\n \t\t\n \t\t\n \t\n\n\n";
    
    comparaResultado((pushTwice), "33");
    comparaResultado((duplicate), "33");
    comparaResultado((duplicateN1), "1");
    comparaResultado((duplicateN2), "2");
    comparaResultado((duplicateN3), "3");
    comparaResultado((swap), "32");
    comparaResultado((discard), "2");
    comparaResultado((slide), "5123");
  
}

prueba1();
prueba2();
prueba3();
prueba4();
prueba5();
prueba6();


/*
var desc = "Testing push, output of numbers 0 through 3";
describe(desc, function () {
  var output1 = "   \t\n\t\n \t\n\n\n";
  var output2 = "   \t \n\t\n \t\n\n\n";
  var output3 = "   \t\t\n\t\n \t\n\n\n";
  var output0 = "    \n\t\n \t\n\n\n";
  
  Test.assertEquals(whitespace(output1), "1");
  Test.assertEquals(whitespace(output2), "2");
  Test.assertEquals(whitespace(output3), "3");
  Test.assertEquals(whitespace(output0), "0");
});

desc = "Testing ouput of numbers -1 through -3";
describe(desc, function () {
  var outputNegative1 = "  \t\t\n\t\n \t\n\n\n";
  var outputNegative2 = "  \t\t \n\t\n \t\n\n\n";
  var outputNegative3 = "  \t\t\t\n\t\n \t\n\n\n";
  
  Test.assertEquals(whitespace(outputNegative1), "-1");
  Test.assertEquals(whitespace(outputNegative2), "-2");
  Test.assertEquals(whitespace(outputNegative3), "-3");
});

desc = "Testing simple flow control edge case";
describe(desc, function () {
  desc = "Expecting exception for unclean termination";
  Test.expectError(desc, function () {
    whitespace("");
  });
});

desc = "Testing output of letters A through C";
describe(desc, function () {
  var outputA = "   \t     \t\n\t\n  \n\n\n";
  var outputB = "   \t    \t \n\t\n  \n\n\n";
  var outputC = "   \t    \t\t\n\t\n  \n\n\n";
  
  Test.assertEquals(whitespace(outputA), "A");
  Test.assertEquals(whitespace(outputB), "B");
  Test.assertEquals(whitespace(outputC), "C");
});

desc = "Testing output of letters A through C with comments";
describe(desc, function () {
  var outputA = "blahhhh   \targgggghhh     \t\n\t\n  \n\n\n";
  var outputB = " I heart \t  cats  \t \n\t\n  \n\n\n";
  var outputC = "   \t  welcome  \t\t\n\t\n to the\nnew\nworld\n";

  Test.assertEquals(whitespace(outputA), "A");
  Test.assertEquals(whitespace(outputB), "B");
  Test.assertEquals(whitespace(outputC), "C");
});

desc = "Testing stack functionality";
describe(desc, function () {
  var pushTwice = "   \t\t\n   \t\t\n\t\n \t\t\n \t\n\n\n";
  var duplicate = "   \t\t\n \n \t\n \t\t\n \t\n\n\n";
  var duplicateN1 = "   \t\n   \t \n   \t\t\n \t  \t \n\t\n \t\n\n\n";
  var duplicateN2 = "   \t\n   \t \n   \t\t\n \t  \t\n\t\n \t\n\n\n";
  var duplicateN3 = "   \t\n   \t \n   \t\t\n \t   \n\t\n \t\n\n\n";
  var swap = "   \t\t\n   \t \n \n\t\t\n \t\t\n \t\n\n\n";
  var discard = "   \t\t\n   \t \n \n\t \n\n\t\n \t\n\n\n";
  var slide = "   \t\t\n   \t \n   \t\n   \t  \n   \t\t \n   \t \t\n   \t\t\t\n \n\t \t\n \t\t\n\t\n \t\t\n \t\t\n \t\t\n \t\n\n\n";
  
  Test.assertEquals(whitespace(pushTwice), "33");
  Test.assertEquals(whitespace(duplicate), "33");
  Test.assertEquals(whitespace(duplicateN1), "1");
  Test.assertEquals(whitespace(duplicateN2), "2");
  Test.assertEquals(whitespace(duplicateN3), "3");
  Test.assertEquals(whitespace(swap), "32");
  Test.assertEquals(whitespace(discard), "2");
  Test.assertEquals(whitespace(slide), "5123");
});
*/
