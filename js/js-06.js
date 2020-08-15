let input;
const numbers = [];
let total = 0;
do {
  input = prompt("введите число");
  numbers.push(Number(input));
  // console.log(numbers);
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(total);

// let input;
// const numbers = [];
// let total = 0;
// do {
//   input = prompt("Ведите число");
//   numbers.push(Number(input));
//   console.log(numbers);
// } while (input !== null);
// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
// }

// console.log(`Общая сума чисел равна ${total}`);
