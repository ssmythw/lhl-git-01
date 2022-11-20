/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  let element = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let currCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        currCount ++;
      }
      if (currCount > count) {
        count = currCount;
        element = arr[i];
      }
    }
  }
  return element;
};

// Don't change below:

module.exports = { mode };
