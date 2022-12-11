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

/*
    Las soluciones
*/

//1- omgo, suva, summeranimation, dubdjon, codenao, user9127485, Pablo Sabater, qimingzizhennan, Gperezg, testfy (+ 1158)
// https://www.codewars.com/kata/reviews/52742f58faf5485cae000b9d/groups/536b6acd1da4dcb0ac00090a
function formatDuration_1(seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

//2- Krapock, Mary Good, user6723683, khairul, hobiafk@gmail.com, eQuality, Vladislav-Fedurkin, user13131313, Heinrich-Marx, Takahashi (+ 19)
// https://www.codewars.com/kata/reviews/52742f58faf5485cae000b9d/groups/542ab4c1813f1ddb07000a56
function formatDuration_2(seconds) {
    if (!seconds) return "now";
    var strout = "";
    var s = seconds % 60;
    seconds = (seconds - s) / 60;
    var m = seconds % 60;
    seconds = (seconds - m) / 60;
    var h = seconds % 24;
    seconds = (seconds - h) / 24;
    var d = seconds % 365;
    seconds = (seconds - d) / 365;
    var y = seconds;

    var english = [];
    if (y) english.push(y + " year" + (y > 1 ? 's' : ''));
    if (d) english.push(d + " day" + (d > 1 ? 's' : ''));
    if (h) english.push(h + " hour" + (h > 1 ? 's' : ''));
    if (m) english.push(m + " minute" + (m > 1 ? 's' : ''));
    if (s) english.push(s + " second" + (s > 1 ? 's' : ''));

    return english.join(", ").replace(/,([^,]*)$/, " and$1");

}

//3- allonhadaya, rsschool_17abaff0b80ff8f3, Dr.Sweet
// https://www.codewars.com/kata/reviews/52742f58faf5485cae000b9d/groups/5539328c8601e7628b0000a7
var formatDuration_3 = (function () {

    return function formatDuration(seconds) {
        return [{ name: 'year', size: 365 * 24 * 60 * 60 * 1 },
        { name: 'day', size: 24 * 60 * 60 * 1 },
        { name: 'hour', size: 60 * 60 * 1 },
        { name: 'minute', size: 60 * 1 },
        { name: 'second', size: 1 }].
            reduce(parse, { parts: [], seconds: seconds }).
            parts.
            reduce(join, 'now');
    };

    function parse(result, part) {
        var quantity = Math.floor(result.seconds / part.size);
        if (quantity > 0) {
            result.seconds -= quantity * part.size;
            result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
        }
        return result;
    }

    function join(result, part, index, arr) {
        switch (index) {
            case 0: return part;
            case arr.length - 1: return result + ' and ' + part;
            default: return result + ', ' + part;
        }
    }

}());

function formatDuration0(seconds) {
    // Complete this function
}

// La presentada, respuesta de ChatGPT
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

// Pruebas
comparaResultado(1, "1 second");
comparaResultado(62, "1 minute and 2 seconds");
comparaResultado(120, "2 minutes");
comparaResultado(3600, "1 hour");
comparaResultado(3662, "1 hour, 1 minute and 2 seconds");

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