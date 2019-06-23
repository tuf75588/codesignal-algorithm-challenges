/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication.
There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function isIPv4Address(inputString) {
  let ipv4 = [...inputString.split(".")].map((x) => parseInt(x));
  if (ipv4.length !== 4) return false;
  let valid = [];
  for (let i = 0; i < ipv4.length; i++) {
    if (ipv4[i] >= 0 && ipv4[i] <= 255) {
      valid.push(ipv4[i]);
    } else {
      return false;
    }
  }
  let check = valid.map((num) => String(num)).join(".");
  return check === inputString;
}

console.log(isIPv4Address("255.255.255.255abcdekjhf"));
