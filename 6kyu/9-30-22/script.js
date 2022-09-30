// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
  let wordArr = text.split(' ');
  let result = [];
  for (let i = 0; i < wordArr.length; i++) {
    let arr = wordArr[i].split('');
    if (arr.length > 2) {
      let secondLetter = arr[1];
      let lastLetter = arr[arr.length - 1];
      arr[arr.length - 1] = secondLetter;
      arr[1] = lastLetter;
    }

    let firstLetterAscii = arr[0].charCodeAt(0);
    arr[0] = firstLetterAscii;
    result.push(arr.join(''));
  }
  return result.join(' ');
};
