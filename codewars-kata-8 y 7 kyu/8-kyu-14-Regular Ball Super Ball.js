/*
    # Regular Ball Super Ball

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

FUNDAMENTALS
*/

/*
    Soluciones
*/

//1- 
// https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/53f64a1f5baf5fc74d015630
var Ball_1 = function (ballType) {
    this.ballType = ballType || 'regular';
};

//2- 
// https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/55c0a702b152f47f840000bd
class Ball_2 {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

//3- 
// https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/55c7c6ece6f0bb44120000b3
var Ball_3 = function (ballType = "regular") {
    this.ballType = ballType;
};


// La presentada
class Ball {
    constructor(ballType) {
        if (ballType == undefined) {
            this.ballType = "regular"
        } else {
            this.ballType = ballType
        }
    }
}

class Ball0 {
    constructor(ballType) {
        if (ballType == undefined) {
            this.ballType = "regular"
        } else {
            this.ballType = ballType
        }
    }
    //ballTYpe = "regular";
}

// var Ball = function (ballType) {
//     // your code goes here
// };

// class Ball {
//     constructor(ballType = 'regular') {
//         this.ballType = ballType
//     }
// }

// Pruebas
console.log("new Ball().ballType -> " + "regular")
console.log(new Ball().ballType);
console.log("new Ball(\"super\").ballType -> " + "super")
console.log(new Ball("super").ballType);


/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.assertEquals(new Ball().ballType, "regular");
Test.assertEquals(new Ball("super").ballType, "super");
  });
});
*/
