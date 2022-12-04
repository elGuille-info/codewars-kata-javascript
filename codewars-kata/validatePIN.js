/*
  Valida un pin numérico de solo 4 o 6 cifras con expresiones regulares (JavaScript)

  Explicación:
  ^ indica que no haya nada delante
  \d{4} un número de 4 cifras
  \d{6} un número de 6 cifras
  $ indica que ya no haya más caracteres (el final de la línea)

  Cuando se hace en una sola expresión se ponen las dos comprobaciones entre paréntesis separados por |:
  /^(\d{6}|\d{4})$/
*/

// La forma larga
function validatePIN1 (pin) {
  //return true or false

  const regex6 = /^\d{6}$/;
  var res6 = regex6.test(pin);
  if (res6) return true;

  const regex4 = /^\d{4}$/;
  var res4 = regex4.test(pin);
  if (res4) return true;

  return false;
}

// La forma corta
function validatePIN2 (pin) {
  //return true or false

  // Forma más concisa:
  //return /^(\d{4}|\d{6})$/.test(pin)

  const regex = /^(\d{6}|\d{4})$/;
  var res = regex.test(pin);
  if (res) return true;


  return false;
}

// Creo que esta es la que puse.

function validatePIN (pin) {
    //return true or false

    const regex6 = /^\d{6}\b$/g;
    var res6 = regex6.test(pin);
    if (res6) return true;

    const regex4 = /^\d{4}\b$/;
    var res4 = regex4.test(pin);
    if (res4) return true;


    return false;
}

// Pruebas

  var elPin = "1";
  var res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "a234";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "12345";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "123456";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "-123456";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "123456-";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "123456*";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "-1234";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234 ";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234.";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234*";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234-";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234}";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);

  elPin = "1234]";
  res = validatePIN(elPin);
  console.log("'"+ elPin + "' es un pin válido: " + res);
