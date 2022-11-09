// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let sum = 0;
  let sum2 = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") sum++;
    if (s[i] === " " || i === s.length - 1) {
      if (sum < sum2) {
        sum2 = sum;
      }
      sum = 0;
    }
  }
  return sum2;
}
