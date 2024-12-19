import { removeElements } from '../techniques/two-pointer/questions/remove-element';

console.log(
  '------------------------------------------------------------------------------'
);
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const k = removeElements(nums, val);
console.log(k, nums);
console.log(nums.slice(0, k));
console.log(
  '------------------------------------------------------------------------------'
);
