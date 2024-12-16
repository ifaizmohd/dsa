/**
 * @description The two-pointer technique is a powerful algorithmic approach used to solve various array-related problems efficiently.
 * It involves using two pointers to iterate through an array, often in opposite directions, to find specific
 * conditions or patterns within the data.
 * @param array - A sorted array of numbers.
 * @param target - A number which sum we need to find in the array.
 * @returns {Array} - return the index of the elements which adds up to the target.
 *
 * KEY IDEA:-
 * Two Pointers: Initialize two pointers, typically one at the beginning and the other at the end of the array.3
 * Iterative Movement: Move the pointers towards each other or in a specific pattern based on the problem's requirements.4
 * Condition Checking: At each step, check if the current positions of the pointers satisfy the desired condition.5
 * Pointer Adjustment: Adjust the pointers accordingly, either moving them closer or farther apart, to explore different combinations of elements.6
 */
export function twoSum(array: Array<number>, target: number): Array<number> {
  // Initialize two pointers, typically one at the beginning and the other at the end of the array.
  let left = 0;
  let right = array.length - 1;
  const output: Array<number> = [];
  // Move the pointers towards each other
  while (left < right) {
    // At each step, check if the current positions of the pointers satisfy the desired condition.
    const sum = array[left] + array[right];
    if (sum === target) {
      output.push(left, right);
    } else if (sum < target) {
      // Adjust the pointers accordingly
      right--;
    } else {
      left++;
    }
  }
  return output;
}

// [4,6,12,15], 10
//
