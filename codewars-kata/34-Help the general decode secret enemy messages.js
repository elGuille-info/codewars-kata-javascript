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

// console.log(device.encode('What is this ?'));
// device.decode = function (w) {
//     return w;
// }

/*
    De: https://github.com/xa-bi/katas/blob/master/js/3-kyu/help_the_general_decode_secret_enemy_messages.js
*/

// Help the general decode secret enemy messages.
// https://www.codewars.com/kata/52cf02cd825aef67070008fa/

let device = {}
device.decode = function (w) {
    let key = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH'.split("")
    return w.split("").map((c, i) => key.indexOf(c) > -1 ? key[(key.indexOf(c) + 65 - i) % 66] : c).join("")
}

// console.log(device.decode("-FNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz"))


/*
    De: https://gitter.im/Codewars/codewars.com/kata-solving-help/archives/2016/09/22
*/
device.decode3 = function (w) {
    //console.log(w)
    const alphabet = "bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa"
    w = w.split("")
    for (var i = 0; i < w.length; i++) {
        var b = alphabet.lastIndexOf(w[i])
        w[i] = alphabet[b - i - 1];
    }
    return w.join("")

}

device.encode = function (what) {
    //return encode (what,init) ; 
    return rot13_1(what);
}
function rot13_1(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

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
console.log (device.encode ('What is this ?')) ; //EFhZINtl3rgKW9
console.log(device.encode('EFhZINtl3rgKW9'));
console.log(device.decode('EFhZINtl3rgKW9'));
console.log(device.decode('FEhZINtl3rgKW9'));
//console.log(device.encode('What is this ?'));
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