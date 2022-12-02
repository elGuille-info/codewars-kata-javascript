/*
You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array,
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array,
the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
function findEvenIndex(arr)
{
  //Code goes here!

  // Crear subarrays con los elementos de cada grupo y sumar los elementos.
  const cuantos = arr.length;
  const todos = [cuantos];

  if (cuantos == 1) return 0;

  let todos0 = 0;

  for (let index = 0; index < cuantos; index++) {
    let total = 0;
    let total2 = 0;
    for (let j = 0; j < index; j++) {
      total += arr[j];
    }
    for (let j = index; j < cuantos; j++) {
      total2 += arr[j];
    }

    let nums = [2];
    nums[0] = total;
    nums[1] = total2;
    todos[index] = nums;

    todos0 += (total + total2)
  }
  // Si todos los valores suman cero, devolver cero.
  if (todos0 == 0 ) return 0;

  // Para probar y mostrar los valores.
  console.log(arr);
  for (const iterator of todos) {
    //console.log(iterator);
    console.log(iterator[0] + " / " + iterator[1]);
  }

  // Si todos son iguales, devolver 0

  let iguales = 0;
  let menor = -1;
  // Buscar la posición que tenga todos[0] = todos[1] y todos[1] = todos[0]
  for (let i = 0; i < cuantos; i++) {
    for (let j = i + 1; j < cuantos; j++) {
      if (todos[i][0] == todos[j][1] && todos[i][1] == todos[j][0]) {
        if (i == j - 1) {
          iguales++;
          menor = i;
          break;
        }
      }
      // Esto funciona en este caso: [10,-80,10,10,15,35,20]
      // Es decir, cuando la suma anterior al último número es cero.
      else if (todos[i][0] == todos[j][0] && todos[i][1] == todos[j][1]) {
        if (menor == -1 && j == cuantos - 1) {
          menor = j;
          break;
        }
      }

    }
  }

  if (iguales == cuantos) {
    return 0;
  }

  return menor;
}

function pruebas(arr, res) {
    var index = findEvenIndex(arr);
    console.log("[" + arr.toString() + "] = " + res + " ?= (" + index + ")");
    if (res != index) {
      console.log("\tEl valor devuelto es " + index + " y debe ser " + res);
    }
}

//pruebas([10,-80,10,10,15,35,20], 6);
pruebas ([0,0,0,0,0], 0);
//pruebas([-1086,6717,-7114,-2318,1260,338,5654,5436,8309,7432,-35,-9036,4482,-4368,6400,9507,4156,-8254,-5228,900,4527,2571,579,-4240,-5867,9621,9414,-2139,-7346,-8227,5732,1594,-8122,2275,-3584,-7218,-6316,5825,-3246,-4306,8887,4481,7203,-6716,-9166,-752,-9365,-9961,-5238,6057,1353,4233,-3232,-7636,-1999,-5653,4325,-7752,-6451,-5026,-5753,3468,-2999,-8692,1662,2327,948,1734,6856,7246,7401,4603,6053,-9438,-8635,-12,-3666,1118,9824,-9068,7499,2890,3811,-4159,5428,-3228,-7955,-3939,-684,7103,-7794,3654,-1128,9041,8760,4240,-2579,6744,-4407,-5400,1397,-8805,-1556,-781,4067,3228,3042,5402,6850,-3362,-9483,2982,-7400,5877,8936,-1718,-9161,5601,2908,3870,-2906,-2992,-9019,-3364,1620,-4524,8869,-3888,-7930,-554,-4065,2914,-4199,3481,-7766,7222,8508,-6965,-4961,9112,8524,-5137,8998,-8230,-7633,-13,-3869,9705,-219,-3364,569,4549,-9147,-2116,6958,852,9467,-3427,-2142,892,7649,-3205,-3704,-7603,788,345,-26,6332,-7418,-5325,-8730,3331,9918,-1305,4430,-1627,-2804,4481,-6327,2602,-7784,7588,-7138,-9737,-289,85,-3401,608,-5671,6279,6645,-4843,5535,-7464,9164,-903,8884,649,5927,-1081,-6353,564,-5206,3895,8702,-2980,-6492,-510,-7315,852,8920,-6584,7072,2776,2399,3700,2383,-4656,582,-3981,-7015,6700,-2857,9826,9406,-7307,6194,3155,4115,-7697,3166,1659,-3276,-1548,5184,4142,-6273,-2615,-9411,3205,9259,-536,3781,7526,-8542,-1012,4696,-98,2406,2789,5536,-3345,-2718,6432,402,4870,9074,1083,5940,8332,7937,20,9627,1707,6783,7435,1433,-3781,-6481,7356,-903,-6883,520,-916,5563,3839,-8267,-5225,5567,-7653,170,-2680,4730,3149,2876,-7089,3830,7162,-3408,-7513,990,-9858,-1627,2624,5066,2669,-5286,-7800,4377,6202,8888,-8255,1720,-8404,-9526,-6653,-7665,-4535,2395,-1895,1850,-9579,-2329,267,9975,-6340,1601,-576,8098,262,-6305,-6653,-242,-7051,-6658,2864,6731,9064,6150,-1986,-3649,6685,3640,9388,-1923,9685,-1363,8082,9521,-2075,3890,-1945,1826,-4312,3206,4572,922,7832,5487,-2876,-6512], -1);

//pruebas([8], 0);

// pruebas([1,2,3,4,3,2,1], 3);
// pruebas([1,100,50,-51,1,1],1);
// pruebas([1,2,3,4,5,6],-1);
// pruebas([20,10,30,10,10,15,35],3);

/*
const Test = require('@codewars/test-compat');

describe("FindEvenIndex", function() {
  it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});
*/