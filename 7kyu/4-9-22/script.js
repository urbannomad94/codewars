// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (!arr.includes(s1.charAt(i))) {
      arr.push(s1.charAt(i));
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (!arr.includes(s2.charAt(j))) {
      arr.push(s2.charAt(j));
    }
  }
  return arr.sort().join("");
}
