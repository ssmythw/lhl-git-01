/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we ar e using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  //get the: sum, mean, number of values
  // sqrt(sum((x - populationMean)^2)/numberOfValues)
  let mean = arr.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / arr.length; 

  let arr2 = arr.map((k)=>{
    return (k - mean) ** 2
  })
  let sum = arr2.reduce((acc, curr)=> acc + curr, 0);
  let variance = sum / arr2.length;
  return round(Math.sqrt(variance));
};

// Don't change below:
module.exports = { stdev };
