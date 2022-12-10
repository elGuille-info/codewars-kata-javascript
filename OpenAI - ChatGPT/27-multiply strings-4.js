/*
no dispongo de 'big-integer', ¿podrías hacerlo sin necesidad de esa librería?
Sí, eso es posible. En lugar de utilizar la librería big-integer, podemos implementar una función que realice la multiplicación de dos números enteros de tamaño arbitrario utilizando el algoritmo de multiplicación de enteros largos.

Aquí hay un ejemplo de cómo podríamos implementar esta función:

Copy code
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

  return result;
}
En este caso, la función implementa el algoritmo de multiplicación de enteros largos para multiplicar los dos números. Luego, realiza la reducción de acarreo y convierte el resultado en una cadena. Finalmente, la función devuelve el resultado como una cadena.

*/

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

    // Si no hay nada en la cadena, devolver 0.
    if (result == "") result = "0";

    return result;
}

