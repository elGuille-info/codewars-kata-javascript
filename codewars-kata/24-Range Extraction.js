/*
    # Range Extraction (4 kyu)

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints.
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org

ALGORITHMS
*/

/*
De: https://stackoverflow.com/a/70138303/14338047
Pero no es correcto.
*/
function rangos_nova() {
function solution_no(list){
    let result=[]

    for(let i=0;i<list.length;i++){
        //write first value in range to result
        result.push(list[i].toString())
        //if this is the last entry, we are done
        if(i === list.length - 1){
            break
        }
        //initialize variables
        let e1 = list[i]
        let e2 = list[i+1]
        let isRange = false
        //run thorugh array while we get consecutive numbers
        while(e2-e1===1 && i < list.length-1){
            //modify the OUTER LOOP index variable.
            //This means when we return to the beginning of hte for loop,
            // we will be at the beginning of the next range
            i++
            e1 = list[i]
            e2 = list[i+1]
            isRange = true
        }
        //if there were any consecutive numbers
        if(isRange){
            //rewrite the last entry in result as a range
            result[result.length-1]+="-" + list[i].toString()
        }
    }
    return result.toString()
}
console.log(solution_no([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// Output: "-6,-3-1,3-5,7-11,14-15,17-20"
}

/*
De: https://codepen.io/TheEnd/pen/gzwRQj
*/
function solutionClever(arr) {
    const arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length; i++) {
        let j = i;
        while (arrCopy[j] - arrCopy[j + 1] === -1) {
            j++;
        }
        if (j - i > 1) {
            arrCopy.splice(i, j - i + 1, arrCopy[i] + "-" + arrCopy[j]);
        }
    }
    return arrCopy.join(",");
}

rangoChatGPT();

/*
De una conversación con OpenAI (ChatGPT) para ver si me daba la solución.
https://chat.openai.com/chat


G: Necesito hacer un código en javascript que extraiga de una serie de números consecutivos los que están en rango, de al menos 3 elementos
R: Para extraer los números que están dentro de un rango de al menos 3 elementos en JavaScript, puedes utilizar una combinación de la función filter y la función some. La función filter se utilizará para filtrar los números que se encuentren dentro del rango especificado, mientras que la función some se utilizará para asegurarse de que el rango tiene al menos 3 elementos.

Aquí tienes un ejemplo de cómo podrías implementar esto:
// Definimos un arreglo de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definimos el rango de números que queremos extraer
const min = 4;
const max = 7;

// Utilizamos la función filter para filtrar los números que se encuentren
// dentro del rango especificado
const filteredNumbers = numbers.filter(n => n >= min && n <= max);

// Utilizamos la función some para asegurarnos de que el rango tiene al menos
// 3 elementos
if (filteredNumbers.some(n => n >= min && n <= max)) {
  // Si se cumple, imprimimos los números filtrados
  console.log(filteredNumbers); // [4, 5, 6, 7]
}

Espero que esto te ayude a resolver tu problema. Si tienes alguna otra pregunta, no dudes en preguntar. Estoy aquí para ayudarte.

G: Gracias, voy a comprobarlo

De nada, espero que el código te funcione bien y te ayude a resolver tu problema. Si necesitas ayuda adicional o tienes alguna otra pregunta, no dudes en preguntar. Estoy aquí para ayudarte. ¡Buena suerte!

G: Ese código funciona, pero para extraer números en el rango indicado, pero lo que necesito es que, dada una serie de números, por ejemplo: [1,2,3,5,7,8,9,10,15] me lo muestre de esta forma: 1-3,5,7-10,15, es decir, los números 1,2 y 3 están en rango por tanto se indicará en la respuesta como 1-3, pero 5 y 7 no están en rango (de al menos 3 números consecutivos); por otra parte del 7 al 10 están en rango y se debe indicar como 7-10. ¿Me he explicado con claridad?

Sí, te has explicado con claridad. Para resolver este problema, puedes utilizar una combinación de la función reduce y la función concat. La función reduce se utilizará para iterar sobre cada elemento del arreglo y construir la respuesta final, mientras que la función concat se utilizará para unir los elementos del arreglo en la respuesta final.

Aquí tienes un ejemplo de cómo podrías implementar esto:

// Definimos un arreglo de números
const numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15];

// Definimos una variable para almacenar la respuesta final
let result = "";

// Utilizamos la función reduce para iterar sobre cada elemento del arreglo y
// construir la respuesta final
numbers.reduce((prev, curr) => {
  // Si el número actual es igual al número anterior + 1, entonces estamos
  // en un rango de al menos 3 elementos consecutivos
  if (curr === prev + 1) {
    // En este caso, agregamos el número actual a la respuesta final
    result = result.concat(curr);
  } else {
    // Si no estamos en un rango de al menos 3 elementos consecutivos,
    // entonces verificamos si la respuesta final tiene un guión (-) al final
    // para determinar si estamos en medio de un rango
    if (result.endsWith("-")) {
      // Si hay un guión al final, entonces eliminamos el guión y agregamos
      // el número anterior y el número actual a la respuesta final
      result = result.slice(0, -1).concat(prev, ",", curr);
    } else {
      // Si no hay un guión al final, entonces agregamos el número actual a
      // la respuesta final
      result = result.concat(",", curr);
    }
  }

G: parece que falta cerrar el paréntesis de "numbers.reduce", aun así, el resultado no es correcto, ya que devuelve esto: "2,3,5,7,8,9,10,15" y debería ser: "1-3,5,7-10,15"
(no me ha respondido y parece que tampoco le ha llegado)

*/


/**
 * De una conversación con OpenAI (ChatGPT) para ver si me daba la solución.
 * https://chat.openai.com/chat
 * 
 */
function rangoChatGPT() {
    // Definimos un arreglo de números
    const numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15];

    // Definimos una variable para almacenar la respuesta final
    let result = "";

    // Utilizamos la función reduce para iterar sobre cada elemento del arreglo y
    // construir la respuesta final
    numbers.reduce((prev, curr) => {
        // Si el número actual es igual al número anterior + 1, entonces estamos
        // en un rango de al menos 3 elementos consecutivos
        if (curr === prev + 1) {
            // En este caso, agregamos el número actual a la respuesta final
            result = result.concat(curr);
        } else {
            // Si no estamos en un rango de al menos 3 elementos consecutivos,
            // entonces verificamos si la respuesta final tiene un guión (-) al final
            // para determinar si estamos en medio de un rango
            if (result.endsWith("-")) {
                // Si hay un guión al final, entonces eliminamos el guión y agregamos
                // el número anterior y el número actual a la respuesta final
                result = result.slice(0, -1).concat(prev, ",", curr);
            } else {
                // Si no hay un guión al final, entonces agregamos el número actual a
                // la respuesta final
                result = result.concat(",", curr);
            }
        }
    });
    console.log(result);
}

/**
 * Poner los números indicados en rango, teniendo en cuenta que un rango debe abarcar al menos 3 valores.
 * Por ejemplo: 1,2,3,5,6,8,9,10,11 será: 1-3,5,6,8-11 --> 1,2,3: 1-3 and 5,6: 5,6 and 8,9,10,11: 8-11
 * [-6,
 * -3, -2, -1, 0, 1,
 * 3, 4, 5,
 * 7, 8, 9, 10, 11,
 * 14, 15,
 * 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20"
 *
 * @param {*} list List of integers in increasing order.
 * @returns A correctly formatted string in the range format.
 */
function solution(list) {
/*
[1,2,3,5,6,8,9,10,11], "1-3,5,6,8-11"
*/    
    // TODO: complete solution
    let res = [];

    let num1 = list[0];
    for (let i = 0; i < list.length - 1; i++) {
        let num2 = list[i];
        let num3 = list[i + 1];
        let num4 = num3 - num2;

        // Si no son consecutivos, añadir el número anterior
        if (num3 - num2 != 1) {
            if (num2 - num1 >= 2) {
                res.push(num1 + "-" + num2);
                // Asignar el último a comprobar
                num1 = num3;
                continue;
            }
            res.push(num1);
            //num1 = num2;
            num1 = num3;
            //continue;
        }
        //num1 = num2;
    }

    return res.join(",");}

/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = solution;

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
    //console.log("Del array indicado la respuesta correcta es = " + resOK + " ?= (" + res + ")");
    console.log("[" + arr.toString() + "]");
    if (resOK != res) {
        console.log("\tEl valor devuelto es " + res + " y debe ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
// // testArrNum([
// //     -6,
// //     -3, -2, -1, 0, 1,
// //     3, 4, 5,
// //     7, 8, 9, 10, 11,
// //     14, 15,
// //     17, 18, 19, 20], "-6,-3-1,3-5,7-11,14,15,17-20");
// // testArrNum([-5,-4,0,5,6,7,9,10], "-5,-4,0,5-7,9,10");
testArrNum([1,2,3,5,6,8,9,10,11], "1-3,5,6,8-11");

/*
Ejemplos de: https://www.sololearn.com/discuss/677451/challenge-range-extraction
(no hay solución, salvo en los enlaces para Python)

Example:
Input: [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
Output "-6,-3-1,3-5,7-11,14,15,17-20"

Example 2:
Input: [-5,-4,0,5,6,7,9,10]
output: "-5,-4,0,5-7,9,10"

Example 3:
Input: [1,2,3,5,6,8,9,10,11]
Output: "1-3,5,6,8-11"

Note: a range spans at least 3 numbers. e.g. 1,2,3: 1-3 and 5,6: 5,6 and 8,9,10,11: 8-11
*/

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  });
});
*/