/**
 * @description You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the
 * integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not
 * contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */
export function plusOne(nums: Array<number>): Array<number> {
  let carryOver = 1;
  let right = nums.length - 1;
  while (right >= 0) {
    if (nums[right] < 9) {
      nums[right] += carryOver;
      carryOver = 0;
      return nums;
    }
    nums[right] = 0;
    right--;
  }
  if (carryOver > 0) {
    nums.splice(0, 0, 1);
  }
  return nums;
}
