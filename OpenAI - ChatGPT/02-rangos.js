/*
La conversación anterior se quedó "colgada", creo que te faltó parte de la respuesta (en el código), al menos le faltaba cerrar el paréntesis de "numbers.reduce", aun así, el resultado no es correcto, ya que devuelve esto: "2,3,5,7,8,9,10,15" y debería ser: "1-3,5,7-10,15"

Lo siento, parece que cometí un error al proporcionar el código de ejemplo en la respuesta anterior. Me gustaría darte una explicación más detallada y proporcionarte un nuevo código que funcione correctamente.

En resumen, para convertir una secuencia de números en una cadena de texto que represente el rango de números, primero debemos ordenar los números en orden ascendente. Luego, debemos iterar sobre la lista de números y comparar cada número con el siguiente para ver si forman parte del mismo rango. Si forman parte del mismo rango, añadimos el número al rango actual y continuamos iterando. Si no forman parte del mismo rango, añadimos el rango actual a una lista de rangos y comenzamos un nuevo rango. Una vez que hayamos iterado sobre todos los números, añadimos el último rango a la lista de rangos y luego convertimos la lista de rangos en una cadena de texto para devolverla.

Aquí hay un ejemplo de código que realiza este proceso:

function convertToRangeString(numbers) {
  // Ordenamos los números en orden ascendente
  numbers.sort((a, b) => a - b);

  // Creamos una lista para almacenar los rangos
  let ranges = [];
  // Creamos una variable para almacenar el rango actual
  let currentRange = [numbers[0]];

  // Iteramos sobre los números
  for (let i = 1; i < numbers.length; i++) {
    // Si el número actual forma parte del mismo rango que el anterior, añadimos el número al rango actual
    if (numbers[i] === numbers[i - 1] + 1) {
      currentRange.

*/
function convertToRangeString(numbers) {
    // Ordenamos los números en orden ascendente
    numbers.sort((a, b) => a - b);
  
    // Creamos una lista para almacenar los rangos
    let ranges = [];
    // Creamos una variable para almacenar el rango actual
    let currentRange = [numbers[0]];
  
    // Iteramos sobre los números
    for (let i = 1; i < numbers.length; i++) {
      // Si el número actual forma parte del mismo rango que el anterior, añadimos el número al rango actual
      if (numbers[i] === numbers[i - 1] + 1) {
        // Aquí se quedó...
        //currentRange.
      }
    }
}  

const numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15];
let res = convertToRangeString(numbers);
console.log(res);
