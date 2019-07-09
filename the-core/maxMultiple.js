function maxMultiple(divisor, bound) {
  let range = [];
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) range.push(i);
  }

  return Math.max(...range);
}
