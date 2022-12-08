// multiplying-numbers-as-strings.js
//https://gist.github.com/e-mihaylin/0b91328e899db0eeeafedf070ee165ee

const multiply = (a, b) => {
    const stack = [];
    a = a.split``.reverse();
    b = b.split``.reverse();
    
    for (let i = 0, la = a.length; i < la; i++) {
      for (let j = 0, lb = b.length; j < lb; j++) {
        const m = a[i] * b[j];
        const s = stack[i + j];
        stack[i + j] = s ? s + m : m;
      }
    }
  
    for (let i = 0, l = stack.length; i < l; i++) {
      const move = Math.floor(stack[i] / 10);
      stack[i] = stack[i] % 10;
      if (stack[i + 1]) stack[i + 1] += move;
      else if (move > 0) stack[i + 1] = move;
    }
  
    return stack.reverse().join``.replace(/^(0(?!$))+/, '');
  }
  //https://www.codewars.com/kata/multiplying-numbers-as-strings/javascript


console.log(multiply("9", "7"))
console.log(multiply("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))
