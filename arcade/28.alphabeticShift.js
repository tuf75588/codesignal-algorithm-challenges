/* Given a string, replace each of its character by the next one in the English alphabet (z would be replaced by a). */

function alphabeticShift(inputString) {
  return inputString
    .split("")
    .map((el) => (el === "z" ? "a" : String.fromCharCode(el.charCodeAt() + 1)))
    .join("");
}

console.log(alphabeticShift("aaaabbbccd"));
