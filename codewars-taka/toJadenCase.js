﻿// Poner en mayúscula la primera letra de cada palabra de una cadena

String.prototype.toJadenCase = function () {
    function capitalizeWords ( str ) {
      // Dividir la cadena en palabras (separadas por espacios).
      let palabras = str.split(' ');
      let palabrasJaden = [];

      // Recorrer cada palabra
      for (var i = 0; i < palabras.length; i++) {
        s = palabras[i];
        if (s) {
          // Convertir la primera letra en mayúscula.
          let s2 = s.charAt(0).toUpperCase() + s.slice(1);
          palabrasJaden.push(s2);
        }
      }

      // Unir las palabras con espacios.
      let final = palabrasJaden.join(' ');

      return final;
    }

    return capitalizeWords(this);
  };

  var str = "How can mirrors be real if our eyes aren't real";
  if (str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real") {
      console.log("Es correcto.");
  }
  else {
    console.log("No es correcto.");
  }
