
/*
De: https://stackoverflow.com/a/70138303/14338047
Pero no es correcto.
*/
function rangos_nova() {
    function solution_no(list) {
        let result = []

        for (let i = 0; i < list.length; i++) {
            //write first value in range to result
            result.push(list[i].toString())
            //if this is the last entry, we are done
            if (i === list.length - 1) {
                break
            }
            //initialize variables
            let e1 = list[i]
            let e2 = list[i + 1]
            let isRange = false
            //run thorugh array while we get consecutive numbers
            while (e2 - e1 === 1 && i < list.length - 1) {
                //modify the OUTER LOOP index variable.
                //This means when we return to the beginning of hte for loop,
                // we will be at the beginning of the next range
                i++
                e1 = list[i]
                e2 = list[i + 1]
                isRange = true
            }
            //if there were any consecutive numbers
            if (isRange) {
                //rewrite the last entry in result as a range
                result[result.length - 1] += "-" + list[i].toString()
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
function solution1(list) {
    /*
    Por ejemplo, este array [1,2,3,5,6,8,9,10,11], debe devolver este resultado "1-3,5,6,8-11"
    */
    let res = [];

    let num1 = list[0];
    let numi = 0;
    let numi_mas1 = 0;
    //let num4 = 0;
    for (let i = 0; i < list.length - 1; i++) {
        numi = list[i];
        numi_mas1 = list[i + 1];
        //num4 = numi_mas1 - numi;

        if (numi_mas1 - numi != 1) {
            if (numi - num1 >= 2) {
                res.push(num1 + "-" + numi);
                num1 = numi_mas1;
                continue;
            }
            res.push(num1);
            num1 = numi;
        }
    }

    return res.join(",");
}


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
