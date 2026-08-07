/* Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. 
If n < 0 or m < 0 return 0. */

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}
console.log(paperwork(3, 5));

/*
Rules of the "Rock, Paper, Scissors" game are:

Rock beats Scissors,
Scissors beat Paper,
Paper beats Rock,
Two identical moves are a draw.
Let's play! You will be given valid moves 
of two Rock, Paper, Scissors players, 
and have to return which player won: "Player 1 won!"
 for player 1, and "Player 2 won!" for player 2. 
 In case of a draw return Draw!.
*/

/**
 *
 * @param {string} p1 - rock/paper/scissors of player 1
 * @param {string} p2 - rock/paper/scissors of player 2
 * @returns win between players. Or draw
 */
const rps = (p1, p2) => {
  let winResult = null;
  const variants = [
    "rock paper",
    "rock scissors",
    "rock rock",
    "paper rock",
    "paper scissors",
    "paper paper",
    "scissors rock",
    "scissors paper",
    "scissors scissors",
  ];

  const winners = [2, 1, 0, 1, 2, 0, 2, 1, 0];

  for (let i = 0; i < variants.length; ++i) {
    if (p1 + " " + p2 === variants[i]) {
      winResult = winners[i];
      break;
    }
  }
  if (winResult !== 0) {
    return `Player ${winResult} won!`;
  } else {
    return `Draw!`;
  }
};
