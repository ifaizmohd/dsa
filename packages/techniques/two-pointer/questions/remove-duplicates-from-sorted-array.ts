/**
 * @description Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they were
 * present in nums initially. The remaining elements of nums are not important as well as the size of nums.
 *
 * Return k.
 * @param nums
 * @returns {number}
 * this problem is solved using two-pointer technique.
 */
export function removeDuplicates(nums: Array<number>): number {
  let k = 0; // initializing first pointer.
  if (nums.length === 0) return 0;
  for (let i = 1; i < nums.length; i++) {
    // using for loop's 'i' as second pointer.
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}

/**
 * Dry Run -
 * k = 0;
 * i = 1
 * nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
 * k = 0; i = 1; nums[0:k] = 0; nums[1:i] = 0
 * k = 0; i = 2; nums[0:k] = 0; nums[2:i] = 1 -> k++; k = 0 + 1 = 1; nums[1:k] = nums[2:i] = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4];
 * k = 1; i = 3; nums[1:k] = 1; nums[3:i] = 1
 * k = 1; i = 4; nums[1:k] = 1; nums[4:i] = 1
 * k = 1; i = 5; nums[1:k] = 1; nums[5:i] = 2 -> k++; k = 1 + 1 = 2; nums[2:k] = nums[5:i] = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4];
 */
