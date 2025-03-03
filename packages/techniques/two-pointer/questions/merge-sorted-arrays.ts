/**
 * @description You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To
 * accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be
 * merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let vacant = nums1.length - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (vacant >= 0) {
    if (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[vacant] = nums1[p1];
        p1--;
      } else {
        nums1[vacant] = nums2[p2];
        p2--;
      }
    } else if (p2 >= 0) {
      nums1[vacant] = nums2[p2];
      p2--;
    }
    vacant--;
  }
}
