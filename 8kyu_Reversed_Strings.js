// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
  let strNew = [];
  for (let i = str.length, n = 0; i <= str.length && i >= 0; i--, n++) {
    strNew[n] = str[i];
  }
  return strNew.join("");
}
