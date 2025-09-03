/*🧾DESCRIPTION
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
----------------------------------------------------------------------------------------
*/

//✅SOLUTION:
const str = "middle";

const getMiddle = (string) => {
  string = [...string];
  const middle = Math.floor(string.length / 2);
  if (string.length % 2 !== 0) {
    return String(string[middle]);
  }
  return String(string[middle - 1] + string[middle]);
};

console.log(getMiddle(str));
