/*🧾DESCRIPTION
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const text = "recede"

function duplicateEncode(word) {
  const arr = word.toLowerCase().split('')
  return arr.map(x => arr.indexOf(x) === arr.lastIndexOf(x) ? '(' : ')').join('')
}

console.log(duplicateEncode(text))
