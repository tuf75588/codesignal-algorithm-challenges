function reverseInParentheses(s) {
  //**create a capture group for any strings inside parens via a regex */
  const regex = /\(([^\(\)]*)\)/g;
  //run while this regex test results in true

  while (regex.test(s)) {
    s = s.replace(regex, function(match, capture) {
      return capture
        .split("")
        .reverse()
        .join("");
    });
  }
  return s;
}

console.log(reverseInParentheses("a(bc)de"));
