//🧾DESCRIPTION
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//✅SOLUTION 1️⃣:
function findSmallestInt(arr) {
    let minElement = Number(arr[0])
    for (let i = 0; i < arr.length; i++) {
        let arrElement = Number(arr[i])
        if (minElement > arrElement) {
            minElement = arrElement
        }
    }
  return minElement;
}


//✅SOLUTION 2️⃣:
function findSmallestInt(args) {
  let min = Number(args[0]);
  for (let i = 0; i < args.length; i++) {
    let argsElement = Number(args[i]);
    min = min < argsElement ? min : argsElement;
  }
  return min;
}