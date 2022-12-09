/*
Necesito una función en JavaScript que reciba una cadena con un número escrito como texto en inglés y devuelva el número correspondiente. El valor mínimo es "zero" y el máximo es "one million". Los números se pueden escribir de forma que contenga "and" o no, por ejemplo: "one hundred and twenty-four" sería lo mismo que "one hundred twenty-four".
¿Puedes ayudarme? Gracias

Sí, puedo ayudarte. Una forma de hacerlo sería la siguiente:

function textToNumber(text) {
  // Primero, creamos una tabla de conversión de texto a número
  const textToNumberMap = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90,
    "hundred": 100,
    "thousand": 1000,
    "million": 1000000
  };

  // Luego, dividimos la cadena en palabras y las convertimos a números usando la tabla
  const words = text.split(" ");
  const numbers = words.map(word => textToNumberMap[word]);

  // Finalmente, calculamos el número total sumando o multiplicando los números según corresponda
  let total = 0;
  let current = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 100) {
      // Si encontramos un "hundred", multiplicamos el número actual por 100 y lo añadimos al total
      current *= 100;
      total += current;
      current = 0;
    } else if (numbers[i] === 1000 || numbers[i] === 1000000) {
      // Si encontramos un "thousand" o un "million", multiplicamos el total por el número correspondiente y reiniciamos el número actual
      total


      --- No está completo
*/

function textToNumber(text) {
    // Primero, creamos una tabla de conversión de texto a número
    const textToNumberMap = {
      "zero": 0,
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9,
      "ten": 10,
      "eleven": 11,
      "twelve": 12,
      "thirteen": 13,
      "fourteen": 14,
      "fifteen": 15,
      "sixteen": 16,
      "seventeen": 17,
      "eighteen": 18,
      "nineteen": 19,
      "twenty": 20,
      "thirty": 30,
      "forty": 40,
      "fifty": 50,
      "sixty": 60,
      "seventy": 70,
      "eighty": 80,
      "ninety": 90,
      "hundred": 100,
      "thousand": 1000,
      "million": 1000000
    };

    // Luego, dividimos la cadena en palabras y las convertimos a números usando la tabla
    const words = text.split(" ");
    const numbers = words.map(word => textToNumberMap[word]);

    // Finalmente, calculamos el número total sumando o multiplicando los números según corresponda
    let total = 0;
    let current = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 100) {
        // Si encontramos un "hundred", multiplicamos el número actual por 100 y lo añadimos al total
        current *= 100;
        total += current;
        current = 0;
      } else if (numbers[i] === 1000 || numbers[i] === 1000000) {
        // Si encontramos un "thousand" o un "million", multiplicamos el total por el número correspondiente y reiniciamos el número actual

        // Si la palabra es "thousand" o "million", multiplica el resultado actual por 1000 o 1000000 según corresponda
        total *= numbers[i] === 1000 ? 1000 : 1000000;
        current = 0;
      }
    }

    return total;
}

function convertToNumber1(text) {
    // Crea un diccionario con los números escritos como texto y su valor numérico correspondiente
    const numbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
    };

    // Divide la cadena en palabras y recorre cada palabra
    const words = text.split(" ");
    let result = 0;
    let current = 0;
    let last = "";
    for (const word of words) {
      // Si la palabra es "and", simplemente la ignoramos
      if (word === "and") continue;

      // Si la palabra está en el diccionario de números, actualizamos el valor actual
      if (word in numbers) {
        current = numbers[word];
      } else if (word === "hundred") {
        // Si la palabra es "hundred", multiplicamos el valor actual por 100
        current *= 100;
      } else if (word === "thousand") {
        // Si la palabra es "thousand", multiplicamos el valor actual por 1000 y lo agregamos al resultado, y luego reseteamos el valor actual
        result += current * 1000;
        current = 0;
      } else if (word === "million") {
        // Si la palabra es "million", multiplicamos el valor actual por 1000000 y lo agregamos al resultado, y luego reseteamos el valor actual
        result += current * 1000000;
      }
    }
    return result;
}

function convertToNumber(text) {
  // Crea un diccionario con los números escritos como texto y su valor numérico correspondiente
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  // Divide la cadena en palabras y recorre cada palabra

  const words = text.replaceAll("-", " ").split(" ");
  let result = 0;
  let current = 0;
  //let last = "";
  for (const word of words) {
  // Si la palabra es "and", simplemente la ignoramos
  if (word === "and") continue;

    // Si la palabra está en el diccionario de números, actualizamos el valor actual
    if (word in numbers) {
      current += numbers[word];
      result = current;
      //result += numbers[word];
    } else if (word === "hundred") {
      // Si la palabra es "hundred", multiplicamos el valor actual por 100
      current *= 100;
      //result += current * 100;
    } else if (word === "thousand") {
      // Si la palabra es "thousand", multiplicamos el valor actual por 1000 y lo agregamos al resultado, y luego reseteamos el valor actual
      //result += current * 1000;
      result *= 1000;
      current = result;
      //current = 0;
      //current *= 1000;
      //result += current;
    } else if (word === "million") {
      // Si la palabra es "million", multiplicamos el valor actual por 1000000 y lo agregamos al resultado, y luego reseteamos el valor actual
      //result += current * 1000000;
      result *= 1000000;
    }
  }
  return result;
}
