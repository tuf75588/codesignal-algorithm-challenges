/* In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games,
in which case the set continues until one of the players has won 7 games.

Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2. */

function tennisSet(score1, score2) {
  //is there a tie?
  let winner = Math.max(score1, score2);
  let loser = Math.min(score1, score2);
  let winningScore = 6;
  if (score1 === score2) return false;
  if (winner > winningScore && loser <= 6) {
    if ((winner === 7 && loser === 5) || (winner === 7 && loser === 6)) {
      return true;
    } else {
      return false;
    }
  }
  return loser < 5 && winner === winningScore;
}
console.log(tennisSet(3, 6));
