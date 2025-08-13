//🧾DESCRIPTION
// You get an array of numbers, return the sum of all of the positives ones.
// If there is nothing to sum, the sum is default to 0.

//✅SOLUTION 1️⃣:
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    element > 0 ? sum += element : 0
  }
  return sum
}

//✅SOLUTION 2️⃣:
// let array = [-1,-2,-3,-4,-5];
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i]
//     if (element > 0) {
//       sum += element;
//     }
//   }
//   return sum
// }