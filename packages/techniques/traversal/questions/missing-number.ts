/**
 * @description Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is
 * missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
export function missingNumber(nums: number[]): number {
  const n = nums.length;
  let expectedXor = 0;
  let actualXor = 0;
  for (let i = 0; i <= n; i++) {
    expectedXor ^= i;
  }

  for (let j = 0; j < n; j++) {
    actualXor ^= nums[j];
  }

  return expectedXor ^ actualXor;
}
