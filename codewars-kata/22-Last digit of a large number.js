/*
    # Last digit of a large number (5 kyu)

Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

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

var lastDigit = function(str1, str2){  
    return 0; // fix me
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