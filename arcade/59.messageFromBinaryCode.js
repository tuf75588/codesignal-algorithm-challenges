/* You are taking part in an Escape Room challenge designed specifically for programmers.
In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message.
After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message. */

function messageFromBinaryCode(code) {
  let digits = [];
  let length = code.length;

  //grab 8 bits each of the provided string
  for (let i = 0; i < length; i += 8) {
    let everyEight = code.slice(i, i + 8);
    digits.push(everyEight);
  }
  return digits
    .map((binCode) => String.fromCharCode(parseInt(binCode, 2)))
    .join("");
}

console.log(
  messageFromBinaryCode("010010000110010101101100011011000110111100100001")
); // Hello!
