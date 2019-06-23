/* Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation,
so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers.
The algorithm distorts the input image in the following way:
Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself.
All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down. */

function boxBlur(image) {
  let rowLength = image[0].length;
  let colHeight = image.length;
  //TODO -- build the frame for the new image.

  //* our empty matrix.
  let blurredImage = [];

  //TODO -- populate the frame with the blurred image.
  for (let x = 0; x < colHeight - 2; x++) {
    //colHeight - 2 since we are chopping two elements off each dimension.
    //for each X, we want to make a new row.
    let row = [];
    for (let y = 0; y < rowLength - 2; y++) {
      let sum = 0;
      for (let dx = 0; dx <= 2; dx++) {
        for (let dy = 0; dy <= 2; dy++) {
          sum += image[x + dx][y + dy];
        }
      }
      let average = Math.floor(sum / 9);
      row.push(average);
    }
    blurredImage.push(row);
  }

  return blurredImage;
}
console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
