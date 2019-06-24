/* Given an array of integers,
replace all the occurrences of elemToReplace with substitutionElem. */

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((element) =>
    element === elemToReplace ? substitutionElem : element
  );
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3,2,3]
