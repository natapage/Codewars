//www.codewars.com/kata/546e2562b03326a88e000020

// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// новое решение

https: function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((item) => item ** 2)
    .join("");
}

// старое решение

function squareDigits(num) {
  let numS = String(num);
  let numArr = [];
  for (let i = 0; i < numS.length; i++) {
    numArr[i] = numS[i] ** 2;
  }
  return Number(numArr.join(""));
}
