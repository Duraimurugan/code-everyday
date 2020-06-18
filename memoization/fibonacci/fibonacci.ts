/**
 * write a function that prints the fibonacci number
 */

function fibonacci(num: number): number {
  if(num <= 2) return 1;
  
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// fibonacci(10);

/**
 * memoized fibonacci solution
 */
function memoizedFibonacci(num: number, mem: any): number {
  mem = mem || {};
  if(num[mem]) return num[mem];
  if(num <= 2) return 1;
  
  return memoizedFibonacci(num - 1, mem) + memoizedFibonacci(num - 2, mem); 
}

// memoizedFibonacci(10, {});