export function isPalindrome(s) {
  if (s.length <= 1) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return mirror(s, left + 1, right) || mirror(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

function mirror(str, p, q) {
  while (p < q) {
    if (str[p] !== str[q]) return false;
    p++;
    q--;
  }
  return true;
}
console.log(isPalindrome('madame')); // true
console.log(isPalindrome('dead')); // true
console.log(isPalindrome('abca')); // true
console.log(isPalindrome('tebbem')); // false
console.log(isPalindrome('eeccccbebaeeabebccceea')); // talse
console.log(
  isPalindrome(
    'ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno'
  )
); // false

/**
 * // /** version 2 
export function isPalindrome(s) {
    if (s.length <= 1) return true;
    let left = 0;
    let right = s.length - 1;
    while( left < right) {
      if (check(s,left,right)) {
          left++;
          right--;
      } else if (check(s, left + 1, right)) {
        left += 1;
          while (left < right) {
              if  (check(s, left + 1, right)) {
                  left++;
                  right--;
              } else {
                  return false
                  }
          }
      } else if (check(s, left, right - 1)) {
          right -= 1;
          while(left < right) {
              if (check(s, left, right)) {
                  left++;
                  right--;
              } else {
                  return false;
              }
          }
      } else {
          return false;
      }
    }
    return true;
}

function mirror(s, p, q) {
    if (s[p] === s[q]) return true;
    return false;
}

// */
