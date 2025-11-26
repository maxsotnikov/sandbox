/*🧾DESCRIPTION
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const array = [1, 3, 5, 7, 4]

function findOutlier(integers) {
  let odd = integers.filter(i => i % 2 !== 0)
  let even = integers.filter(i => i % 2 === 0)
  return odd.length > even.length ? even[0] : odd[0]
}

console.log(findOutlier(array))

// ✅SOLUTION2️⃣:
// let odd = 0
// let even = 0
// for(i = 0; i < 3; i++){
//   if(integers[i] % 2 !== 0) {
//     odd += 1
//   } else {
//    even += 1
//   }
// }
// for(i = 0; i < integers.length; i++){
//   if(odd > even) {
//     return integers.find(integer => integer % 2 === 0)
//   } else {
//     return integers.find(integer => integer % 2 !== 0)
//   }
// }