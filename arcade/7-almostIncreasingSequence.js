function almostIncreasingSequence(seq) {
  let res = 0;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      res++;
      if (1 < res) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  }
  return true;
}
