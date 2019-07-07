/* Define a word as a sequence of consecutive English letters. Find the longest word from the given string. */

function longestWord(text) {
  //find all string lengths.
    let re = /[a-zA-Z]+/gi
    return text.match(re).reduce((a,b) => a.length > b.length ? a : b, '')
}
console.log(longestWord("Ready, steady, go!"));
