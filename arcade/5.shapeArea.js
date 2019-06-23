/* Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n. */

function shapeArea(n) {
  //finding the area of an interesting polygon
  return Math.pow(n, 2) + Math.pow(n - 1, 2);
}

shapeArea(2); // 5;
