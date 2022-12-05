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

/*
    No entiendo lo que hay que hacer ni cómo comprobarlo.

De las soluciones (las más recientes)

    //-1 ivanK_rep
    // https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/638ca977f4dbd8000197db29
    function loop_size(node) {
        let map = new Map();
        let index = 0;
        map.set(node, 0);

        do {
            index = index + 1;
            node = node.getNext();

            if (map.has(node)) {
                return index - map.get(node);
            }

            map.set(node, index);
        } while (node.next)

        return 0;
    }

    //-2 douglas06mpp
    // https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/63884cc69a77550001d4df03
    function loop_size(node) {
        const map = new Map()
        let count = 0
        let currentNode = node

        while (currentNode) {
            count++
            let nodeCount = map.get(currentNode)
            if (nodeCount) {
                return count - nodeCount
            }

            map.set(currentNode, count)
            currentNode = currentNode.next
        }

        return 0
    }

    //1- laoris, c0deguy, dubdjon, rattLR, nicole_NT, Makemesuffer, nasnik, Strygevale, Protanton, Sergej-Karyuhin (+ 142)
    // https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/52b21ab778cdcd98af000c65
    function loop_size(node) {
        var turtle = node;
        var rabbit = node;

        // Find a point in the loop.  Any point will do!
        // Since the rabbit moves faster than the turtle
        // and the kata guarantees a loop, the rabbit will
        // eventually catch up with the turtle.
        do {
            turtle = turtle.getNext();
            rabbit = rabbit.getNext().getNext();
        }
        while (turtle != rabbit);

        // The turtle and rabbit are now on the same node,
        // but we know that node is in a loop.  So now we
        // keep the turtle motionless and move the rabbit
        // until it finds the turtle again, counting the
        // nodes the rabbit visits in the mean time.
        var count = 0;
        do {
            ++count;
            rabbit = rabbit.getNext();
        }
        while (turtle != rabbit);

        // voila
        return count;
    }

*/

class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
    setNext(element) {
        this.element = element;
        this.next = element;
    }
    getNext() {
        return this.element;
    }
}


//1- laoris, c0deguy, dubdjon, rattLR, nicole_NT, Makemesuffer, nasnik, Strygevale, Protanton, Sergej-Karyuhin (+ 142)
// https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/52b21ab778cdcd98af000c65
function loop_size1(node) {
    var turtle = node;
    var rabbit = node;

    // Find a point in the loop.  Any point will do!
    // Since the rabbit moves faster than the turtle
    // and the kata guarantees a loop, the rabbit will
    // eventually catch up with the turtle.
    do {
        turtle = turtle.getNext();
        rabbit = rabbit.getNext().getNext();
    }
    while (turtle != rabbit);

    // The turtle and rabbit are now on the same node,
    // but we know that node is in a loop.  So now we
    // keep the turtle motionless and move the rabbit
    // until it finds the turtle again, counting the
    // nodes the rabbit visits in the mean time.
    var count = 0;
    do {
        ++count;
        rabbit = rabbit.getNext();
    }
    while (turtle != rabbit);

    // voila
    return count;
}

//n2- douglas06mpp
// https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/63884cc69a77550001d4df03
function loop_size_n2(node) {
    const map = new Map()
    let count = 0
    let currentNode = node

    while (currentNode) {
        count++
        let nodeCount = map.get(currentNode)
        if (nodeCount) {
            return count - nodeCount
        }

        map.set(currentNode, count)
        currentNode = currentNode.next
    }

    return 0
}

//n1- ivanK_rep
// https://www.codewars.com/kata/reviews/52b020ce0b1d4565ec0003f2/groups/638ca977f4dbd8000197db29
function loop_size_n1(node) {
    let map = new Map();
    let index = 0;
    map.set(node, 0);

    do {
        index = index + 1;
        node = node.getNext();

        if (map.has(node)) {
            return index - map.get(node);
        }

        map.set(node, index);
    } while (node.next)

    return 0;
}


/**
 * Indicar aquí la función a usar dentro de strictEqual
 * @see compararResultados
 */
const laFuncion = loop_size1;

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

//var Node = require('Node')

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