/*🧾DESCRIPTION
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
----------------------------------------------------------------------------------------
*/

//✅SOLUTION 1️⃣:
const isogram = "Dermatoglyphics";

const isIsogram = (str) => {
  const lowerStr = str.toLowerCase();
  const arr = lowerStr.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      return false;
    }
    newArr.push(arr[i]);
  }
  return true;
};

console.log(isIsogram(isogram));

//✅SOLUTION 2️⃣:
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
