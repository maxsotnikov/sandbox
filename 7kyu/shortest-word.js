/*🧾DESCRIPTION
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
----------------------------------------------------------------------------------------
*/

//✅SOLUTION:
const words = 'bitcoin take over the world maybe who knows perhaps'

function findShort(s){
  const newStr = s.split(' ')
  let shortestWord = Infinity
  for (let i = 0; i < newStr.length; i++) {
    if(newStr[i].length < shortestWord){
      shortestWord = newStr[i].length
    }
  }
  return shortestWord
}

console.log(findShort(words))