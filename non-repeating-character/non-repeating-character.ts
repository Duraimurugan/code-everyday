/**
 * Determine the first non-repeating character
 * eg: aabanabc => n
 * eg: jhjhjhjd => d
 * eg: abababab => -
 */

function getFirstNonRepeatingCharacter(str: string): string {
  const countOfString = new Map<string, number>();
  for (let char of str.split('')) {
    countOfString.set(char, (countOfString.get(char) || 0) + 1);
  }

  let splitString = str.split('');
  for (let i = 0; i < splitString.length; i++) {
    if (countOfString.get(splitString[i]) === 1) {
      return splitString[i];
    }
  }
  return '-';
}

// getFirstNonRepeatingCharacter('aabanabc');
// getFirstNonRepeatingCharacter('jhjhjhjd');
// getFirstNonRepeatingCharacter('abababab');
