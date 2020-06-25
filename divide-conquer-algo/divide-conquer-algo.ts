function sumOfArray(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }

  return sum;
}

function sumOfArrayDC(arr) {
  if (!arr.length) return 0;
  return arr[0] + sumOfArrayDC(arr.slice(1));
}

console.log(sumOfArray([1,2,3,4,5])); // 15
console.log(sumOfArrayDC([1,2,3,4,5])); // 15