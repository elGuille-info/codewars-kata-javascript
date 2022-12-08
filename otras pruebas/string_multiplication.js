/*
Las explicaciones:
Multiplying numbers when they're strings
https://dev.to/mellen/multiplying-numbers-when-theyre-strings-16nk

El código:
Function that will multiply two string representations of numbers (strings that match /^(-?)(\d+)(([.])(\d+))?$/)
string_multiplication.js

https://gist.github.com/Mellen/e43508d0b8a27b9b0e1dd875cf8737ee

*/

function multiply(a, b)
{
  let am = a.match(/^(-?)(\d+)(([.])(\d+))?$/)
  if(am === null)
  {
    throw `Format Error: ${a} is not a valid number`
  }
    
  let bm = b.match(/^(-?)(\d+)(([.])(\d+))?$/)
  if(bm === null)
  {
    throw `Format Error: ${b} is not a valid number`
  }
    
  let aneg = a[0] === '-';
  let bneg = b[0] === '-';
  
  let negative = (aneg ^ bneg) === 1;
    
  let adecCount = 0;
  let anum = am[2];

  if(am[5])
  {
    adecCount = am[5].length
    anum += am[5];
  }

  let bdecCount = 0;
  let bnum = bm[2];

  if(bm[5])
  {
    bdecCount = bm[5].length
    bnum += bm[5];
  }

  let finalDecCount = adecCount + bdecCount;
    
  let partresults = [];

  let adigits = anum.split('').reverse().map(s => parseInt(s, 10));
  let bdigits = bnum.split('').reverse().map(s => parseInt(s, 10));

  for(let ai = 0; ai < adigits.length; ai++)
  {
    let part = (Array(ai)).fill(0);
    let carry = 0
    let da = adigits[ai];
    for(let db of bdigits)
    {
      let mul = (db*da) + carry;
      carry = Math.floor(mul/10);
      mul = mul%10;
      part.unshift(mul);
    }
    if(carry > 0)
    {
      part.unshift(carry);
    }
    partresults.push(part);
  }
  let resultDigits = [];
    
  if(partresults.length === 1)
  {
    resultDigits = partresults[0];
  }
  else
  {
    resultDigits = partresults.reduce((agg, arr) => 
    {
      while(agg.length < arr.length)
      {
        agg.unshift(0);
      }
      let carry = 0;
      for(let arri = arr.length-1; arri >= 0; arri--)
      {
        let agd = agg[arri];
        let ard = arr[arri];
        let value = agd + ard + carry;
        if(value > 9)
        {
          carry = Math.floor(value/10);
          value = value % 10;
        }
        else
        {
          carry = 0;
        }
        agg[arri] = value;
      }

      if(carry > 0)
      {
        agg.unshift(carry);
      }

      return agg;
    });
  }
        
  if(finalDecCount > 0)
  {
    resultDigits.splice(resultDigits.length - finalDecCount, 0, '.');
  }
    
  while(resultDigits[0] === 0 && resultDigits[1] !== '.')
  {
    resultDigits = resultDigits.slice(1);
  }
  
  if(negative)
  {
    resultDigits.unshift('-');
  }

  return resultDigits.join('');
}