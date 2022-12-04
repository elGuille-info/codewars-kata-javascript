/*
    # Can you get the loop ?

You are given a node that is the beginning of a linked list.
This list contains a dangling piece and a loop.
Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

Notes:

do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece
Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !!

ALGORITHMS, LINKED LISTS, PERFORMANCE
*/

function loop_size(node){

}

/**
 * Indicar aquí la función a usar dentro de strictEqual
 * @see compararResultados
 */
 const laFuncion = loop_size;

 /**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor El número a evaluar por la función.
   * @param {*} resOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
 function compararResultados(valor, resOK) {
     console.log(valor + " = " + resOK);

     let res = laFuncion(valor);
     if (res.toString() != resOK.toString()) {
         console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
     }
     else {
         console.log("\tCorrecto!");
     }
 }

// Pruebas
let A = new Node(), B = new Node();
A.setNext(A);
compararResultados(A, 1);

A = new Node(), B = new Node();
A.setNext(B), B.setNext(A);
compararResultados(A, 2);

A = new Node(), B = new Node();
A.setNext(B), B.setNext(B);
compararResultados(A, 1);

A = new Node(), B = new Node(), C = new Node();
A.setNext(B), B.setNext(C), C.setNext(C);
compararResultados(A, 1);

A = new Node(), B = new Node(), C = new Node();
A.setNext(B), B.setNext(C), C.setNext(B);
compararResultados(A, 2);

A = new Node(), B = new Node(), C = new Node();
A.setNext(B), B.setNext(C), C.setNext(A);
compararResultados(A, 3);

/*

const assert = require('chai').assert;

describe('sample tests', function () {
	it('should work for some small lists', function () {
		{
			const A = new Node();
			A.setNext(A);
			assert.deepEqual(loop_size(A), 1);
		}
		{
			const A = new Node(), B = new Node();
			A.setNext(B), B.setNext(A);
			assert.deepEqual(loop_size(A), 2);
		}
		{
			const A = new Node(), B = new Node();
			A.setNext(B), B.setNext(B);
			assert.deepEqual(loop_size(A), 1);
		}
		{
			const A = new Node(), B = new Node(), C = new Node();
			A.setNext(B), B.setNext(C), C.setNext(C);
			assert.deepEqual(loop_size(A), 1);
		}
		{
			const A = new Node(), B = new Node(), C = new Node();
			A.setNext(B), B.setNext(C), C.setNext(B);
			assert.deepEqual(loop_size(A), 2);
		}
		{
			const A = new Node(), B = new Node(), C = new Node();
			A.setNext(B), B.setNext(C), C.setNext(A);
			assert.deepEqual(loop_size(A), 3);
		}
	});
});
*/