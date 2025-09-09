/*🧾DESCRIPTION
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
-------------------------------------------------------------------
*/

//✅SOLUTION:
const arr = ["a", 1, 2];

function separateTypes(input) {
  const obj = {
    number: input.filter((index) => typeof index === "number"),
    string: input.filter((index) => typeof index === "string"),
    boolean: input.filter((index) => typeof index === "boolean"),
  };
  for (const key in obj) {
    if (obj[key].length === 0) delete obj[key];
  }
  return obj;
}

console.log(separateTypes(arr));
