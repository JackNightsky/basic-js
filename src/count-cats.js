module.exports = function countCats(matrix) {
  return matrix.flat().filter(el => el === "^^").length
  // throw 'Not implemented';
  // remove line with error and write your code here
};
