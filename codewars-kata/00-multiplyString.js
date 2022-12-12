/*
    # Del kata 27- Multiplying numbers as strings (4 kyu)

This is the first part. You can solve the second part here (https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript) 
when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

STRINGS, BIG INTEGERS, ALGORITHMS
*/


// La presentada, pero con otro nombre
function multiplyStrings(a, b) {
    // Primero, calculamos el tamaño de cada número
    let sizeA = a.length;
    let sizeB = b.length;

    // Inicializamos un arreglo para almacenar el resultado
    let result = new Array(sizeA + sizeB);
    for (let i = 0; i < sizeA + sizeB; i++) {
        result[i] = 0;
    }

    // Realizamos la multiplicación de enteros largos
    for (let i = 0; i < sizeA; i++) {
        for (let j = 0; j < sizeB; j++) {
            result[i + j + 1] += parseInt(a[i], 10) * parseInt(b[j], 10);
        }
    }

    // Llevamos a cabo la reducción de acarreo
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }

    // Convertimos el resultado a una cadena y eliminamos cualquier cero delante
    result = result.join('').replace(/^0+/, '');
    if (result == "") result = "0";

    return result;
}
