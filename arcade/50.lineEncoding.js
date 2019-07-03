/* Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]


Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned. */

function lineEncoding(s) {
  //**find the index where a new character starts, */
  let encoding = "";
  let occurrences = 1;
  let lastChar = s.charAt(0);
  for (let i = 1; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === lastChar) {
      occurrences++;
    } else {
      encoding +=
        occurrences > 1 ? occurrences + lastChar : (encoding += lastChar);
      lastChar = char;
      occurrences = 1;
    }
  }
  encoding += occurrences > 1 ? occurrences + lastChar : lastChar;
  return encoding;
}

console.log(lineEncoding("aabbbc"));
