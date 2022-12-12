/* Del kata 32-

//5- jegan145
// https://www.codewars.com/kata/reviews/5583630cbe42d10d2c000116/groups/586c57b74ad5dea87a0014fd
function factorial(n){
  let result = '1'
  while (n > 1) 
    result = multiply(result, n--)
  return result
}

function multiply(str, x) {  
  const resultDigits = []
  let carry = 0
  
  str.split('').reverse().forEach(char => {
    let intermediate = Number(char) * x + carry
    resultDigits.unshift(intermediate % 10)
    carry = Math.floor(intermediate / 10)    
  })
  if (carry > 0) 
    resultDigits.unshift(carry)
  
  return resultDigits.join('')
}

*/

/**
 * Multiplicar dos números enteros grandes.
 * 
 * @param {*} str El número a multiplicar (debe ser una cadena).
 * @param {*} x El número a multiplicar (puede ser entero o cadena)
 * @returns El resultado.
 */
function multiply(str, x) {
    const resultDigits = []
    let carry = 0

    str.split('').reverse().forEach(char => {
        let intermediate = Number(char) * x + carry
        resultDigits.unshift(intermediate % 10)
        carry = Math.floor(intermediate / 10)
    })
    if (carry > 0)
        resultDigits.unshift(carry)

    return resultDigits.join('')
}
