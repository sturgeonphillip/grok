export function isPalindrome(s) {
  if (s.length <= 1) return true;
  let p = 0;
  let q = s.length - 1;

  while (p <= q) {
    if (s[p] !== s[q]) return false;

    p++;
    q--;
  }
  return true;
}

// test cases
// true
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('raceacar')); // false
console.log(isPalindrome('A')); // true
console.log(isPalindrome('')); // true
console.log(isPalindrome('abcdabcd')); // false
console.log(isPalindrome('dbcaabcd')); // false
