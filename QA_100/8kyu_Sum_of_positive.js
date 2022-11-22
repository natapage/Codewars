//www.codewars.com/users/natapage/completed_solutions

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// новое решение

https: function positiveSum(arr) {
  return arr.reduce((accum, item) => (item > 0 ? accum + item : accum), 0);
}

// старое решение

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    } else continue;
  }
  return sum;
}
