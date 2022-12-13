/*
    # Gap in Primes

The prime numbers are not regularly spaced.
For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4.
Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

In such a case (no pair of prime numbers with a gap of `g`)
In C: return [0, 0]
In C++, Lua, COBOL: return `{0, 0}`.
In F#: return `[||]`.
In Kotlin, Dart and Prolog: return `[]`.
In Pascal: return Type TGap (0, 0).
Examples:
- gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`

gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)

gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107 is not a 6-gap because there is 103 in between and 103-109is not a 6-gap because there is 107in between.

You can see more examples of return in Sample Tests.

Note for Go
For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil

Ref
https://en.wikipedia.org/wiki/Prime_gap

FUNDAMENTALS

*/

// Las soluciones

//1- zoid, user9878128, yiling0627, zeus-jen, nonie7@onet.pl, phptonist1, soroosh96, yun0926, scott.ling, patelv2 (+ 96)
// https://www.codewars.com/kata/reviews/561ea39f353ce43dbd00002e/groups/5672247d2ff94645d500003b
// Esta falla con gap(2, 2, 6) = null devuelve [0,2]
// en el comentario de lindaxiao-hust indica que falla con gap(3, 3, 4) debe ser null y devuelve [0,3]
function gap_1(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) {
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }

    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }

    return null;
}

//2- pwynn, msservice
// https://www.codewars.com/kata/reviews/561ea39f353ce43dbd00002e/groups/568397e95b85c71022000045
function isPrime_2(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
    var m = Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
 }


 function gap_2(g, m, n) {
   let mx = 0;
   for (m, n; m < n; m++) {
     if (isPrime_2(m)) {
       if (m - mx === g) return [mx, m];
       mx = m;
     }
   }
   return null;
 }

//3- jeremybini
// https://www.codewars.com/kata/reviews/561ea39f353ce43dbd00002e/groups/569e3819ae152e644300002a
// Esta falla con: gap(4, 6, 11) y gap(4, 7, 11) devuelve null y debe ser [7,11]
var primes = [2];
var notPrimes = [];

function gap_3(g, m, n) {
  if(m%2===0) m = m+1;
  for(var i = m; i < n-g; i+=2) {
    if(isPrime_3(i) && isPrime_3(i+g)) {
      var concurrent = true;
      for(var j = i+2; j<(i+g); j+=2) {
        if(isPrime_3(j)) { concurrent = false; break; }
      }
      if (concurrent) return [i, i+g];
    }
  }
  return null;
}

function isPrime_3(num) {
  if(primes.indexOf(num)!==-1) return true;
  if(notPrimes.indexOf(num)!==-1) return false;
  if(num%2===0) return false;
  if(num%3===0) return false;
  if(num%5===0) return false;

  for(var i = 7; i<=Math.sqrt(num); i+=2) {
    if(num%i===0) {
      notPrimes.push(num);
      return false
    }
  }
  primes.push(num);
  return true;
}

// Convertido y modificadp  del código en Python de: https://zhuangyan.gitbooks.io/codewars/content/5-kyu/gap-in-primes.html

/**
 * g (integer >= 2) which indicates the gap we are looking for
 * m (integer > 2) which gives the start of the search (m inclusive)
 * n (integer >= m) which gives the end of the search (n inclusive)
 *
 * gap(2, 3, 50) will return [3, 5] which is the first pair between 3 and 50 with a 2-gap.
 *
 * This function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist
 * otherwise null.
 *
 * @param {*} g (integer >= 2) which indicates the gap (diferencia) we are looking for
 * @param {*} m (integer > 2) which gives the start of the search (m inclusive)
 * @param {*} n (integer >= m) which gives the end of the search (n inclusive)
 */
function gap(g, m, n) {
    // your code

    // Validar los parámetros
    if (g < 2 || m < 3 || n < m) {
        return null;
    }

    let primeAnt = -1;
    for (let i = m; i <= n; i++) {
        // Si es primo, comprobar si hay la diferencia indicada con el primo anterior
        if (isPrime(i)) {
            // Solo comprobarlo si se encontró un primo anterior
            if (primeAnt > -1 && i - primeAnt == g) {
                return [primeAnt, i];
            }
            // El último primo hallado antes de encontrar la solución
            primeAnt = i;
        }
    }
    // Si llega aquí es que no se ha encontrado nada
    return null;

    // Función para comprobar si un número es primo
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function gap0(g, m, n) {
    // your code

    // Validar los parámetros
    if (g < 2 || m < 3 || n < m) {
        return null;
    }

    let primeAnt = n;
    for (let i = m; i <= n; i++) {
        // Si es primo, comprobar si hay el "gap" con el primo anterior
        if (isPrime(i)) {
            if (i - primeAnt == g) {
                return [primeAnt, i];
            }
            primeAnt = i;
        }
    }
    return null;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function gap02(g, m, n) {
    // your code

    // Validar los parámetros
    if (g < 2 || m < 3 || n < m) {
        return null;
    }

    let primeAnt = n;
    for (let i = m; i <= n; i++) {
        if (isPrime02(i)) {
            if (i - primeAnt == g) {
                return [primeAnt, i];
            }
            primeAnt = i;
        }
    }
    return null;
}

/**
 * Comprobar si el número indicado es un número primo.
 *
 * @param {*} num El número a comprobar.
 * @returns True si lo es, false en otro caso.
 */
function isPrime02(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see comprobar3
 */
 let laFuncion = gap;

 /**
   * Para comprobar si el resultado de la función es válido.
   *
   * @param {*} valor1 El primer valor a comprobar.
   * @param {*} valor2 El segundo valor a comprobar
   * @param {*} valor3 El tercer valor a comprobar
   * @param {*} resOK El resultado que debe dar.
   *
   * @see laFuncion Para asignar la función a usar.
   */
function comprobar3(valor1, valor2, valor3, resOK) {
  console.log(valor1 + ", " + valor2 + ", " + valor3 + " = " + resOK);

  let res = laFuncion(valor1, valor2, valor3);
  if (res?.toString() != resOK?.toString()) {
    console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
  }
  else {
    console.log("\tCorrecto!");
  }
}

// Pruebas
// // Probar con las 2 funciones
// console.log("Usando gap:");
// laFuncion = gap;
// comprobar3(4, 6, 11, [7,11]);
// laFuncion = gap0;
// console.log("Usando gap0:");
// comprobar3(4, 6, 11, [7,11]);
// console.log("---");
laFuncion = gap;
comprobar3(3, 2, 6, null);
comprobar3(3, 3, 4, null);
comprobar3(2, 2, 6, null);
comprobar3(3, 5, 6, null);
comprobar3(4, 6, 11, [7,11]);
comprobar3(4, 7, 11, [7,11]);
comprobar3(1, 3, 500, null);
comprobar3(1, 3, 50, null);
comprobar3(2, 3, 50, [3, 5]);
comprobar3(2,100,110, [101, 103]);
comprobar3(4,100,110, [103, 107]);
comprobar3(6,100,110, null);
comprobar3(2,100,110, [101, 103]);
comprobar3(3,100,110, null);
comprobar3(8,300,400, [359, 367]);
comprobar3(10,300,400, [337, 347]);
// comparar3();

/*
const chai = require("chai"),
      assert = chai.assert;

describe("Gap",function() {
  it("Basic tests",function() {
    assert.deepEqual(gap(2,100,110), [101, 103]);
    assert.deepEqual(gap(4,100,110), [103, 107]);
    assert.deepEqual(gap(6,100,110), null);
    assert.deepEqual(gap(8,300,400), [359, 367]);
    assert.deepEqual(gap(10,300,400), [337, 347]);
})})
*/

/*
  kata en C#
  https://www.codewars.com/kata/reviews/561ea93e5b3086893a00005d/groups/638e67afe76b1d0001c57f6c
*/
