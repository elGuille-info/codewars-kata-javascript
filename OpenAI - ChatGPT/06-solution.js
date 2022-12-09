/*
¿Puedes crear una función de JavaScript de forma que dada una secuencia de números devuelva los que están en rango (con al menos 3 cifras consecutivas) en el formato N1-Nn y los que no estén en rango ponerlos de forma separada.
Por ejemplo, si tenemos este array [1, 2, 3, 5, 6, 8, 9, 10, 15], debe devolver este resultado "1-3,5,6,8-10,15".
Gracias

Sí, podemos crear una función de JavaScript para hacer esto. Aquí está un ejemplo de cómo podríamos hacerlo:

*/
function rangeString(numbers) {
    // Primero, ordenamos el array de números en orden ascendente
    numbers.sort((a, b) => a - b);

    // Creamos una variable para almacenar el resultado
    let result = "";

    // Creamos una variable para almacenar el último número que hemos visto
    let lastNumber = numbers[0];

    // Creamos una variable para almacenar el primer número de la secuencia actual
    let start = numbers[0];

    // Iteramos a través de cada número en el array
    for (let i = 1; i < numbers.length; i++) {
      let number = numbers[i];

      // Si el número actual es uno más que el último número que hemos visto, entonces este número forma parte de la secuencia actual
      if (number === lastNumber + 1) {
        // Actualizamos el último número que hemos visto
        lastNumber = number;
      } else {
        // Si el número actual no es uno más que el último número que hemos visto, entonces la secuencia actual ha terminado
        // y necesitamos agregarla al resultado

        // Si la secuencia actual tiene más de dos elementos, entonces la mostramos en el formato "start-lastNumber"
        if (lastNumber - start > 1) {
          result += `${start}-${lastNumber},`;
        } else {
          // Si la secuencia actual tiene solo dos elementos, entonces la mostramos en el formato "start,lastNumber"
          if (start != lastNumber) {
            result += `${start},${lastNumber},`;
          }
          else {
            result += `${start},`;
          }
          //result += `${start},${lastNumber},`;
        }

        // Actualizamos el primer número de la secuencia actual y el último número que hemos visto
        start = number;
        lastNumber = number;
      }
    }

    // Después de iterar a través de todos los números, aún tenemos la última secuencia que no hemos agregado al resultado
    // así que lo agregamos ahora

    // Si la secuencia actual tiene más de dos elementos, entonces la mostramos en el formato "start-lastNumber"
    if (lastNumber - start > 1) {
      result += `${start}-${lastNumber}`;
    } else {
      // Si la secuencia actual tiene solo dos elementos, entonces la mostramos en el formato "start,lastNumber"
      if (start != lastNumber) {
        result += `${start},${lastNumber}`;
      }
      else {
        result += `${start}`;
      }
      //result += `${start},${lastNumber}`;
    }

    // Devolvemos el resultado
    return result;
}

  // Ejemplo de uso:
//  console

let numbers = [1, 2, 3, 5, 6, 8, 9, 10, 15];
let res = rangeString(numbers);
let esOk = "";
if (res != "1-3,5,6,8-10,15") {
    esOk = "No es correcto."
}
else {
    esOk = "Es correcto."
}
console.log(`${res} -> ${esOk}`);
// Este es correcto
numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15];
res = rangeString(numbers);
if (res != "1-3,5,7-10,15") {
    esOk = "No es correcto."
}
else {
    esOk = "Es correcto."
}
console.log(`${res} -> ${esOk}`);
