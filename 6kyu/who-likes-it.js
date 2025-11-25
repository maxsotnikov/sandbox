/*🧾DESCRIPTION
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
----------------------------------------------------------------------------------------
*/
// ✅SOLUTION1️⃣:
const array = ["Alex", "Jacob", "Mark", "Max"]

function likes(names) {
  const singular = 'likes this'
  const plural = 'like this'

  switch (names.length) {
    case 0:
      return `no one ${singular}`
    case 1:
      return `${names.join()} ${singular}`
    case 2:
      return `${names.join(' and ')} ${plural}`
    case 3:
      return `${names.slice(0, 2).join(', ')} and ${names[2]} ${plural}`
    default:
      return `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others ${plural}`
  }
}

console.log(likes(array))

// ✅SOLUTION2️⃣:
// if (names.length === 0) {
//   return `no one ${singular}`
// } else if (names.length === 1) {
//   return `${names.join()} ${singular}`
// } else if (names.length === 2) {
//   return `${names.join(' and ')} ${plural}`
// } else if (names.length === 3) {
//   return `${names.slice(0, 2).join(', ')} and ${names.slice(2)} ${plural}`
// } else if (names.length >= 4) {
//   return `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others ${plural}`
// }