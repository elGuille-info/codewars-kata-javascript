/*
*/

function secuencia(numeros) {
    // Cadena que se irá construyendo con los números del array
    let resultado = "";

    // Contador para saber cuántos números consecutivos hay
    let contador = 0;

    // Variable para guardar el primer número de la secuencia
    let primerNumero = null;

    let numeroi = null;
    let numeroi_menos1 = null;

    for (let i = 0; i < numeros.length; i++) {
      numeroi = numeros[i];
      numeroi_menos1 = numeros[i - 1];

      // Si el contador es cero, significa que no hay una secuencia en curso
      if (contador === 0) {
        // El número actual es el primer número de la secuencia
        primerNumero = numeros[i];

        // Aumenta el contador
        contador++;

        // Si el contador es uno, significa que hay un número en curso, pero aún no se sabe si es parte de una secuencia
      } else if (contador === 1) {
        // Si el número actual es igual al anterior más uno, entonces es parte de una secuencia
        if (numeros[i] === numeros[i - 1] + 1) {
          // Aumenta el contador
          contador++;

          // Si el número actual no es igual al anterior más uno, entonces no es parte de una secuencia
        } else {
          // Agrega el número actual a la cadena resultante
          //resultado += numeros[i] + ",";
          resultado += numeros[i - 1] + ",";

          // Reinicia el contador
          contador = 0;
        }

        // Si el contador es dos o más, significa que hay una secuencia en curso
      } else if (contador >= 2) {
        // Si el número actual es igual al anterior más uno, entonces sigue siendo parte de la secuencia
        if (numeros[i] === numeros[i - 1] + 1) {
          // Aumenta el contador
          contador++;

          // Si el número actual no es igual al anterior más uno, entonces la secuencia ha terminado
        } else {
          // Agrega la secuencia a la cadena resultante en la forma "N1-Nn"
          resultado += primerNumero + "-" + numeros[i - 1] + ",";

          // Agrega el número actual a la cadena resultante
          resultado += numeros[i] + ",";

          // Reinicia el contador
          contador = 0;
          //i--;
        }
      }
    }

    // Si hay una secuencia en curso después de recorrer todos los números del array, agrégala a la cadena resultante
    if (contador >= 2) {
      resultado += primerNumero + "-" + numeros[numeros.length - 1];
    }

    return resultado;
}

// con este falla:
let numbers = [1, 2, 3, 5, 6, 8, 9, 10, 15]; // 1-3,5,8,9-10,15, --> 1-3,5,6,9-10,15,
let res = secuencia(numbers);
console.log(res);
// Este es correcto
numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15]; // 1-3,5,7-10,15,
res = secuencia(numbers);
console.log(res);