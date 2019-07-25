function increaseNumberRoundness(n) {
  let trailers = 0;
  while (n % 10 === 0) {
    trailers++;
    n = Math.floor(n / 10);
  }
  let lastDigit = n.toString().lastIndexOf(0);
  return n.toString().slice(lastDigit).length > 1;
}

console.log(increaseNumberRoundness(902200100));
