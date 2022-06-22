// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

function meeting(s) {
  let fullNameArr = s.split(";");
  let capitalNamesArr = [];
  for (let i = 0; i < fullNameArr.length; i++) {
    let firstName = fullNameArr[i].split(":")[0].toUpperCase();
    let lastName = fullNameArr[i].split(":")[1].toUpperCase();
    let fullName = `(${lastName}, ${firstName})`;
    capitalNamesArr.push(fullName);
  }
  let sortedNames = capitalNamesArr.sort();
  return sortedNames.join("");
}
