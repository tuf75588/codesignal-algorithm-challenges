function isPower(n) {
  let powers = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      powers.push(i);
    }
  }
  powers = powers.map((power) => Math.pow(power, 3));
  powers
}

console.log(isPower(125));
