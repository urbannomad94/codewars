// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove(string) {
  let arr = string.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!") {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return `${result.join("")}!`;
}
