export function reverseWords(sentence) {
  let strLen = sentence.length;
  sentence = sentence.trim().replace(/\s+/g, ' ').split('').reverse();

  let start = 0;
  let end = 0;

  while (start < strLen) {
    while (end < strLen && sentence[end] !== ' ') end += 1;

    rev(sentence, start, end - 1);
    start = end + 1;
    end += 1;
  }

  return sentence.join('');
}

function rev(str, start, end) {
  while (start < end) {
    let temp = str[start];

    str[start] = str[end];
    str[end] = temp;

    start += 1;
    end -= 1;
  }
  return str.join('');
}

console.log(reverseWords('We love Python')); // Python love we
console.log(reverseWords('To be or not to be')); // be to not or be To
console.log(reverseWords('You are amazing')); // amazing are You
console.log(reverseWords('Hello     World')); // World Hello *notice excess spaces
console.log(reverseWords('Hey')); // Hey
