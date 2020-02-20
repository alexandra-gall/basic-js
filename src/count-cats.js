module.exports = function countCats(matrix) {
  let count = 0;
  for (let row=0; row<matrix.length; row++) {
    for (let col=0; col<matrix[row].length; col++){
      if (matrix[row][col]==='^^'){
        count+=1;
      }
    }
  }
  return count;
};
