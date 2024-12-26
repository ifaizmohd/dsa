/**
 * @description Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 * Return any array that satisfies this condition.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function sortArrayByParity(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[k], nums[i]] = [nums[i], nums[k]];
      k++;
    }
  }
  return nums;
}
