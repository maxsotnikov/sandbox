/*🧾DESCRIPTION
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
----------------------------------------------------------------------------------------
*/

//✅SOLUTION:
const word = 'GTAT'

function dnaStrand(dna) {
  const newDna = dna.split('').map((l) => l === 'A' ? l = 'T' : l === 'T' ? l = 'A' : l === 'G' ? l = 'C' : l === 'C' ? l = 'G' : l).join('')
  return newDna
}

console.log(dnaStrand(word))