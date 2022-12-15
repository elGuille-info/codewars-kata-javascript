/*
Las diferentes funciones usadas para las pruebas. (08/dic/22 14.47)

Para probar el código se puede usar cualquiera de la documentación de mdn (mozilla):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers#try_it
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
etc.

Esta tiene algo de má espacio para el código:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

function nombre_de_la_funcion(parametro) {
    return 0;
}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'laFuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = nombre_de_la_funcion;

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 El valor del primer valor a comprobar.
  * @param {*} valor2 El valor del segundo valor a comprobar
  * @param {*} resOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function comparar2(valor1, valor2, resOK) {
    console.log(valor1?.toString() + " =? " + valor2?.toString() + " = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Comprueba los cálculos a realizar sobre un array que devuelven un valor numérico.
 *
 * @param {*} arr El array a procesar.
 * @param {*} resOK El valor correcto.
 */
function testArrNum(arr, resOK) {
    var res = laFuncion(arr);
    // Mostrar el array
    //console.log("[" + arr.toString() + "] = " + resOK + " ?= (" + res + ")");
    // No mostrar el array
    console.log("Del array indicado la respuesta correcta es = " + resOK + " ?= (" + res + ")");
    if (resOK != res) {
        console.log("\tEl valor devuelto es " + res + " y debe ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Comprueba los cálculos a realizar sobre un array que devuelven un valor.
 *
 * @param {*} arr El array a procesar.
 * @param {*} resOK La respuesta correcta.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 */
function testArrNum(arr, resOK, noMostrarLog) {
    if (!noMostrarLog) {
        console.log("[" + arr.toString() + "] = " + resOK);
    }

    // El resultado de la función
    var res = laFuncion(arr);

    if (resOK != res) {
        console.log("\tEl valor devuelto es '" + res + "' y debe ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
  * Comprueba los cálculos a realizar sobre un array que devuelven un valor de tipo array.
  *
  * @param {*} arr El array a analizar.
  * @param {*} resOK El resultado correcto.
  */
function testArrArr(arr, resOK) {
    var res = laFuncion(arr);
    console.log("[" + arr.toString() + "] = [" + resOK + "] ?= ([" + res + "])");
    if ("[" + resOK + "]" != "[" + res + "]") {
        console.log("\tEl valor devuelto es [" + res + "] y debe ser [" + resOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 El valor del primer array a comprobar.
  * @param {*} valor2 El valor del segundo array a comprobar
  * @param {*} resOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function compararArrays(valor1, valor2, resOK) {
    console.log("[" + valor1?.toString() + "] =? [" + valor2?.toString() + "] = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
  * Para comparar dos arrays, el primero evaluado por la función (laFuncion).
  *
  * @param {*} arr El valor del primer array.
  * @param {*} arrOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function compararArrays(arr, arrOK) {
    console.log("[" + arr?.toString() + "] --> [" + arrOK?.toString() + "]");

    let res = laFuncion(arr);
    if (res.toString() != arrOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es [" + res + "] debería ser [" + arrOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} mostrarLog Si se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function compararTextNum(valor1, valor2, resOK, mostrarLog) {
    if (mostrarLog)
        console.log(valor1 + " =? " + valor2 + " = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
  * Para comprobar si el resultado de la función es válido.
  *
  * @param {*} valor1 Primer parámetro a pasar a la función.
  * @param {*} valor2 Segundo parámetro a pasar a la función.
  * @param {*} resOK El resultado que debe dar.
  * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
  * @see laFuncion Para asignar la función a usar.
  */
function prueba2Valores(valor1, valor2, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(laFuncion.name.toString() + "(" + valor1 + ", " + valor2 + ") = " + resOK);

    let res = laFuncion(valor1, valor2);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Para comprobar si el resultado de la función es válido.
 * 
 * @param {*} valor1 
 * @param {*} valor2 
 * @param {*} valor3 
 * @param {*} resOK 
 * @param {*} noMostrarLog 
 */
function prueba3Valores(valor1, valor2, valor3, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(laFuncion.name.toString() + "(" + valor1 + ", " + valor2 + ", " + valor3 + ") = " + resOK);

    let res = laFuncion(valor1, valor2, valor3);
    if (res != resOK) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

function assertEquals(res, resOK) {
    //let res = laFuncion(valor1, valor2);
    if (res == resOK) {
        console.log("\tCorrecto");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}

/**
 * 
 * @param {*} res 
 * @param {*} resOK 
 */
function strictEqual(res, resOK) {
    //let res = laFuncion(valor1, valor2);
    if (res == resOK) {
        console.log("\tCorrecto");
    } else {
        console.log("\tNo es correcto, debería ser '" + resOK + "' y devuelve '" + res + "'");
    }
}

/**
  * Para comparar un array con el resultado devuelto por laFuncion con los dos parámetros.
  *
  * @param {*} num1 El valor del primer valor.
  * @param {*} num2 El valor del segundo valor.
  * @param {*} arrOK El resultado que debe dar.
  * @see laFuncion Para asignar la función a usar.
  */
function test2NumArray(num1, num2, arrOK) {
    console.log(laFuncion.toString() + "(" + num1 + ", " + num2 + ") --> [" + arrOK?.toString() + "]");

    let res = laFuncion(num1, num2);
    if (res.toString() != arrOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es [" + res + "] debería ser [" + arrOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}

/**
 * Prueba de llamada a función con 3 parámetros.
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} operator 
 * @param {*} resOK 
 */
function pruebas(a, b, operator, resOK) {
    console.log(laFuncion.name + "(" + a + ", " + b + "," + operator + ") = " + resOK)

    let res = laFuncion(a, b, operator)

    if (res == resOK) {
        console.log("\tCorrecto")
    } else {
        console.log("\tNo es correcto: la respuesta es '" + res + "' y debe ser '" + resOK + "'")
    }
}

/**
 * Prototipo por si no está definida replaceAll.
 * 
 * @param {*} search 
 * @param {*} replace 
 * @returns 
 */
String.prototype.replaceAllTxt = function replaceAll(search, replace) { return this.split(search).join(replace); }

/**
 * Quita todos los caracteres indicados de la cadena.
 * 
 * @param {*} search El caracter a quitar.
 * @returns Una nueva cadena sin el caracter indicados.
 */
String.prototype.removeAllTxt = function removeAll(search) { return this.split(search).join(''); }


// Quitar todos los espacios de delante y detrás:
//.replace(/(^ +| +$)/g, '');

/**
 * Quita todos los espacios del principio y del final.
 * Como si se hiciera cadena.trimStart().trimEnd()
 * 
 * @param {*} search La cadena a la que le queremos quitar los espacios del principio y del final.
 * @returns Una nueva cadena sin los espacios.
 */
function trimStartEnd(search) { return search.replace(/(^ +| +$)/g, ''); }


String.prototype.trimTxt = function trimStartEnd() { return this.replace(/(^ +| +$)/g, ''); }