function multiplyStr0(a, b) {
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

    let result = mul.join('');
    result = result.toString().replace(/^0+/, '');
    if (result == "") result = "0";
    return result;
    //return mul.join('');
}
