const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const variants = str.split('').map((_, index) => {
    const leftPart = str.slice(0, index);
    const rightPart = str.slice(index + 1);
    return Number(leftPart + rightPart);
  });

  return Math.max(...variants);
}

module.exports = {
  deleteDigit
};
