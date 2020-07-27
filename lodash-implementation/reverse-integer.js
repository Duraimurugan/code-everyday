/**
 * to reverse an integer
 * egghead.io problem
 */

 function reverseTheInteger(number) {
    const reversed = number.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(number);
 }

 console.log(reverseTheInteger(-1));
 console.log(reverseTheInteger(92834));
 console.log(reverseTheInteger(-92834));