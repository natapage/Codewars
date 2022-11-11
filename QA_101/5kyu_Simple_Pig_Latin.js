// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  return str
    .split(" ") // делаю массив из строки
    .map((word) =>
      ".,!?".includes(word) ? word : word.slice(1) + word[0] + "ay"
    ) // перебираю методом map который возвращает массив с измененными элементами
    .join(" "); // собираю все обратно в строку
}
