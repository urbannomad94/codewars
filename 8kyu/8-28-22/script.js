// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

const shortcut = (string) => {
  let arr = string.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === "a" ||
      arr[i].toLowerCase() === "e" ||
      arr[i].toLowerCase() === "i" ||
      arr[i].toLowerCase() === "o" ||
      arr[i].toLowerCase() === "u"
    ) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
};
