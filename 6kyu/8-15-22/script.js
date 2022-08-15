// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let arr;
  if (str.includes("-")) {
    arr = str.split("-");
  } else if (str.includes("_")) {
    arr = str.split("_");
  } else {
    return str;
  }

  let resultArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let word = arr[i].split("");
    word[0] = word[0].toUpperCase();
    resultArr.push(word.join(""));
  }
  return resultArr.join("");
}
