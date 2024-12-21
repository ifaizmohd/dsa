/**
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
 * return the index
 * where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */
export function searchInsertPosition(
  nums: Array<number>,
  target: number
): number | undefined {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * nums = [1, 3, 5, 6], target = 2;
 * left = 0; right = 3; mid = 2;
 * nums[2:mid] = 5; 5 > 2; nums -> [1, 3];
 * left = 0; right = 2; mid = 1
 */
