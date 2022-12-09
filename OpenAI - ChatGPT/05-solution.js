function solution(list) {
    /*
    Por ejemplo, este array [1, 2, 3, 5, 6, 8, 9, 10, 15], debe devolver este resultado "1-3,5,6,8-10,15"
    */
    let res = [];

    let num1 = list[0];
    let numi = 0;
    let numi_mas1 = 0;
    for (let i = 0; i < list.length - 1; i++) {
        numi = list[i];
        numi_mas1 = list[i + 1];

        if (numi_mas1 - numi != 1) {
            if (numi - num1 >= 2) {
            //if (numi_mas1 - num1 >= 2) {
                res.push(num1 + "-" + numi);
                num1 = numi_mas1;
                continue;
            }
            // Agregamos esta comprobación para verificar si num1 es igual al primer número en la lista
            if (num1 !== list[0]) {
                res.push(num1);
            }
            num1 = numi;
        }
    }

    // Agregamos este código para manejar el último número en la lista
    if (numi - num1 >= 2) {
        res.push(num1 + "-" + numi);
    } else {
        res.push(num1);
        //res.push(numi);
    }

    return res.join(",");
}

/*
Después de revisar el código nuevamente, veo que hay un problema adicional en la función.
En la línea 14, se está comparando la diferencia entre numi y num1 en lugar de la diferencia entre numi_mas1 y num1.
Esto significa que si hay un número en la lista que no es parte de un rango, ese número se agregará al resultado final en lugar de ignorarse.

Para solucionar este problema, puedes cambiar la línea 14 para comparar la diferencia entre numi_mas1 y num1 en lugar de la diferencia entre numi y num1.
Aquí te muestro un ejemplo de cómo podrías hacerlo:

*/

// con este falla:
let numbers = [1, 2, 3, 5, 6, 8, 9, 10, 15]; // 1-3,5,8,9-10,15, --> 1-3,5,6,9-10,15,
let res = solution(numbers);
console.log(res);
// Este es correcto
// numbers = [1, 2, 3, 5, 7, 8, 9, 10, 15]; // 1-3,5,7-10,15,
// res = solution(numbers);
// console.log(res);
