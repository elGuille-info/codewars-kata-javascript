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
device.decode1 = function (w) {
    let key = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH'.split("")
    //        'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH'
    return w.split("").map((c, i) => key.indexOf(c) > -1 ? key[(key.indexOf(c) + 65 - i) % 66] : c).join("")
}

// console.log(device.decode("-FNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz"))

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

/*
    De: https://gitter.im/Codewars/codewars.com/kata-solving-help/archives/2016/09/22
*/
device.decode3 = function (w) {
    //console.log(w)
    const alphabet = "bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa"
    w = w.split("")
    for (var i = 0; i < w.length; i++) {
        var b = alphabet.lastIndexOf(w[i])
        // Le faltaba esta comprobación
        if (b != -1) {
            w[i] = alphabet[b - i - 1];
        }
    }
    return w.join("")

}

//for educational purposes, the encode function
// https://www.codewars.com/kata/reviews/52cf02cd825aef67070008fd/groups/53addadfebdbf83723000186
device.encode = function(string){
    var substitutions = "abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH"; // length = 66
    return [].map.call(string, function(chr, idx){
       var pos = substitutions.indexOf(chr);
       return pos == -1 ? chr : substitutions[ (pos + 1 + idx) % 66 ];
    }).join('');
 };

/*
var chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.0123456789? '

function build_alphabets_table () {
    return chrs.split('').map(function(c) {
        return device.encode(new Array(67).join(c));
    });
}
console.log('-----')
console.log(build_alphabets_table())
console.log('-----')

[ 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa',
  'dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHab',
  'flxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIc',
  'hpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabd',
  'jtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJe',
  'lxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcf',
  'nB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKg',
  'pF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdh',
  'rJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLi',
  'tNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJej',
  'vRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70Mk',
  'xVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcfl',
  'zZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNm',
  'B3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgn',
  'D70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1Oo',
  'F,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp',
  'HabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPq',
  'JejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir',
  'LirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82Qs',
  'NmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejt',
  'PqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRu',
  'RuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70Mkv',
  'TyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3Sw',
  'VC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflx',
  'XG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTy',
  'ZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmz',
  '1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA',
  '3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB',
  '5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC',
  '70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD',
  '94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE',
  ',82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF',
  ' ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG',
  'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH', <<--
  'cflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YI',
  'ejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJ',
  'gnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZK',
  'irJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsL',
  'kvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70M',
  'mzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtN',
  'oD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1O',
  'qHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuP',
  'sLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82Q',
  'uPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvR',
  'wTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3S',
  'yXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwT',
  'A1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94U',
  'C5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxV',
  'E94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5W',
  'G ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyX',
  'IcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6Y',
  'KgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZ',
  '82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,',
  '6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.',
  'MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70',
  'OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1',
  'QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82',
  'SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3',
  'UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94',
  'WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5',
  'YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6',
  '0MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD7',
  '2QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,8',
  '4UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE9',
  '.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?',
  '?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ' ]
*/

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = device.decode3;

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
console.log(device.decode3('EFhZINtl3rgKW9'));
console.log('!@#$%^&*()_+-');
console.log(device.decode('!@#$%^&*()_+-'));
console.log(device.decode3('!@#$%^&*()_+-'));
console.log('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz')
console.log(device.decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'))
console.log(device.decode3('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'))
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