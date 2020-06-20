/**
 * Determine the first non-repeating character
 * eg: aabanabc => n
 * eg: jhjhjhjd => d
 * eg: abababab => -
 */

function getFirstNonRepeatingCharacter(str: string) {
  const countOfString = new Map<string, number>();
  const splitString = str.split('');
  for (let char of splitString) {
    countOfString.set(char, (countOfString.get(char) || 0) + 1);
  }

  for(let char of splitString) {
    if (countOfString.get(char) === 1) {
      return char;
    }
  }

  return '-';
}

// getFirstNonRepeatingCharacter('aabanabc');
// getFirstNonRepeatingCharacter('jhjhjhjd');
// getFirstNonRepeatingCharacter('abababab');
