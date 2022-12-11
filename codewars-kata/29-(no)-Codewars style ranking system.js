/*
    # Codewars style ranking system (4 kyu)

Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

Business Rules:
A user starts at rank -8 and can progress all the way to 8.
There is no 0 (zero) rank. The next rank after -1 is 1.
Users will complete activities. These activities also have ranks.
Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). 
The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
A user cannot progress beyond rank 8.
The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.

The progress is scored like so:

Completing an activity that is ranked the same as that of the user's will be worth 3 points
Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
Completing an activity ranked higher than the current user's rank will accelerate the rank progression. 
    The greater the difference between rankings the more the progression will be increased. 
    The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.

Logic Examples:
If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)

Code Usage Examples:
var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
Note: Codewars no longer uses this algorithm for its own ranking system. 
It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at.

ALGORITHMS
*/

/*
  Soluciones


//1- adriaanbaelus, kieutridang, user3469798, Gowthami0301, ulyxgwdimo, Karimof_urullo, codewars11111
// https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/5250c16e1777d16198000409
var User = (function () {
  ////////// Hidden //////////
  var hierarchy = [ -8,-7,-6,-5,-4,-3,-2,-1, 1, 2, 3, 4, 5, 6, 7, 8 ];
  var progress = { min: 0, max: 100 };
  var rank = { min: hierarchy[0], max: hierarchy[hierarchy.length - 1] };
  
  progress.acceleration = function (userRank, activityRank) {
    var d = rank.difference(userRank, activityRank);
    if (d === -1)       return 1;
    else if (d === 0)   return 3;
    else if (d > 0)     return 10 * d * d;
    else                return 0;
  };
  progress.update = function (user, acceleration) {
    user.progress += acceleration;
    user.progress = (user.rank === rank.max) ? progress.min : user.progress % progress.max;
  };
  rank.difference = function (userRank, activityRank) {
    return hierarchy.indexOf(activityRank) - hierarchy.indexOf(userRank);
  };
  rank.update = function (user, acceleration) {
    var d = ~~((user.progress + acceleration) / progress.max);
    var i = hierarchy.indexOf(user.rank) + d;
    if (i >= hierarchy.length) i = hierarchy.length -1;
    user.rank = hierarchy[i];
  };
  rank.valid = function (r) {
    return hierarchy.indexOf(r) > -1;
  };
  
  ////////// Exposed //////////
  var User = function () {
    this.progress = progress.min;
    this.rank = rank.min;
  };
  User.prototype.incProgress = function (activityRank) {
    if (!rank.valid(activityRank)) throw new Error("Invalid activity rank given");
    var accel = progress.acceleration(this.rank, activityRank);
    rank.update(this, accel);
    progress.update(this, accel);
  };
  return User;
}).call();


//2- systimotic, user6538049, user3278724
// https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/5ab39e76ca1f6b923d00006b
class User {
  constructor() {
    this.totalProgress = 0;
  }
  
  get progress() {
    return this.rank < 8 ? this.totalProgress % 100 : 0;
  }
  
  get rank() {
    let rank = Math.floor(this.totalProgress / 100) - 8;
    return rank >= 0 ? rank + 1 : rank;
  }
  
  incProgress(rank) {
    if (rank === 0 || rank < -8 || rank > 8) {
      throw new Error('Rank out of bounds');
    }
    
    if (rank > 0  && this.rank < 0) {
      rank--;
    }

    const diff = rank - this.rank;
    this.totalProgress += diff > 0 ? (10 * diff * diff) : diff < 0 ? 1 : 3;
  }
}

*/

// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
        this.PROGESS_MAX = 100;
        this.RANK8 = 8;
    }

    reset() {
        this.rank = -8;
        this.progress = 0;
    }

    // Falla en las pruebas del kata
    incProgress(rank) {
        // The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.
        if (rank == 0 || rank > this.RANK8 || rank < -this.RANK8) throw new RangeError("rank input out of range");
        // A user starts at rank -8 and can progress all the way to 8.
        if (this.rank == this.RANK8) return;

        var diff = (rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(rank) : rank - this.rank;
        if (rank > 0 && this.rank < 0) 
            diff--;
        if (rank < 0 && this.rank > 0) 
            diff = -diff;
        if (diff > 0) {
            this.progress += (rank == 1 && this.rank == -1) ? 10 : (10 * diff * diff);
        } else {
            this.progress += diff == 0 ? 3 : 1;
        }

        if (this.progress > this.PROGESS_MAX && this.rank < this.PROGESS_MAX) {
            this.rank += Math.floor(this.progress / this.PROGESS_MAX);
            if (this.rank == 0) this.rank++;
            this.progress %= this.PROGESS_MAX;
        }
        if (this.rank == this.RANK8) this.progress = 0;

        return diff;

        // let diff = 0;
        // // Completing an activity that is ranked the same as that of the user's will be worth 3 points
        // if (rank == this.rank) {
        //     this.progress += 3;
        //     diff = 3;
        // }
        // // Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
        // else if (rank == this.rank - 1) {
        //     this.progress += 1;
        //     diff = 1;
        // }
        // // Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
        // else if (rank <= this.rank - 2) {
        //     // ignorarlo
        //     diff = 0;
        // }
        // /*
        //   Completing an activity ranked higher than the current user's rank will accelerate the rank progression. 
        //     The greater the difference between rankings the more the progression will be increased. 
        //     The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.
        // */
        // else if (rank > this.rank) {
        //     let d = 0;
        //     if ((rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0)) {
        //         d = Math.abs(this.rank) + Math.abs(rank);
        //     }
        //     else {
        //         d = rank - this.rank;
        //     }
        //     if (rank > 0 && this.rank < 0) {
        //         d--;
        //     }
        //     if (rank < 0 && this.rank > 0) {
        //         d = -d;
        //     }
        //     diff = 10 * d * d;
        //     this.progress += 10 * d * d;
        // }

        // // A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
        // if (this.progress > this.PROGESS_MAX && this.rank < this.RANK8) {
        //     this.rank += Math.floor(this.progress / this.PROGESS_MAX);
        //     if (this.rank == 0) this.rank++;
        //     this.progress %= this.PROGESS_MAX;
        // }
        // if (this.rank == this.RANK8) this.progress = 0;

        // return diff;
    }
}

// Pruebas 

function userRank() {

    var user = new User()
    //user.rank // => -8
    console.log("  rank => " + user.rank + " => -8");
    //user.progress // => 0
    console.log("  progress => " + user.progress + " => 0"); // 40
    user.incProgress(-7)
    //user.progress // => 10
    console.log("  progress => " + user.progress + " => 10");
    console.log("  rank => " + user.rank + " => -8");
    user.incProgress(-5) // will add 90 progress
    console.log("  progress => " + user.progress + " => 100");
    console.log("  rank => " + user.rank + " => -8");
    // user.progress = 0 // progress is now zero
    // user.rank = -7 // rank was upgraded to -7
    
    // var user = new User()
    // console.log(user.rank + " rank => -8"); // => -8
    // console.log(user.progress + " progress => 0"); // => 0
    
    // //console.log("user.reset()");
    // user.reset();
    // console.log("user.incProgress(-1)")
    // user.incProgress(-1);
    // console.log("  progress => " + user.progress + " => 90");
    // console.log("  rank => " + user.rank + " => -4");

    // // //console.log("user.reset()");
    // // user.reset();
    // // console.log("user.incProgress(1)")
    // // user.incProgress(1);
    // // console.log("  progress => " + user.progress + " => 40"); // 40
    // // console.log("  rank => " + user.rank + " => -2"); // -2

    // // user.reset();
    // // console.log("user.incProgress(-8)");
    // // user.incProgress(-8);
    // // //console.log(user.progress + " progress => 3");
    // // console.log("  progress => " + user.progress + " => 3");
    // // console.log("  rank => " + user.rank + " => -8");

    // // user.reset();
    // console.log("user.incProgress(-7)");
    // user.incProgress(-7)
    // console.log("  progress => " + user.progress + " => 10");
    // console.log("  rank => " + user.rank + " => -8");

    // console.log("user.incProgress(-5)");
    // user.incProgress(-5) // will add 90 progress
    // //console.log(user.progress + " progress => 100"); //3
    // console.log("  progress => " + user.progress + " => 100");
    // console.log("  rank => " + user.rank + " => -8");
    // // console.log("rank => " + user.rank); // -7
    // // console.log("user.progress = 0");
    // // user.progress = 0; // progress is now zero
    // // console.log(user.progress + " progress => 0");
    // // console.log("user.rank = -7");
    // // user.rank = -7; // rank was upgraded to -7
    // // console.log(user.rank + " rank => -7");
}

userRank();


/*
    De https://github.com/imtiaz-rahi/codewars-ranking-system

function User() {
  this.rank = -8;
  this.progress = 0;
  this.HUNDRED = 100;
  this.HIGHEST = 8;
}

User.prototype.incProgress = function(rank) {
  if (rank == 0 || rank > this.HIGHEST || rank < -this.HIGHEST) throw new RangeError("rank input out of range");
  if (this.rank == this.HIGHEST) return;

  var diff = (rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(rank) : rank - this.rank;
  if (rank > 0 && this.rank < 0) diff--;
  if (rank < 0 && this.rank > 0) diff = -diff;
  if (diff > 0) {
    this.progress += (rank == 1 && this.rank == -1) ? 10 : (10 * diff * diff);
  } else {
    this.progress += diff == 0 ? 3 : 1;
  }

  if (this.progress > this.HUNDRED && this.rank < this.HIGHEST) {
    this.rank += Math.floor(this.progress / this.HUNDRED);
    if (this.rank == 0) this.rank++;
    this.progress %= this.HUNDRED;
  }
  if (this.rank == this.HIGHEST) this.progress = 0;

  console.log("current rank = " + this.rank + "; progress = " + this.progress);
  return diff;
};    

*/

/*
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
*/