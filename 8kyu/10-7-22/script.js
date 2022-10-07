// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  let winner;
  if (scores[0] > scores[1]) {
    winner = teams[0];
  } else if (scores[1] > scores[0]) {
    winner = teams[1];
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
  return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`;
}
