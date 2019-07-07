/* Check if the given string is a correct time representation of the 24-hour clock. */

function validTime(time) {
  let re = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(time);
}

console.log(validTime("13:26")); //true;
