function digitalRoot(n) {
  let nString = String(n);
  if (nString.length === 1) return n;
  let sum = 0;
  for (let i = 0; i < nString.length; i++) {
    sum += +nString[i];
  }
  return digitalRoot(sum);
}
