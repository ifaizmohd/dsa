/**
 * @description You are given a 0-indexed integer array nums of even length.
 *
 * As long as nums is not empty, you must repetitively:
 * 1. Find the minimum number in nums and remove it.
 * 2. Find the maximum number in nums and remove it.
 * 3. Calculate the average of the two removed numbers.
 *
 * The average of two numbers a and b is (a + b) / 2.
 * For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
 *
 * Return the number of distinct averages calculated using the above process.
 *
 * Note that when there is a tie for a minimum or maximum number, any can be removed.
 * @param {number[]} nums
 * @return {number}
 */
export function distinctAverages(nums: number[]): number {
  if (nums.length < 2) return 0;
  if (nums.length === 2) return 1;
  let distinctAverages = 0;
  let tempAvg = null;
  while (nums.length > 0) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const avg = (min + max) / 2;
    if (avg !== tempAvg) {
      distinctAverages++;
      tempAvg = avg;
    }
    const indexOfMin = nums.indexOf(min);
    nums.splice(indexOfMin, 1);
    const indexOfMax = nums.indexOf(max);
    nums.splice(indexOfMax, 1);
    console.log(
      'distinctAverages = ',
      distinctAverages,
      ' tempAvg = ',
      tempAvg,
      ' avg = ',
      avg,
      ' min = ',
      min,
      ' max = ',
      max,
      ' indexOfMin = ',
      indexOfMin,
      ' indexOfMax = ',
      indexOfMax,
      ' nums = ',
      nums
    );
  }
  return distinctAverages;
}
