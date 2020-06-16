/**
 * write a function that checks the input string is a palindrome or not
 */

function isPalindrome(str: string): void {
  const reversed = str.split('').reverse().join('');
  console.log(reversed === str);
}

// isPalindrome('toot'); // true
// isPalindrome('toto'); // false


function isPermutationAPalindrome(str2: string): void {

}

// isPermutationAPalindrome('toot'); // true
// isPermutationAPalindrome('toto'); // true
// isPermutationAPalindrome('totot'); // true
// isPermutationAPalindrome('totots'); // false