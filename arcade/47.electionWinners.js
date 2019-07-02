/* Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far,
and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate.
If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
*/
function electionsWinners(votes, k) {
  //! i want to get the leading and trailing candidate first.
  let leadingCandidate = Math.max(...votes);
  if (k === 0) {
    return votes.filter((x) => x === leadingCandidate).length === 1 ? 1 : 0;
  }

  return votes.map((c) => c + k).filter((x) => x > leadingCandidate).length;
}
