//https://www.codewars.com/users/natapage/completed_solutions

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n) {
  if (n < 10) return -1;

  function getFirstToSwitch(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] > arr[i - 1]) {
        return i - 1;
      }
    }
    return -1;
  }

  function getSecondToSwitch(tail, first) {
    let m = 9;
    let secondIndex = 0;
    for (let i = 0; i < tail.length; i++) {
      if (tail[i] > first && tail[i] < m) {
        m = tail[i];
        secondIndex = i;
      }
    }
    return secondIndex;
  }

  function switchNumbers(arr, firstIndex, secondIndex) {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    return arr;
  }

  const arr = n.toString().split("").map(Number);
  const firstIndex = getFirstToSwitch(arr);
  if (firstIndex === -1) return -1;
  const tail = arr.slice(firstIndex + 1);
  const secondIndex = getSecondToSwitch(tail, arr[firstIndex]) + firstIndex + 1;
  switchNumbers(arr, firstIndex, secondIndex);
  const sortedTail = arr.slice(firstIndex + 1).sort((a, b) => a - b);
  return +arr
    .slice(0, firstIndex + 1)
    .concat(sortedTail)
    .join("");
}
