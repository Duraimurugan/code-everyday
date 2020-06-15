/**
 * Write a program to check if the two strings provided as inputs are anagrams
 * Anagram a word, phrase, or name formed by rearranging the letters of another
 * Examples: 
 *      cinema and iceman
 *      silent and listen
 *      earth and heart
 */

function areAnagram(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split('')) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  console.log(charCount);
  return Array.from(charCount.values()).every(val => val === 0);
}

// console.log(areAnagram('cinema', 'iceman')); // true
// console.log(areAnagram('cinema', 'iceMan')); // false