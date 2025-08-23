//🧾DESCRIPTION
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//✅SOLUTION:
const getCount = (str) => {
  let newStr = 0;
  const vovels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
      newStr++;
    }
  }
  return newStr;
};
