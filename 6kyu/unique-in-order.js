/*🧾DESCRIPTION
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
----------------------------------------------------------------------------------------
*/

// ✅SOLUTION1️⃣:
const example = [1, 2, 2, 3, 3]

function uniqueInOrder(iterable) {
  const result = []
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) result.push(iterable[i])
    }
  } else {
    const newExp = iterable.split('')
    for (let i = 0; i < newExp.length; i++) {
      if (newExp[i] !== newExp[i + 1]) result.push(newExp[i])
    }
  }
  return result
}

console.log(uniqueInOrder(example));