/*🧾DESCRIPTION
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"
----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const str = "Hey fellow warriors"

function spinWords(string) {
  let arr = string.split(' ')
  let newArr = []
  let words = ''
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('')
    if (word.length >= 5) {
      word.reverse()
    }
    newArr.push(word.join(''))
    words = newArr.join(' ')
  }
  return words
}

console.log(spinWords(str))