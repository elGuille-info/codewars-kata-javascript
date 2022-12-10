/*
    # Text align justify (4 kyu)

Your task in this Kata is to emulate text justification in monospace font.
You will be given a single-lined text and the expected justification width.
The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').

Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.

Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)
*/

function justify0(text, width) {
    // Your code goes here
    return text
}

function justify(text, width) {
    // Split the text into an array of words
    const words = text.split(' ');

    // Initialize the current line and the result string
    let line = "";
    let result = "";

    // Loop through each word in the array
    for (const word of words) {
        // If adding the current word to the line would make it too long,
        // add a line break and reset the line to the current word
        if (line.length + word.length + 1 > width) {
            // Calculate the number of spaces to add to the line
            //const spaces = width - line.length;

            // Add the spaces between the words on the line
            let conEspacios = line;
            // Si tiene menos de width, añadir espacios entre cada palabra desde el principio
            if (conEspacios.length < width) {
                //String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }
                let desde = 0;
                let faltan = width - line.length; // los espacios que faltan
                let line2 = "";
                // Extraer las palabras y añadirle un espacio a cada palabra
                const words2 = line.split(' ');
                // Si solo hay una palabra, no hacer nada más.
                if (words2.length > 1) {
                    for (let i = 0; i < words2.length; i++) {
                        if (i < words2.length - 1) {
                            words2[i] = words2[i] + ' ';
                        }
                        line2 += words2[i];
                    }
                    line2 = line2.trimEnd();
                    desde = 1;

                    while (line2.trimEnd().length < width) {
                        // No añadir espacios a la última palabra
                        for (let i = 0; i < words2.length - 1; i++) {
                            words2[i] = words2[i] + " ";
                            faltan--;
                            if (faltan < 1) {
                                break;
                            }
                        }
                        line2 = "";
                        for (let i = 0; i < words2.length; i++) {
                            line2 += words2[i];
                        }
                    }
                    conEspacios = line2.trimEnd();
                }
                else {
                    line2 = conEspacios;
                }
            }
            result += conEspacios + '\n';
            line = word;
        }
        // Otherwise, add the word to the current line with a space
        else {
            line += " " + word;
            line = line.trimStart();
        }
    }

    // Add the last line to the result
    result += line;

    // Return the justified text
    return result;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = justify;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} mostrarLog Si se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function compararTexos(valor1, valor2, resOK, mostrarLog) {
    if (mostrarLog)
        console.log(valor1 + " =? " + valor2 + " = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es\n" + res + "\n\tdebería ser\n" + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.
------------------
Lorem  ipsum  dolor
sit           amet,
consectetur
adipiscing    elit.
Vestibulum
sagittis      dolor
mauris,          at
elementum    ligula
tempor eget.


	No es correcto. El resultado calculado es
------------------
`Lorem  ipsum dolor
sit          amet,
consectetur
adipiscing   elit.
Vestibulum
sagittis     dolor
mauris,         at
elementum   ligula
tempor eget.`

	debería ser
------------------
Lorem  ipsum  dolor
sit           amet,
consectetur
adipiscing    elit.
Vestibulum
sagittis      dolor
mauris,          at
elementum    ligula
tempor eget.
*/

// compararTexos("nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.", 30,`nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.`
// );

console.log("con 18");
compararTexos("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.", 18,
`Lorem  ipsum dolor
sit          amet,
consectetur
adipiscing   elit.
Vestibulum
sagittis     dolor
mauris,         at
elementum   ligula
tempor eget.`
);

console.log("con 30");
compararTexos(LIPSUM, 30, `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`);

// compararTexos("This is a test with more words in it.", 10, `This  is a
// test  with
// more words
// in it.`);

/*
const assert = require('chai').assert;

describe("Sample tests", () => {
  it("should work on simple examples", function() {
    assert.strictEqual(justify('123 45 6', 7), '123  45\n6');
    assert.strictEqual(justify('123', 7), '123');
    assert.strictEqual(justify('', 10), '');
  });

  const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

  it("should work for the example of the description", () => {
    assert.strictEqual(justify(LIPSUM, 30), `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`);
  });
});
*/