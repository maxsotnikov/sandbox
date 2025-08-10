//🧾DESCRIPTION
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

//✅SOLUTION
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    const element1 = Number(arr1[i]);
    sum1 += element1;
  }
  let sum2 = 0;
  for (let i = 0; i < arr2.length; i++) {
    const element2 = Number(arr2[i]);
    sum2 += element2;
  }
  return sum1 + sum2;
}

