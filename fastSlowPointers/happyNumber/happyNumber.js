import { recurse } from './sumOfSquaredDigits.js';
console.log('recurse', recurse);
export function isHappyNumber(n) {
  // init pointers that increment 1 and 2 steps
  let slow = n;
  let fast = recurse(n);

  // iterate with base cases that check for a loop
  while (fast !== 1 && slow !== fast) {
    slow = recurse(slow);
    fast = recurse(recurse(fast));
  }

  return fast === 1;
}

const tests = [1, 5, 19, 25, 7];
const results = tests.map((x) => isHappyNumber(x));
console.log(results); // true, false, true, false, true

/**
 * TIME: O(log n)
 * the number of iterations in the while loop is proportional to the number of digits in the input number. the helper function has a time complexity of O(log n) because it recursively calls itself with a smaller input number until the input less than or equal to 0.
 * Inbuilt js functions are O(1) because they do a constant amount of work regardless of input size.
 *
 
 *
 * SPACE:
 * memory is O(1) as we don't need any extra space because we only manipulae the pointers and have a constant amount of additional variables. the helper function is O(log n) because it uses recursion to calculate the sum of squared digits and its maximum depth of the recursion is proportional to the number of digits in the input number. 
 */
