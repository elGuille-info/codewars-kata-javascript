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

// class Ball {
//     constructor(ballType) {
//         if (ballType == undefined) {
//             this.ballType = "regular"
//         }
//         this.ballType = ballTYpe
//     }
//     ballTYpe = "regular";
// }

var Ball = function (ballType) {
    // your code goes here
};

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
