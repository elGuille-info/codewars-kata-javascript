/*
function multiplyStrings(a, b) {
  // Primero convertimos las cadenas en arreglos de dígitos
  // y luego los invertimos para facilitar la multiplicación
  let aDigits = a.split('').reverse();
  let bDigits = b.split('').reverse();

  // Creamos un arreglo para almacenar el resultado parcial
  let result = [];

  // Iteramos a través de los dígitos del primer número
  for (let i = 0; i < aDigits.length; i++) {
    // Obtenemos el dígito actual
    let aDigit = parseInt(aDigits[i], 10);

    // Iteramos a través de los dígitos del segundo número
    for (let j = 0; j < bDigits.length; j++) {
      // Obtenemos el dígito actual
      let bDigit = parseInt(bDigits[j], 10);

      // Realizamos la multiplicación de los dígitos actuales
      let product = aDigit * bDigit;

      // Si el resultado parcial en la posición actual es undefined,
      // establecemos el resultado en el producto actual
      if (result[i + j] === undefined) {
        result[i + j] = product;
      } else {
        // Si el resultado parcial en la posición actual ya existe,
        // lo sumamos al producto actual
        result[i + j] += product;
      }
    }
  }

  // Realizamos la corrección de la llevada
  for (let i = 0; i < result.length; i++) {
    // Si el resultado en la posición actual es mayor o igual a 10,
    // entonces llevamos el dígito sobrante a la siguiente posición
    if (result[i] >= 10) {
      if (result[i + 1] === undefined) {
        result[i + 1] = 0;
      }
      result[i + 1] += parseInt(result[i] / 10, 10);
      result[i] %= 10;
    }
  }

*/

function multiplyStrings(a, b) {
    // Primero convertimos las cadenas en arreglos de dígitos
    // y luego los invertimos para facilitar la multiplicación
    let aDigits = a.split('').reverse();
    let bDigits = b.split('').reverse();

    // Creamos un arreglo para almacenar el resultado parcial
    let result = [];

    // Iteramos a través de los dígitos del primer número
    for (let i = 0; i < aDigits.length; i++) {
        // Obtenemos el dígito actual
        let aDigit = parseInt(aDigits[i], 10);

        // Iteramos a través de los dígitos del segundo número
        for (let j = 0; j < bDigits.length; j++) {
            // Obtenemos el dígito actual
            let bDigit = parseInt(bDigits[j], 10);

            // Realizamos la multiplicación de los dígitos actuales
            let product = aDigit * bDigit;

            // Si el resultado parcial en la posición actual es undefined,
            // establecemos el resultado en el producto actual
            if (result[i + j] === undefined) {
                result[i + j] = product;
            } else {
                // Si el resultado parcial en la posición actual ya existe,
                // lo sumamos al producto actual
                result[i + j] += product;
            }
        }
    }

    // Realizamos la corrección de la llevada
    for (let i = 0; i < result.length; i++) {
        // Si el resultado en la posición actual es mayor o igual a 10,
        // entonces llevamos el dígito sobrante a la siguiente posición
        if (result[i] >= 10) {
            if (result[i + 1] === undefined) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10, 10);
            result[i] %= 10;
        }
    }

    let result2 = result.join('');
    // Eliminamos cualquier cero delante de la cadena resultante
    result2 = result2.replace(/^0+/, '');

    return result2;
    //return result;
}
