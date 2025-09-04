/*🧾DESCRIPTION
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
----------------------------------------------------------------------------------------
*/

//✅SOLUTION:
const str = "abcd";

const accum = (string) => {
  const arr = string.toUpperCase().split("");
  let newArr = arr.map((letter, i) => {
    let element = letter;
    for (let j = 0; j < i; j++) {
      element += letter.toLowerCase();
    }
    return element;
  });
  return newArr.join("-");
};

console.log(accum(str));