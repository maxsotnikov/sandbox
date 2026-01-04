/*🧾DESCRIPTION
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const word = "the-stealth-warrior"

function toCamelCase(str) {
  const arr = str.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '_' || arr[i] === '-') {
      arr.splice(i, 1)
      if (arr[i]) arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('')
}

console.log(toCamelCase(word))

// ✅SOLUTION2️⃣:
// function toCamelCase(str) {
//   const arr = str.split('')
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('_') || arr[i].includes('-')) {
//       arr[i] = ''
//       arr[i + 1] = arr[i + 1].toUpperCase()
//     }
//   }
//   return arr.join('')
// }