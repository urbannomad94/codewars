// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const vowCode = [97, 101, 105, 111, 117];
  for (let i = 0; i < a.length; i++) {
    if (vowCode.includes(a[i])) {
      a[i] = String.fromCharCode(a[i]);
    }
  }
  return a;
}
