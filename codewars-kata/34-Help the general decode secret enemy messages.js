/*
    # Help the general decode secret enemy messages (3 kyu)

General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. 
    Those messages are crucial to getting the jump on the enemy and winning the war. 
    Luckily intelligence also captured an encoding device as well. 
    However even the smartest programmers weren't able to crack it though. 
    So the general is asking you , his most odd but brilliant programmer.

You can call the encoder like this.

console.log (device.encode ('What the hell')) ;

Our cryptoanalysts kept poking at it and found some interesting patterns.

console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;  
console.log (device.encode ('!@#$%^&*()_+-')) ;
console.log ('abcdefghijklmnopqrstuvwxyz') ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode (a) ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('_'+a)[1] ;
}).join ('')) ;
console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('__'+a)[2] ;
}).join ('')) ;

We think if you keep on this trail you should be able to crack the code! 
You are expected to fill in the device.decode function. 
Good luck ! General Patron is counting on you!

PUZZLES
*/

/*
    Soluciones

    https://www.codewars.com/kata/52cf02cd825aef67070008fa/solutions/javascript
*/

// console.log(device.encode('What is this ?'));
// device.decode = function (w) {
//     return w;
// }


let device = {}

// La presentada
device.decode = function (w) {
    let al = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH';
    w = w.split("")
    for (var i = 0; i < w.length; i++) {
        // Comprobar si el caracter está en la lista
        var c = al.indexOf(w[i])
        // Si no está, se usa ese mismo caracter
        if (c != -1) {
            // La posición a tomar es la encontrada menos la posición en la cadena menos uno
            let p = c - (i + 1);
            // si es menor de cero, añadir los caracteres de la lista (66)
            if (p < 0) {
                p += al.length;
            }
            w[i] = al[p];
        }
    }
    return w.join("")
}


//for educational purposes, the encode function
// De: https://www.codewars.com/kata/reviews/52cf02cd825aef67070008fd/groups/53addadfebdbf83723000186
device.encode = function (string) {
    var substitutions = "abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH"; // length = 66
    return [].map.call(string, function (chr, idx) {
        var pos = substitutions.indexOf(chr);
        return pos == -1 ? chr : substitutions[(pos + 1 + idx) % 66];
    }).join('');
};

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = device.decode;

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
        console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas

//console.log(device.decode.toString());
//console.log (device.encode ('What is this ?')) ; //EFhZINtl3rgKW9
//console.log(device.encode('EFhZINtl3rgKW9'));
console.log('EFhZINtl3rgKW9');
console.log(device.decode('EFhZINtl3rgKW9'));
//console.log(device.decode3('EFhZINtl3rgKW9'));
console.log('!@#$%^&*()_+-');
console.log(device.decode('!@#$%^&*()_+-'));
//console.log(device.decode3('!@#$%^&*()_+-'));
console.log('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz')
console.log(device.decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'))
//console.log(device.decode3('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'))
console.log(device.encode('What is this ?'));
// console.log(device.decode('Jung vf guvf ?'));
// console.log(device.decode('What is this ?'));

// comparaResultado('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz', 'The quick brown fox jumped over the lazy developer.');
// // 'zJF-CZXBFglEWVNXUR?CQWg0YUCVxhW6UCdQBu7fOaMW' => 'questions of what was going on in Washington at'
// console.log(device.decode('zJF-CZXBFglEWVNXUR?CQWg0YUCVxhW6UCdQBu7fOaMW'));
// console.log(device.decode("yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz"))

/*
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(
            device.decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'),
            'The quick brown fox jumped over the lazy developer.');

    });
});
*/