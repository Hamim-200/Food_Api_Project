const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const singleNumber = [...new Set(numbers)];
singleNumber.forEach(number => console.log(number));
