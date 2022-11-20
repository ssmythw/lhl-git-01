/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  if (arr.length % 2 === 1) {
    let middle = arr[Math.round((arr.length - 1) / 2)];
    return middle;
  } else {
    let middle =  (arr[Math.round((arr.length - 2) / 2)] + arr[Math.round((arr.length - 1) / 2)]) / 2;
    return middle;
  }
};

// Don't change below:

module.exports = { median };
