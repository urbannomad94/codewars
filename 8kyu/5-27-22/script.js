// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let forwards = x.toLowerCase();
  let backwards = x.toLowerCase().split("").reverse().join("");
  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
}
