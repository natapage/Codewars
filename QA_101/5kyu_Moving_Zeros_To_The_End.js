// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const arrNotZero = arr.filter((element) => element !== 0); // кладу в ноывй массив всё кроме нулей
  const arrZero = Array(arr.length - arrNotZero.length).fill(0); // создаю массив нужной длины и наполняю его нулями
  return arrNotZero.concat(arrZero); // соединяю массивы
}
