import { recurse } from './sumOfSquaredDigits.js';

// brute force
export function isHappyNumber(n) {
  const seen = {};

  let value = recurse(n);
  while (value !== 1) {
    if (!seen[value]) {
      seen[value] = true;
    } else {
      return false;
    }
    value = recurse(value);
  }
  return true;
}

console.log(isHappyNumber(4)); // false
console.log(isHappyNumber(28)); // true

/**
 * TIME:
 * time is O(k * log n), where k is number of iterations until isHappyNumber() returns a boolean evaluation.
 * the while loop runs k times, running recurse() twice each iteration.
 * complexity of recurse() is O(log n) because it recursively divides the input by 10 until it reaches 0.
 * Math.floor() modulus % both run in constant time O(1) and the exponent operator (n ** 2) runs O(log n)
 *
 * SPACE:
 * space complexity is O(n), where n is the number of iterations required to determine if a number is happy. This is because the function uses a hash table to track previously seen values, which can grow up to the size of n.
 * the space of recurse() is O(log n), where n is the input number because it is called recursively until n becomes 0.
 * the inbuilt JS functions invoked are constant. they do not use any additional memory proportional to the input size.
 */

export function happyFastSlow(n) {}
