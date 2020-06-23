/**
 * determine if the sum exists
 */

function checkIfSumExists(a1: Array<number>, a2: Array<number>, v: number): boolean {
  let complements = new Set<number>();
  for (let i = 0; i < a1.length; i++) {
    complements.add(v - a1[i]);
  }

  for (let i = 0; i < a2.length; i++) {
    if (complements.has(a2[i])) return true;
  }

  return false;
}

checkIfSumExists([1, 300, 700], [-20, -30, -500], 200); // true
checkIfSumExists([1, 300, 700], [-20, -30, -500], 100); // false
