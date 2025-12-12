/*🧾DESCRIPTION
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const a = 'camelCasing'

function solution(string) {
  const arr = string.split('')
  let newStr = []
  for (let i = 0; i < arr.length; i++) {
    newStr.push(arr[i] === arr[i].toUpperCase() ? ` ${arr[i]}` : arr[i])
  }
  return newStr.join('')
}

console.log(solution(a))