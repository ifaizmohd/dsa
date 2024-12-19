/**
 * @description Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the
 * elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the
 * following things:
 *
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 *
 * Return k.
 * nums = [0,1,2,2,3,0,4,2], val = 2
 */
/**
 * when you find a valid number (i.e., a number that is not equal to val) and want to place it in the "valid" portion of the array.
 * k should be updated every time you find a valid number and place it correctly in the array.
 * Try to focus on when to increment k after moving elements around, and when to advance the pointers (both left and right).
 */
export function removeElements(nums: Array<number>, val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

/**
 * Dry Run -
 * nums = [0,1,2,2,3,0,4,2], val = 2;
 * k = 0; i = 0;
 * 1. k = 0; i = 0; nums[0:i] = 0; -> nums[0:i] = 0 !== 2: val; nums[2:k] = nums[4:i] = [0,1,2,2,3,0,4,2]; k++ = k + 1 = 1;
 * 2. k = 1; i = 1; nums[1:i] = 1; -> nums[1:i] = 1 !== 2: val; nums[2:k] = nums[4:i] = [0,1,2,2,3,0,4,2]; k++ = k + 1 = 2;
 * 3. k = 2; i = 2; nums[2:i] = 2; -> nums[2:i] = 2 === 2: val;
 * 4. k = 2; i = 3; nums[3:i] = 2; -> nums[3:i] = 2 === 2: val;
 * 5. k = 2; i = 4; nums[4:i] = 3; -> nums[4:i] = 3 !== 2: val; nums[2:k] = nums[4:i] = [0,1,3,2,3,0,4,2]; k++ = k + 1 = 3;
 * 6. k = 3; i = 5; nums[5:i] = 0; -> nums[5:i] = 0 !== 2: val; nums[3:k] = nums[5:i] = [0,1,3,0,3,0,4,2]; k++ = k + 1 = 4;
 * 7. k = 4; i = 6; nums[6:i] = 4; -> nums[6:i] = 4 !== 2: val; nums[4:k] = nums[6:i] = [0,1,3,0,4,0,4,2]; k++ = k + 1 = 5;
 * 8. k = 4; i = 7; nums[7:i] = 2; -> nums[7:i] = 2 === 2: val;
 */
