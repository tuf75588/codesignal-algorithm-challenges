/* You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names,
the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files. */

//! hard problem

function fileNaming(names) {
  let filenames = [];
  for (let name of names) {
    if (filenames.includes(name)) {
      //do some stuff.
      let instances = 1;
      let newName = name + "(" + instances + ")";
      while (filenames.includes(newName)) {
        instances++;
        newName = name + "(" + instances + ")";
      }
      filenames.push(newName);
    } else {
      //do some other stuff.
      filenames.push(name);
    }
  }
  return filenames;
}

console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]));
