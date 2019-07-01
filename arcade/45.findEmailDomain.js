/* An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters.
Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part. */

function findEmailDomain(inputString) {
  // const re = /@([a-zA-Z]+\S+)/;
  // return inputString.match(re)[1];

  //more efficient solution.
  return inputString.split("@").pop();
}

console.log(findEmailDomain("prettyandsimple@example.ru"));
