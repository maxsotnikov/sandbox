/*🧾DESCRIPTION
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/

// ✅SOLUTION1️⃣:

const a = 'empty ending'
const b = ''

function solution(str, ending){
  if(ending.length === 0) return true
  return str.slice(-ending.length) === ending;
}

console.log(solution(a, b));