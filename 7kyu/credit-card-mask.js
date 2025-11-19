/*🧾DESCRIPTION
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
----------------------------------------------------------------------------------------
*/

//✅SOLUTION:
const password = 'Skippy'
function maskify(cc) {
  const arr = cc.split('')
  const end = arr.slice(-4)
  const start = arr.slice(0, -4)
  for (let i = 0; i < start.length; i++) {
    start[i] = '#'
  }
  let result = start.join('') + end.join('')
  return result
}

console.log(maskify(password))
