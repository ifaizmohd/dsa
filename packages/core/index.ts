import { removeDuplicates } from '../techniques/two-pointer/questions/remove-duplicates-from-sorted-array';

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
console.log(nums.slice(0, k));
