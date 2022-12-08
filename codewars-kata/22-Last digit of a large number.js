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

/*
    Soluciones

*/

//11- Olegeant
// https://www.codewars.com/kata/reviews/5519da926ddf72874200004e/groups/61000983f193a00001349b5a
//
// last digit of power result is shortly periodical (with 4 step only!)
// therefore, we will need just to take 1 last digit of base and 2 last ditits of power.

const lastDigit_11 = (str1, str2) => +!+str2 || str1.slice(-1) ** (str2.slice(-2) % 4 || 4) % 10;


var lastDigit0 = function(str1, str2){  
    return 0; // fix me
}

// Adaptada de: https://gist.github.com/railsstudent/ede7a5c3f69949dab98cdd998285d652

// La presentada
var lastDigit = function (str1, str2) {

    if (str2 == "0") {
         return 1;
    }

    var mod = 0;
    for (var i in str2) {
        mod = (mod * 10 + Number(str2[i])) % 4;
    }
    if (mod == 0) {
        mod = 4;
    }

    var res = Math.pow(Number(str1[str1.length - 1]), mod);

    return res % 10;
}


/**
 * Indicar aquí la función a usar dentro de
 * @see pruebas
 */
 let laFuncion = lastDigit_11;

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

pruebas("4", "0", 1);
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