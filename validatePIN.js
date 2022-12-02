function validatePIN (pin) {
    //return true or false
    /*
    const regex6 = /^\d{6}\b$/g;
    var res6 = regex6.test(pin);
    if (res6) return true;

    const regex4 = /^\d{4}\b$/;
    var res4 = regex4.test(pin);
    if (res4) return true;
    */
    //return /^(\d{4}|\d{6})$/.test(pin)

    const regex4 = /^(\d{6}|\d{4})\b$/;
    var res4 = regex4.test(pin);
    if (res4) return true;


    return false;
  }

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
