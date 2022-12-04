﻿/*
# Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones --
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point.
Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
    //insert brilliant code here

    // El número de letras en el paseo
    const totalDirecciones = walk.length;
    // Comprobar que no sea un array vacío
    if (totalDirecciones == 0) return false;

    // Que solo contenga, 'n', 's', 'e' o 'w'
    const direcciones = ['n', 's', 'e', 'w'];

    // Número de direcciones en el paseo
    let total = 0;
    for (let i = 0; i < direcciones.length; i++) {
        const c = direcciones[i];
        let desde = 0;
        while (total < totalDirecciones) {
            let j = walk.indexOf(c, desde);
            if ( j > -1) {
                total++;
                desde = j + 1;
            }
            else {
                break;
            }
        }
    }
    // Si todas las letras no son direcciones, devolver false
    if (total != totalDirecciones) return false;

    // Según entiendo, para volver al mismo sitio, la longitud debe ser 10
    if (total != 10) return false;

    // Y que las direcciones sean equivalentes, es decir, si se usan 3 n debe haber 3 s, etc. ???

    return true;
}

const laFuncion = isValidWalk;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El valor a comprobar.
 * @param {*} resOK El resultado que debe dar.
 */
function strictEqual(valor, resOK) {
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
strictEqual(['n','s','n','s','n','s','n','s','n','s'], true);
strictEqual(['w','e','w','e','w','e','w','e','w','e','w','e'], false);
strictEqual(['w'], false);
strictEqual(['n','n','n','s','n','s','n','s','n','s'], false);

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});
*/