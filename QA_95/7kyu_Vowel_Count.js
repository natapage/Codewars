//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let sum = 0;
  let strNew = Array.from(str);
  let vowels = Array.from("aeiou");
  for (let i = 0; i < strNew.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
      if (strNew[i] === vowels[n]) {
        sum++;
      }
    }
  }
  return sum;
}
