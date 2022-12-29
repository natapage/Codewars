// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
  let arrHash = arr.map(hash);
  let hashCount = arrHash.reduce((acc, item, index) => {
    const value = acc[item];
    if (value) {
      value.number++;
    } else {
      acc[item] = { number: 1, value: arr[index] };
    }
    return acc;
  }, {});

  return Object.values(hashCount).find((el) => el.number === 1).value;
}

function hash(word) {
  let set = new Set([...word.toLowerCase()].sort());
  return Array.from(set).join("");
}
