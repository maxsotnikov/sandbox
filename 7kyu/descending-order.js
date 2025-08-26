/*🧾DESCRIPTION
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
-------------------------------------------------------------------
*/

//✅SOLUTION 1️⃣:
const arr = 520952;

const descendingOrder = (n) => {
  if (n >= 0) {
    const str = String(n);
    const newArr = str.split("");
    const sortArr = newArr.sort((a, b) => b - a);
    const sortedStr = sortArr.join("");
    const sortedN = Number(sortedStr);
    return sortedN;
  }
};

console.log(descendingOrder(arr));
//-----------------------------------------------------------------


//✅SOLUTION 2️⃣:
//   const descendingOrder = (n) => Number(String(n).split('').sort((a,b) => b-a).join(''));
