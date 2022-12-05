/*
  # Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

FUNDAMENTALS
*/

/*
    // Otras soluciones

    //1- kyle.johnson, NedDevine, msbmiao, Nikinator, DmitryArtyomov, nodesolomon, dubdjon, NunoOliveira, stengy, Bugbeak (+ 365)
    function friend(friends){
        return friends.filter(n => n.length === 4)
    }

    //2- acraileanu, yotammanor, Trinityuan, LeoMarius, createdbyjurand, Naillik13, tom-ts, ArdiVeftvohl, mrsamse (+ 33)
    const friend = friends => friends.filter(friend => friend.length == 4);


*/
function friend(friends){
    //your code here

    return friends.filter((item) => item.length == 4);
}

function deepEqual(friends, resOK) {
    console.log(friends + " = " + resOK);

    let res = friend(friends);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Para probar
deepEqual(["Ryan", "Kieran", "Mark"], ["Ryan", "Mark"]);
deepEqual(["Ryan", "Jimmy", "123", "4", "Cool Man"], ["Ryan"]);
deepEqual(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"], ["Jimm", "Cari", "aret"]);
deepEqual(["Love", "Your", "Face", "1"], ["Love", "Your", "Face"]);

/*
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
      assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
      assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
      assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
    })
  })
*/
