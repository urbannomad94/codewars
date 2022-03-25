// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  let firstCap = [];
  let secondCap = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 != 0) {
      firstCap.push(s[i].toUpperCase());
    } else {
      firstCap.push(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      secondCap.push(s[i].toUpperCase());
    } else {
      secondCap.push(s[i]);
    }
  }
  let x = firstCap.join("");
  let y = secondCap.join("");
  return [y, x];
}
