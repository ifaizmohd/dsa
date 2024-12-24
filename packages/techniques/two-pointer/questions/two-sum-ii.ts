/**
 * @description Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such
 * that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where
 * 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of
 * length 2.
 *
 * You may not use the same element twice.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  const output: number[] = [];
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      output.push(left + 1);
      output.push(right + 1);
      return output;
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return output;
}
