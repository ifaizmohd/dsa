function twoSum(nums: number[], target: number): number[] {
  const output = [];
  let left = 0;
  let right = nums.length - 1;
}

/**
 * @description Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const triplet = twoSum(nums.splice(i, 1), 0);
    console.log('triplet = ', triplet);
    if (triplet.length) {
      triplet.splice(0, 0, first);
      output.push(triplet);
    }
  }
  return output;
}

/**
 * [1,[2,3,4,5,6,7,8]]
 * target = 9;
 * first = 1;
 * updated target = target - first = 8;
 *
 */
