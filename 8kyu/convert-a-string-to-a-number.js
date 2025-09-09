/*🧾DESCRIPTION
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
-------------------------------------------------------------------
*/

//✅SOLUTION:
const str = "-7";

const getNum = (str) => {
  return Number(str);
};

console.log(getNum(str));
