/*
  # Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org

STRINGS, FUNDAMENTALS
*/

// Poner en mayúscula la primera letra de cada palabra de una cadena

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
