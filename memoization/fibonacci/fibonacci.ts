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

// Bottomup

function memoizedFibonacci2(n) {
if(n ===0 || n===1) {
return n;
}
let memo = {};
memo[0] = 1;
memo[1] = 1;
for (i = 2; i<=n; i++) {
	memo[i] = memo[i-1] + memo[i-2];
}
return memo[n];
}

// console.log(memoizedFibonacci2(10));
