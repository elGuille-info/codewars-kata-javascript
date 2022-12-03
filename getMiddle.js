/*
You are going to be given a word.
Your job is to return the middle character of the word.
If the word's length is odd (impar), return the middle character.
If the word's length is even (par), return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s)
{
  //Code goes here!

  // No aceptar cadenas con menos de 1 carácter.
  if (s == "" || s.length < 1) return "";

  // Cuántos caracteres tiene.
  var cuantos = s.length;
  var laMitad = cuantos / 2;
  // Si el total de caracteres es par, devolver los 2 caracteres del centro
  if (cuantos % 2 == 0) {
    return s.substring(laMitad - 1, laMitad - 1 + 2);
  }
  // Si el total de caracteres es impar, devolver el carácter central.
  else {
    var laMitadPar = Math.round(laMitad) - 1;
    return s.substring(laMitadPar, laMitadPar + 1);
  }
}

function getMiddle2(s)
{
  //Code goes here!

  // No aceptar cadenas con menos de 1 carácter.
  if (s == "" || s.length < 1) return "nulo";

  // Cuántos caracteres tiene.
  var cuantos = s.length;
  var laMitad = cuantos / 2;
  // Si el total de caracteres es par, devolver los 2 caracteres del centro
  if (cuantos % 2 == 0) {
    console.log("Par: " + s);
    //var s1 = String(s);
    return s.substring(laMitad - 1, laMitad - 1 + 2);

  }
  // Si el total de caracteres es impar, devolver el carácter central.
  else {
    console.log("Impar: " + s);
    var s1 = String(s);
    var laMitadPar = Math.round(laMitad) - 1;
    var s2 = s1.substring(laMitadPar, laMitadPar + 1);
    return s2; //s.substring(laMitadPar, laMitadPar);
  }
}

function pruebas(s1, s2) {
    var res = getMiddle(s1);
    var igual = res == s2;
    console.log("getMiddle(" + s1 + " ?= " + s2 + " = " + igual);
    console.log("\tres= '" + res + "'");
}

//pruebas("", "nulo");
pruebas("middle","dd");
pruebas("test", "es");
pruebas("testing", "t");
pruebas("A", "A");

/*
const Test = require('@codewars/test-compat');

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
*/