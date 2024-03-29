// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  let trimmedStr = str.trim();
  let arr = trimmedStr.split(' ');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let reverseWord = arr[i].split('').reverse().join('');
      result.push(reverseWord);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
}
