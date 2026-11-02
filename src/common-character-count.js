const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const chars2 = s2.split('');

  s1.split('').forEach((char) => {
    const index = chars2.indexOf(char);
    if (index !== -1) {
      count += 1;
      chars2.splice(index, 1);
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount
};
