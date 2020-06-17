/**
 * write a function that checks the input string is a palindrome or not
 */

function isPalindrome(str: string): void {
  const reversed = str.split('').reverse().join('');
  console.log(reversed === str);
}

// isPalindrome('toot'); // true
// isPalindrome('toto'); // false

/**
 * Determine if the permutation of a string is a Palindrome or not
 */

function isPermutationAPalindrome(str: string): boolean {
  const uniqueValues = new Set<string>();
  for (const char of str.split('')) {
    if (uniqueValues.has(char)) uniqueValues.delete(char);
    else uniqueValues.add(char);
  }
  return uniqueValues.size <= 1;
}

// isPermutationAPalindrome('toot'); // true
// isPermutationAPalindrome('toto'); // true
// isPermutationAPalindrome('totot'); // true
// isPermutationAPalindrome('totots'); // false