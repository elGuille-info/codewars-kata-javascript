/*
  # Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

FUNDAMENTALS
*/
const mostrarConsole = false;

function findOdd(A) {
    //happy coding!

    // Código de daniel.silva, AVronskyi, DiegoRodriguezB
    //return A.find((item, index) => A.filter(el => el == item).length % 2)
    // Más simple
    //return A.find(item => A.filter(el => el == item).length % 2)

    // Si solo hay un elemento, ese es el buscado.
    if (A.length == 1 ) return A[0];

    let a1 = [];
    let v = [2];

    // Agrupar los elementos con el mismo valor.
    for (let i = 0; i < A.length; i++) {
      let valor = A[i];
      let esta = false;
      for (let j = 0; j < a1.length; j++) {
        v = a1[j];
        if (valor == v[0]) {
          esta = true;
          v[1] += 1;
          a1[j] = v;
          break;
        }
      }
      if (esta == false) {
        // Crear una nueva variable para no usar la misma referencia.
        let v1 = [2];
        v1[0] = valor; //A[i];
        v1[1] = 1;
        a1.push(v1);
      }
    }
    for (let i = 0; i < a1.length; i++) {
      v = a1[i];
      if (mostrarConsole)
        console.log(i + " = valor: " + v[0] + " veces: " + v[1]);
      // Si las veces es impar, devolver este número.
      if (v[1] % 2 != 0) return v[0];
    }

    return 0;

  }


function doTest(arr, resOK) {
    console.log("[" + arr.toString() + "] = " + resOK);

    let res = findOdd(arr);
    if (res == resOK) {
      if (mostrarConsole)
          console.log("\tEl resultado es OK.");
    }
    else {
        console.log("\tEl resultado calculado es " + res + " debería ser " + resOK);
    }
}

doTest([7], 7);
doTest([0], 0);
doTest([1,1,2], 2);
doTest([0,1,0,1,0], 0);
doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);


doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
doTest([10], 10);
doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
doTest([5,4,3,2,1,5,4,3,2,10,10], 1);


// Versión larga (al viejo estilo)
/*
function findOdd(A) {
    //happy coding!

    // Si solo hay un elemento, ese es el buscado.
    if (A.length == 1 ) return A[0];

    let a1 = [];
    let v = [2];

    // Agrupar los elementos con el mismo valor.
    for (let i = 0; i < A.length; i++) {
      let valor = A[i];
      let esta = false;
      for (let j = 0; j < a1.length; j++) {
        v = a1[j];
        if (valor == v[0]) {
          esta = true;
          v[1] += 1;
          a1[j] = v;
          break;
        }
      }
      if (esta == false) {
        // Crear una nueva variable para no usar la misma referencia.
        let v1 = [2];
        v1[0] = valor; //A[i];
        v1[1] = 1;
        a1.push(v1);
      }
    }
    for (let i = 0; i < a1.length; i++) {
      v = a1[i];
      if (mostrarConsole)
        console.log(i + " = valor: " + v[0] + " veces: " + v[1]);
      // Si las veces es impar, devolver este número.
      if (v[1] % 2 != 0) return v[0];
    }

    return 0;
}
*/