//www.codewars.com/kata/5708f682c69b48047b000e07

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹

// старое решение

https: function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

// новое решение

function multiply(number) {
  if (number < 0) {
    return number * 5 ** (number.toString().length - 1);
  }
  return number * 5 ** number.toString().length;
}
