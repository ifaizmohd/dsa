/**
 * @description Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element
 * always exists in the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
export function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (count < 0) {
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}
