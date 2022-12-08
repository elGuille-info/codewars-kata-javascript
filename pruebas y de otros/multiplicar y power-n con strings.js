

function powerStr(a, b) {
    //const numB = Number(b)
    let res = a
    for (let i = 1; i < b; i++) {
        res = multiplyStr(res, a);
    }
    return res;
}

/*
primero tomas la última cifra del número inferior, y la vas multiplicando por cada una de las cifras del número superior 
(y teniendo en cuenta si "te llevas algo" porque el resultado sea mayo que 10).
*/

function multiplyStr(a, b) {
    let mul = [];
    let c = [];
    let temp = [];
    let la, lb;
    let k = 0, x = 0;
    let r = 0;
    let sum = 0;

    la = a.length - 1;
    lb = b.length - 1;
    for (let i = lb; i >= 0; i--) {
        r = 0;
        for (let j = la; j >= 0; j--) {
            let num1 = Number(b[i]);
            let num2 = Number(a[j]);
            temp[k++] = (num1 * num2 + r) % 10;
            r = Math.floor((num1 * num2 + r) / 10);
        }
        temp[k++] = r;
        x++;
        for (let y = 0; y < x; y++) {
            temp[k++] = 0;
        }
    }

    k = 0;
    r = 0;
    for (let i = 0; i < la + lb + 2; i++) {
        sum = 0;
        y = 0;
        for (let j = 1; j <= lb + 1; j++) {
            if (i <= la + j) {
                sum = sum + temp[y + i];
            }
            y += j + la + 1;
        }
        c[k++] = (sum + r) % 10;
        r = (sum + r) / 10;
    }
    c[k] = r;

    r = 0;
    for (let i = k - 1; i >= 0; i--) {
        mul[r++] = Math.floor(c[i]);
    }
    
    return mul.join('');
}

console.log("9 ^ 7 = " + 9**7)
console.log(powerStr("9", "7"))
// Este ni se te ocurra probarlo... !!!
// console.log(powerStr("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))
console.log(multiplyStr("9", "7"))
console.log(multiplyStr("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))
