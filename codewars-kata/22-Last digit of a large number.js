/*
    # Last digit of a large number (5 kyu)

Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. 
Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. 
The last decimal digit of (2^200)^2^300 ({2^{200}})^{2^{300}}, which has over 10^{92} decimal digits, is 6. 
Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

Remarks
JavaScript, C++, R, PureScript, COBOL
Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

ALGORITHMS, MATHEMATICS
*/

var lastDigit0 = function(str1, str2){  
    return 0; // fix me
}

// https://gist.github.com/railsstudent/ede7a5c3f69949dab98cdd998285d652
// http://www.geeksforgeeks.org/find-last-digit-of-ab-for-large-numbers/
//http://qa.geeksforgeeks.org/1061/given-big-number-form-string-how-do-take-mod-of-that-big-number

var asciiZero = "0".charCodeAt(0);
var findModulo = function(base, exponent) {
  var mod = 0;
  for (var i in exponent) {
    //mod = (mod*10 + b[i] - '0')%a;
    mod = (mod * 10 + exponent.charCodeAt(i) - asciiZero) % base;
  }
  return mod;
}

var lastDigit = function (str1, str2) {


    // 0 ^ 0 = 1
    if (str1.length === 1 && str2.length === 1 && str1 === "0" && str2 === "0") {
        return 1; //0;
    }

    if (str2.length === 1 && str2 === "0") {
        return 1;
    }

    if (str1.length === 1 && str1 === "0") {
        return 0;
    }

    var e = 0; //findModulo(4, str2);
    {
        var mod = 0;
        for (var i in str2) {
            mod = (mod * 10 + exponent.charCodeAt(i) - asciiZero) % 4;
        }
        e = mod;
    }
    if (e == 0) {
        e = 4;
    }

    var res = Math.pow(str1[str1.length - 1].charCodeAt(0) - asciiZero, e);

    // Return last digit of result
    return res % 10;
}

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


/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 */
 let laFuncion = lastDigit;

 function pruebas(str1, str2, resOK) {
    var res = laFuncion(str1, str2);
    console.log(str1 + ", " + str2 + " = " + resOK + " ?= (" + res + ")");
    if (resOK != res) {
        console.log("\tEl valor devuelto es [" + res + "] y debe ser [" + resOK + "]");
    }
    else {
        console.log("\tCorrecto!");
    }
}


// console.log(powerStr("9", "7"))
// console.log(powerStr("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))
// console.log(multiplyStr("9", "7"))
// console.log(multiplyStr("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))

pruebas("4", "1", 4);
pruebas("4", "2", 6);
pruebas("9", "7", 9);
pruebas("10","10000000000", 0);
pruebas("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376", 6);
pruebas("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651", 7);
//pruebas();
/*
const Test = require('@codewars/test-compat');

describe("lastDigit", function(){
  it("should work for some examples", function(){
    Test.assertEquals(lastDigit("4", "1"), 4);
    Test.assertEquals(lastDigit("4", "2"), 6);
    Test.assertEquals(lastDigit("9", "7"), 9);
    Test.assertEquals(lastDigit("10","10000000000"), 0);
    Test.assertEquals(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
    Test.assertEquals(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
  });
  it("should work for x ^ 0", function(){
    var randomString = function(){
      var i = Math.floor(Math.random() * 100) + 1, str="";
      while(i --> 0){
        str = str + "01234567890".charAt(Math.floor(Math.random()*10));
      }
      return str;
    };
    var i, r;
    for(i = 0; i < 100; ++i){
      r = lastDigit(randomString(), "0");
      if(i < 1 || r !== 1){
        Test.assertEquals(r, 1, "x ^ 0 has 1 as last digit");
        if(r !== 1)
          return;
      }
    }
  });
});
*/