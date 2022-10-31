//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let n = 0; n < A.length; n++) {
      if (A[i] === A[n]) {
        sum += 1;
      }
    }
    if (sum === 1 || sum % 2 !== 0) return A[i];
  }
}
