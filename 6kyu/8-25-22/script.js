// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//P - string containing multiple words each with an integer
//R - a string with the words from the parameter string rearranged according to the numbers each word contains
//E - "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//P

function order(words) {
  //split param string into array of words
  let arr = words.split(" ");
  //create empty arr to hold result array that will be joined
  let result = [];
  //loop through words in arr
  for (let i = 0; i < arr.length; i++) {
    let index;
    //split word into array
    let word = arr[i].split("");
    //loop through word
    for (let j = 0; j < word.length; j++) {
      //determine what integer the word contains
      if (
        +word[j] === 1 ||
        +word[j] === 2 ||
        +word[j] === 3 ||
        +word[j] === 4 ||
        +word[j] === 5 ||
        +word[j] === 6 ||
        +word[j] === 7 ||
        +word[j] === 8 ||
        +word[j] === 9
      ) {
        //assign index to variable
        index = +word[j] - 1;
      }
    }
    //insert word in result array at the proper index (int - 1)
    result[index] = word.join("");
  }
  return result.join(" ");
}
