/**
 * Product of Array Except Self
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 */

 /**
  * with division
  */
// function productExceptSelf(nums) {
//     const product = nums.reduce((acc, val) => acc * val, 1);
//     return nums.map((item) => product/item);
// };

/**
 * without division
 */

function productExceptSelf(nums) {
    let left_array = [];
    let final_array = [];
    let right_array = new Array(nums.length);
    left_array[0] = 1;
    right_array[nums.length - 1] = 1; 
    for (let i=1; i<nums.length; i++) {
        left_array[i] = left_array[i-1] * nums[i-1];
    }

    for(let j=nums.length - 2; j>=0; j--) {
        right_array[j] = right_array[j+1] * nums[j+1];
    }

    for(let k=0; k<nums.length; k++) {
        final_array[k] = left_array[k] * right_array[k];
    }

    return final_array;
}