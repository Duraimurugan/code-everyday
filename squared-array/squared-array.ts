/**
 * write a program to return the squared elements of an sorted array
 */

function squaredArray(arr: Array<number>): Array<number> {
  const arrLength = arr.length;
  let output_array = new Array(arrLength).fill(0);
  let left = 0;
  let right = arrLength - 1;
  for(let i = arrLength - 1 ; i >= 0; i--) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      output_array[i] = arr[left] * arr[left];
      left++;
    } else {
      output_array[i] = arr[right] * arr[right];
      right--;
    }
  }
  return output_array;
}

// [-4, -2, 1, 3, 6];
// output: [1, 4, 9 , 16, 36]
squaredArray([-4, -1, 2, 3, 6]);