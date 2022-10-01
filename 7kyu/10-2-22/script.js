// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = (name) => {
  let lowerName = name.toLowerCase().split('');
  lowerName[0] = lowerName[0].toUpperCase();
  return `Hello ${lowerName.join('')}!`;
};
