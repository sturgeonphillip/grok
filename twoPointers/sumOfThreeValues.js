export function sumOfThree(nums, target) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    let p = i + 1;
    let q = nums.length - 1;
    while (p < q) {
      if (nums[p] + nums[q] === sum) {
        return true;
      } else if (nums[p] + nums[q] < sum) {
        p++;
      } else if (nums[p] + nums[q] > sum) {
        q--;
      }
    }
  }
  return false;
}

console.log(sumOfThree([1, -1, 0], -1));
console.log(sumOfThree([3, 7, 1, 2, 8, 4, 5], 10));
console.log(sumOfThree([3, 7, 1, 2, 8, 4, 5], 21));
console.log(sumOfThree([-1, 2, 1, -4, 5, 3], -8));
console.log(sumOfThree([-1, 2, 1, -4, 5, 3], 0));
