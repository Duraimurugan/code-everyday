/**
 * Hackerrank
 * Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.
 * Input: cde, abc
 * Output: 4
 */

 /**
  * Explanation
  * We delete the following characters from our two strings to turn them into anagrams of each other:
  * 
  * Remove d and e from cde to get c.
  * Remove a and b from abc to get c.
  * 
  * We must delete  characters to make both strings anagrams, so we print  on a new line.
  */

function makeAnagram(a, b) {
    const countOfChars1 = new Map();
    const countOfChars2 = new Map();
    for (const char of a.split('')) {
        countOfChars1.set(char, (countOfChars1.get(char) || 0) + 1);
    }
    for (const char of b.split('')) {
        if(countOfChars1.get(char) > 0) countOfChars1.set(char, countOfChars1.get(char) - 1);
        else countOfChars2.set(char, (countOfChars2.get(char) || 0) + 1); 
    }

    return Array.from(countOfChars1.values()).reduce((acc, char) => acc + char, 0) + Array.from(countOfChars2.values()).reduce((acc, char) => acc + char, 0);
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
