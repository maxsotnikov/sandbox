/*🧾DESCRIPTION
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const array = [false,1,0,1,2,0,1,3,"a"]

function moveZeros(arr) {
  const arrNoZero = arr.filter(item => item !== 0)
  const arrZero = arr.filter(item => item === 0)
  const newArr = [...arrNoZero, ...arrZero]
  return newArr
}

console.log(moveZeros(array))