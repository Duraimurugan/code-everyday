/**
 * Product of Array Except Self
 * Input:  [1,2,3,4]
 *Output: [24,12,8,6]
*/

function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;
  let left_array = [];
  left_array[0] = 1;

  for (let i = 1; i < numsLength; i++) {
    left_array[i] = left_array[i - 1] * nums[i - 1];
  }

  let right_array = new Array(numsLength);
  right_array[numsLength - 1] = 1;

  for (let j = numsLength - 1; j > 0; j--) {
    right_array[j - 1] = right_array[j] * nums[j];
  }

  let final_array = [];
  for (let k = 0; k < left_array.length; k++) {
    final_array[k] = left_array[k] * right_array[k];
  }

  return final_array;
};

productExceptSelf([1, 2, 3, 4]);
