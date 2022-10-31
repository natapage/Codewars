// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0) return 0;
  let sum = 0;
  for (let i = number - 1; i > 0; i--) {
    if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
      sum += i;
    }
  }
  return sum;
}
