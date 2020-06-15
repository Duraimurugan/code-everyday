/**
 * Day 0
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

for (var number = 1; number <= 100; number++) {
  const isFizz: boolean = number % 3 === 0;
  const isBuzz: boolean = number % 5 === 0;
  const isFizzBuzz: boolean = (number % 3 === 0) && (number % 5 === 0);
  let result: string;
  if (isFizzBuzz) {
    result = 'FizzBuzz';
  } else if (isFizz) {
    result = 'Fizz';
  } else if (isBuzz) {
    result = 'Buzz';
  } else {
    result = number.toString();
  }
  console.log(result);
}