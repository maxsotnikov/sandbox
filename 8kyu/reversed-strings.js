//🧾DESCRIPTION
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//✅SOLUTION
function solution(str) {
  let newValue = "";
  for (i = str.length - 1; i >= 0; i--) {
    newValue += str[i];
  }
  return newValue;
}