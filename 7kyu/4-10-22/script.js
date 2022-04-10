// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let resultArr = [];
  let wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    let letterArr = wordArr[i].split("");
    resultArr.push(letterArr.reverse().join(""));
  }
  return resultArr.join(" ");
}
