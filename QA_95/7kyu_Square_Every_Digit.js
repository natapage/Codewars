function squareDigits(num) {
  let numS = String(num);
  let numArr = [];
  for (let i = 0; i < numS.length; i++) {
    numArr[i] = numS[i] ** 2;
  }
  return Number(numArr.join(""));
}
