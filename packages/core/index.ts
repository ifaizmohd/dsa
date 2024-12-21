import { searchInsertPosition } from '../techniques/two-pointer/questions/search-insert-position';

console.log(
  '------------------------------------------------------------------------------'
);
const nums = [1, 3, 5, 6];
const val = 2;
const k = searchInsertPosition(nums, val);
console.log(k, nums);
console.log(
  '------------------------------------------------------------------------------'
);
