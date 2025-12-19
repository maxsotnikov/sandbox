/*🧾DESCRIPTION
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const str = "indivisibility"

function duplicateCount(text) {
  let dublicatedArr = []
  const arr = text.toLowerCase().split('').sort()
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i + 1] && !dublicatedArr.includes(arr[i]) ? dublicatedArr.push(arr[i]) : arr
  }
  return dublicatedArr.length
}

console.log(duplicateCount(str))

// ✅SOLUTION2️⃣:
// const str = "indivisibility"
//
// function duplicateCount(text){
//   let count = 0
//   let dublicatedArr = []
//   const arr = text.toLowerCase().split('')
//   const sortedArr = arr.sort()
//   for (let i = 0; i < sortedArr.length; i++) {
//     sortedArr[i] === sortedArr[i - 1] ? dublicatedArr.push(sortedArr[i]) : sortedArr
//   }
//   for (let i = 0; i < dublicatedArr.length; i++) {
//     dublicatedArr[i] !== dublicatedArr[i - 1] ? count++ : dublicatedArr
//   }
//   return count
// }
//
// console.log(duplicateCount(str))

