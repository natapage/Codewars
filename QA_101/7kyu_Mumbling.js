// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let sAccum = "";
  for (let n = 0; n < s.length; n++) {
    sAccum += s[n].toUpperCase() + s[n].toLowerCase().repeat(n) + "-";
  }
  return sAccum.slice(0, -1); //от первого элемента до предпоследнего
}
