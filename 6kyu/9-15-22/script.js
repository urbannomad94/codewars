// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  let arr = string.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      result.push(1);
    } else if (arr[i] === 'e') {
      result.push(2);
    } else if (arr[i] === 'i') {
      result.push(3);
    } else if (arr[i] === 'o') {
      result.push(4);
    } else if (arr[i] === 'u') {
      result.push(5);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

function decode(string) {
  let arr = string.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result.push('a');
    } else if (arr[i] == 2) {
      result.push('e');
    } else if (arr[i] == 3) {
      result.push('i');
    } else if (arr[i] == 4) {
      result.push('o');
    } else if (arr[i] === 5) {
      result.push('u');
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}
