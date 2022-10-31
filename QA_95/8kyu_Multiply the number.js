//https://www.codewars.com/kata/5708f682c69b48047b000e07

function multiply(number) {
  if (number < 0) {
    return number * 5 ** (number.toString().length - 1);
  }
  return number * 5 ** number.toString().length;
}
