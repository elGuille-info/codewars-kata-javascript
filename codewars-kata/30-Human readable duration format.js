/*
    # Human readable duration format (4 kyu)

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

STRINGS, DATE TIME, ALGORITHMS
*/

function formatDuration0(seconds) {
    // Complete this function
}

function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const units = [
        { unit: "year", divisor: 365 * 24 * 60 * 60 },
        { unit: "day", divisor: 24 * 60 * 60 },
        { unit: "hour", divisor: 60 * 60 },
        { unit: "minute", divisor: 60 },
        { unit: "second", divisor: 1 }
    ];

    const parts = units.map(({ unit, divisor }) => {
        const value = Math.floor(seconds / divisor);
        seconds -= value * divisor;
        return value > 0 ? `${value} ${unit}${value > 1 ? "s" : ""}` : null;
    }).filter(Boolean);

    return parts.length > 1
        ? `${parts.slice(0, -1).join(", ")} and ${parts.slice(-1)}`
        : parts[0];
}


// Pruebas
comparaResultado(1, "1 second");
comparaResultado(62, "1 minute and 2 seconds");
comparaResultado(120, "2 minutes");
comparaResultado(3600, "1 hour");
comparaResultado(3662, "1 hour, 1 minute and 2 seconds");


/**
 * Indicar aquí la función a usar dentro de
 * @see comparaResultado
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = formatDuration;


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

/*
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});
*/