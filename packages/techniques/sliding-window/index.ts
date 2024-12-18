/**
 * @description The sliding window algorithm is an optimization technique that allows us to efficiently process
 * contiguous subarrays (or substrings) by incrementally updating results instead of recalculating them from scratch.
 *
 * What is a sliding-window?
 * A sliding window is a window of constant width in which, when we slide it, one element is entering the window
 * from one end and one element is removed form the window from another end.
 * This technique is useful in many array traversal problems.
 * It basically improves the time complexity of the problem where we need to find the sum of sub-arrays.
 */
export function slidingWindow(array: Array<number>, k: number) {
  // starting index of the window.
  let start = 0;
  //  end index of the window.
  let end = k;
  const n = array.length;
  //   initializing the currentSum of the window as 0;
  let currentSum = 0;
  //   initializing the maxSum as 0;
  let maxSum = 0;
  //   first window.
  for (let i = start; i < end; i++) {
    // getting the sum of first K elements.
    currentSum += array[i];
  }
  //   assign the sum of first window as maxSum, then will compare with it to check the max.
  maxSum = currentSum;
  //   setting start = end means, we are now sliding the window, our previous end index became the start index of this window.
  start = end;
  //   sliding the window.
  for (let i = start; i < n; i++) {
    // here, array[i] is the index entrting the window and array[i-k] is the element leaving the window.
    currentSum += array[i] - array[i - start];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
