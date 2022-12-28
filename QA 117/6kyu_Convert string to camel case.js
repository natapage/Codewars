// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// // Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let strArr = Array.from(str)
    .map((item) => (item === "-" || item === "_" ? "-" : item))
    .join("")
    .split("-");
  return (
    strArr[0] +
    strArr
      .slice(1)
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("")
  );
}
