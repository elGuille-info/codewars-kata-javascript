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
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
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
