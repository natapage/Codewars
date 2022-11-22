// https://www.codewars.com/kata/52685f7382004e774f0001f7

// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// DATE TIMEMATHEMATICSALGORITHMS

function humanReadable(seconds) {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds - hh * 3600) / 60);
  const ss = seconds - hh * 3600 - mm * 60;

  function format(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return `${format(hh)}:${format(mm)}:${format(ss)}`;
}
