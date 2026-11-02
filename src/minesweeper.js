const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i += 1) {
    result.push([]);
    for (let j = 0; j < cols; j += 1) {
      let minesCount = 0;
      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          if (x !== 0 || y !== 0) {
            const newRow = i + x;
            const newCol = j + y;
            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols
            ) {
              if (matrix[newRow][newCol] === true) {
                minesCount += 1;
              }
            }
          }
        }
      }
      result[i].push(minesCount);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
