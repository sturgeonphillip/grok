// template file helper function that calculates sum of squared digits
export function sumOfSquaredDigits(n) {
  let total = 0;
  // base
  while (n > 0) {
    // temp tracks number until 0
    let temp = Math.floor(n / 10);
    // digit is smaller number (one's place/remainder)
    let digit = n % 10;

    n = temp;
    // total is sum of current total total plus square of (current iteration of) smaller number;
    total += digit ** 2;
  }
  return total;
}

// recursively
export function recurse(n, total = 0) {
  // base
  if (n <= 0) return total;
  // divide input by 10 until it reaches 0 (base case)
  // last digit of n
  let digit = n % 10;
  // remaining digits
  let temp = Math.floor(n / 10);
  let square = digit ** 2;
  return recurse(temp, total + square);
}
